import React from 'react';
import { Sparkles, Music, Image as ImageIcon, RotateCcw, HelpCircle, Palette, BookmarkCheck } from 'lucide-react';
import { CanvasBgType } from '../types';
import { CANVAS_BG_CONFIGS } from '../data/paperStyles';

interface HeaderProps {
  currentBg: CanvasBgType;
  onChangeBg: (bg: CanvasBgType) => void;
  onOpenPresets: () => void;
  onOpenAudio: () => void;
  onOpenHelp: () => void;
  onClearCanvas: () => void;
  onExportImage: () => void;
  itemCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentBg,
  onChangeBg,
  onOpenPresets,
  onOpenAudio,
  onOpenHelp,
  onClearCanvas,
  onExportImage,
  itemCount
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#f2efea]/95 backdrop-blur-md border-b border-[#2d2a26]/15 px-2.5 py-2 sm:px-6">
      <div className="max-w-md sm:max-w-4xl mx-auto flex items-center justify-between gap-2">
        
        {/* Brand / Editorial Header */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col">
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#2d2a26]/60 font-courier font-medium whitespace-nowrap">
              A POET WITH NO POEMS
            </span>
            <h1 className="font-serif-sc font-bold italic tracking-tighter text-xs xs:text-sm sm:text-lg md:text-xl text-[#2d2a26] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
              陈婧霏 <span className="font-normal not-italic text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#2d2a26]/70 whitespace-nowrap">/ COLLAGE POETRY</span>
            </h1>
          </div>
        </div>

        {/* Action Controls with Editorial Borders */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          
          {/* Paper Texture Selector */}
          <div className="relative group">
            <button
              className="px-2 py-1.5 sm:px-2.5 border border-[#2d2a26] text-xs uppercase tracking-wider font-serif-sc text-[#2d2a26] hover:bg-[#2d2a26] hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap"
              title="切换画纸"
            >
              <Palette className="w-3.5 h-3.5" />
              <span className="text-[10px] sm:text-[11px] hidden xs:inline whitespace-nowrap">{CANVAS_BG_CONFIGS[currentBg].name}</span>
            </button>
            <div className="absolute right-0 top-full mt-1.5 w-36 bg-[#f2efea] border border-[#2d2a26] shadow-2xl p-1 hidden group-hover:block group-focus-within:block z-50">
              <div className="text-[10px] text-[#2d2a26]/60 px-2 py-1 font-courier border-b border-[#2d2a26]/15 uppercase tracking-widest">
                SELECT PAPER
              </div>
              {(Object.keys(CANVAS_BG_CONFIGS) as CanvasBgType[]).map((bgKey) => (
                <button
                  key={bgKey}
                  onClick={() => onChangeBg(bgKey)}
                  className={`w-full text-left px-2 py-1.5 text-xs font-serif-sc flex items-center justify-between transition-colors ${
                    currentBg === bgKey ? 'bg-[#2d2a26] text-white font-bold' : 'text-[#2d2a26] hover:bg-[#e2ded6]'
                  }`}
                >
                  <span>{CANVAS_BG_CONFIGS[bgKey].name}</span>
                  {currentBg === bgKey && <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]"></span>}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Vibe */}
          <button
            onClick={onOpenAudio}
            className="p-1.5 sm:p-2 border border-[#2d2a26] text-xs text-[#2d2a26] hover:bg-[#2d2a26] hover:text-white transition-colors flex items-center justify-center relative shrink-0"
            title="留声机音效"
          >
            <Music className="w-3.5 h-3.5" />
          </button>

          {/* Help guide */}
          <button
            onClick={onOpenHelp}
            className="p-1.5 sm:p-2 border border-[#2d2a26]/40 text-xs text-[#2d2a26]/70 hover:border-[#2d2a26] hover:text-[#2d2a26] transition-colors shrink-0"
            title="操作指南"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {/* Export Button */}
          <button
            onClick={onExportImage}
            disabled={itemCount === 0}
            className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-serif-sc font-bold uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 transition-all shadow-sm whitespace-nowrap shrink-0 ${
              itemCount > 0
                ? 'bg-[#2d2a26] text-white hover:bg-[#c2410c] border border-[#2d2a26]'
                : 'bg-[#e5e1d8] text-[#2d2a26]/40 border border-[#2d2a26]/20 cursor-not-allowed'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">保存诗篇</span>
          </button>

        </div>

      </div>
    </header>
  );
};
