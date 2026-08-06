import React from 'react';
import { PRESET_POEMS } from '../data/lyrics';
import { BookmarkCheck, X, Sparkles, ArrowRight } from 'lucide-react';

interface PresetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPreset: (presetIndex: number) => void;
}

export const PresetModal: React.FC<PresetModalProps> = ({
  isOpen,
  onClose,
  onSelectPreset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full max-w-sm bg-[#f2efea] border border-[#2d2a26] text-[#2d2a26] p-5 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-[#2d2a26]/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-4 h-4 text-[#c2410c]" />
            <h3 className="font-serif-sc font-bold text-base text-[#2d2a26]">灵感预设模板</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#2d2a26]/70 hover:text-[#2d2a26]">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 max-h-[360px] overflow-y-auto no-scrollbar">
          {PRESET_POEMS.map((preset, index) => (
            <div
              key={preset.title}
              onClick={() => {
                onSelectPreset(index);
                onClose();
              }}
              className="p-3.5 bg-white border border-[#2d2a26]/30 hover:border-[#2d2a26] cursor-pointer group transition-all active:scale-98"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif-sc font-bold text-sm text-[#2d2a26] group-hover:text-[#c2410c] transition-colors">
                  {preset.title}
                </span>
                <span className="text-[10px] font-courier text-[#2d2a26] bg-[#2d2a26]/10 px-2 py-0.5 border border-[#2d2a26]/20 font-medium">
                  {preset.songTheme}
                </span>
              </div>
              <div className="text-xs text-[#2d2a26]/80 font-serif-sc line-clamp-2 italic bg-[#f9f8f4] p-2 border border-[#2d2a26]/15">
                {preset.items.filter(i => !i.isLineBreak).map(i => i.text).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
