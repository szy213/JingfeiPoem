import React from 'react';
import { StickerItem } from '../types';
import { Tag, X, Sparkles } from 'lucide-react';

interface StickerPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSticker: (sticker: Omit<StickerItem, 'id' | 'x' | 'y'>) => void;
}

export const StickerPickerModal: React.FC<StickerPickerModalProps> = ({
  isOpen,
  onClose,
  onAddSticker
}) => {
  if (!isOpen) return null;

  const STICKER_OPTIONS: { type: StickerItem['type']; title: string; desc: string; icon: string }[] = [
    { type: 'wax-seal', title: '火漆印封', desc: '陈婧霏复古胭脂火漆', icon: '🍷' },
    { type: 'postmark', title: '巴黎邮戳', desc: '1980 Vintage Postmark', icon: '✉️' },
    { type: 'vinyl-record', title: '唱片水纹', desc: '黑胶唱片标签', icon: '💿' },
    { type: 'pressed-flower', title: '干花标本', desc: '荒芜中怒放的玫瑰', icon: '🥀' },
    { type: 'scotch-tape', title: '透明胶带', desc: '手作质感胶带', icon: '🩹' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full max-w-sm bg-[#1b161c] border border-[#3e3240] rounded-2xl p-5 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-[#2d242f] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#c93c3c]" />
            <h3 className="font-serif-sc font-bold text-base text-[#f4efe8]">选择饰品与印章</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#a093a1] hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto no-scrollbar">
          {STICKER_OPTIONS.map((st) => (
            <button
              key={st.type}
              onClick={() => {
                onAddSticker({
                  type: st.type,
                  title: st.title,
                  rotation: Math.floor(Math.random() * 20) - 10,
                  scale: 1,
                });
                onClose();
              }}
              className="p-3 bg-[#231d25] border border-[#3c313d] hover:border-[#c93c3c] rounded-xl flex flex-col items-center text-center group transition-all active:scale-95"
            >
              <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{st.icon}</span>
              <span className="font-serif-sc font-bold text-xs text-[#e8ded3]">{st.title}</span>
              <span className="text-[10px] text-[#9c8e9b] font-serif-sc mt-0.5">{st.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
