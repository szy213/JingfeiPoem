import React from 'react';
import { HelpCircle, X, Sparkles, CornerDownLeft, Shuffle, Layers, Download } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full max-w-sm bg-[#1b161c] border border-[#3e3240] rounded-2xl p-5 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-[#2d242f] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#c93c3c]" />
            <h3 className="font-serif-sc font-bold text-base text-[#f4efe8]">拼贴诗创作指南</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#a093a1] hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs font-serif-sc text-[#c2b5c0] leading-relaxed">
          <div className="p-2.5 bg-[#231d25] rounded-lg border border-[#382d38] flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <b className="text-[#f4efe8]">选词拼贴：</b>
              点击下方词库中的歌词词条即可贴到画纸上，光标会自动定位到选中的词条后。
            </div>
          </div>

          <div className="p-2.5 bg-[#231d25] rounded-lg border border-[#382d38] flex items-start gap-2">
            <Shuffle className="w-4 h-4 text-[#e6c875] shrink-0 mt-0.5" />
            <div>
              <b className="text-[#f4efe8]">随机换一批：</b>
              点击“换一批”按钮可以刷新词库，或点击“灌溉灵感”抽取灵感。
            </div>
          </div>

          <div className="p-2.5 bg-[#231d25] rounded-lg border border-[#382d38] flex items-start gap-2">
            <CornerDownLeft className="w-4 h-4 text-[#c93c3c] shrink-0 mt-0.5" />
            <div>
              <b className="text-[#f4efe8]">换行与排版：</b>
              点击“换行”创建新诗行。点击画布上的任意词条可切换词条纸质或微调位置。
            </div>
          </div>

          <div className="p-2.5 bg-[#231d25] rounded-lg border border-[#382d38] flex items-start gap-2">
            <Download className="w-4 h-4 text-[#c93c3c] shrink-0 mt-0.5" />
            <div>
              <b className="text-[#f4efe8]">无损图片保存：</b>
              完成诗篇后点击右上角“保存诗篇”生成高分辨率海报，手机端可长按图片保存到系统相册。
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-2 rounded-lg bg-[#8c232b] text-white font-serif-sc text-xs font-bold"
        >
          我知道了，开始创作
        </button>
      </div>
    </div>
  );
};
