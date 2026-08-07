import React, { useState, useEffect } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import confetti from 'canvas-confetti';
import { Download, X, Check, Share2, Sparkles, AlertCircle, Loader2 } from 'lucide-react';

import { CanvasBgType } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  poemTitle: string;
  bgType?: CanvasBgType;
}

const CONFETTI_COLORS: Record<CanvasBgType, string[]> = {
  rose: ['#c93c3c', '#d4af37', '#e8ded3', '#8c232b'],
  linen: ['#D8845E', '#A7BCB8', '#E0B279', '#F1D5C7'],
  kraft: ['#AB80AE', '#DE83AB', '#667D73', '#e5665d'],
  liberation: ['#C82018', '#05D1EF', '#EBC59D', '#E738DC'],
};

const LOADING_STEPS = [
  '正在涂抹胶水...',
  '正在拼贴字条...',
  '正在装裱海报...',
];

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  canvasRef,
  poemTitle,
  bgType = 'rose',
}) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isGenerating) {
      setLoadingStepIndex(Math.floor(Math.random() * LOADING_STEPS.length));
      timer = setInterval(() => {
        setLoadingStepIndex(Math.floor(Math.random() * LOADING_STEPS.length));
      }, 500);
    } else {
      setLoadingStepIndex(0);
    }
    return () => clearInterval(timer);
  }, [isGenerating]);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      generateImage();
    } else {
      setDataUrl(null);
    }
  }, [isOpen]);

  const generateImage = async () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);

    try {
      // Small timeout to allow all font styles to resolve
      await new Promise((resolve) => setTimeout(resolve, 300));

      const filterFn = (node: Node) => {
        if (node instanceof HTMLElement && node.classList.contains('export-hide')) {
          return false;
        }
        return true;
      };

      let url = '';
      try {
        url = await toPng(canvasRef.current, {
          quality: 0.98,
          pixelRatio: 2,
          cacheBust: false,
          filter: filterFn,
        });
      } catch (firstErr) {
        console.warn('Initial canvas capture failed, retrying with skipFonts...', firstErr);
        url = await toPng(canvasRef.current, {
          quality: 0.98,
          pixelRatio: 2,
          skipFonts: true,
          filter: filterFn,
        });
      }

      setDataUrl(url);
      setIsGenerating(false);

      // Trigger festive paper confetti matching canvas style
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: CONFETTI_COLORS[bgType] || CONFETTI_COLORS.rose,
      });
    } catch (err) {
      console.error('Failed to capture canvas:', err);
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `陈婧霏拼贴诗_${poemTitle || '无题'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in overflow-y-auto">
      <div className="w-full max-w-sm sm:max-w-md bg-[#f2efea] border border-[#2d2a26] text-[#2d2a26] p-5 shadow-2xl relative my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#2d2a26]/20 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c2410c]" />
            <h3 className="font-serif-sc font-bold text-base text-[#2d2a26]">拼贴诗导出预览</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#2d2a26]/70 hover:text-[#2d2a26]">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Captured Image Display */}
        <div className="relative min-h-[300px] flex items-center justify-center bg-[#e5e1d8] border border-[#2d2a26]/30 p-3 overflow-hidden shadow-inner">
          {isGenerating ? (
            <div className="flex flex-col items-center gap-2 text-[#2d2a26]">
              <Loader2 className="w-7 h-7 animate-spin text-[#c2410c]" />
              <span className="font-serif-sc text-xs animate-pulse font-medium">
                {LOADING_STEPS[loadingStepIndex]}
              </span>
            </div>
          ) : dataUrl ? (
            <div className="flex flex-col items-center">
              <img
                src={dataUrl}
                alt="Generated Collage Poetry Poster"
                className="max-h-[380px] w-auto border border-[#2d2a26] object-contain shadow-xl"
              />
              <p className="text-[11px] text-[#2d2a26]/80 font-serif-sc mt-3 text-center flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3 text-[#c2410c]" />
                <span>手机端可<b>长按上方图片</b>保存到相册</span>
              </p>
            </div>
          ) : (
            <div className="text-xs text-[#2d2a26]/70">生成失败，请重试</div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={generateImage}
            disabled={isGenerating}
            className="px-3 py-2 border border-[#2d2a26] text-xs font-serif-sc text-[#2d2a26] hover:bg-[#2d2a26] hover:text-white transition-colors"
          >
            重新生成
          </button>
          
          <button
            onClick={handleDownload}
            disabled={!dataUrl || isGenerating}
            className="flex-1 py-2.5 bg-[#2d2a26] border border-[#2d2a26] text-white font-serif-sc text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:bg-[#c2410c] active:scale-95 transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>下载无损图片</span>
          </button>
        </div>

      </div>
    </div>
  );
};
