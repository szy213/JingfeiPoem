import React, { useState, useRef, useCallback } from 'react';
import { CollageItem, CanvasConfig, StickerItem, PaperStyleId, CanvasBgType } from '../types';
import { PAPER_STYLES, CANVAS_BG_CONFIGS, getPaperStylesForTheme } from '../data/paperStyles';
import { toTraditional } from '../utils/toTraditional';
import { Trash2, MoveLeft, MoveRight, Layers, Tag, Plus, Edit2, Check, Feather, Scissors, Quote, Pin, ChevronLeft, ChevronRight } from 'lucide-react';

const THEME_ORDER: CanvasBgType[] = ['rose', 'linen', 'kraft'];

interface CollageCanvasProps {
  items: CollageItem[];
  stickers: StickerItem[];
  config: CanvasConfig;
  selectedItemId: string | null;
  onSelectItem: (id: string | null) => void;
  onUpdateConfig: (newConfig: Partial<CanvasConfig>) => void;
  onUpdateItemStyle: (id: string, styleId: PaperStyleId) => void;
  onRemoveItem: (id: string) => void;
  onMoveItem: (id: string, direction: 'left' | 'right') => void;
  onToggleItemTape: (id: string) => void;
  onOpenStickerPicker: () => void;
  onRemoveSticker: (id: string) => void;
  onAddLineBreak: () => void;
  onChangeBg: (bg: CanvasBgType) => void;
  canvasRef: React.RefObject<HTMLDivElement | null>;
}

export const CollageCanvas: React.FC<CollageCanvasProps> = ({
  items,
  stickers,
  config,
  selectedItemId,
  onSelectItem: setSelectedItemId,
  onUpdateConfig,
  onUpdateItemStyle,
  onRemoveItem,
  onMoveItem,
  onToggleItemTape,
  onOpenStickerPicker,
  onRemoveSticker,
  onAddLineBreak,
  onChangeBg,
  canvasRef
}) => {
  const touchStartX = useRef(0);
  const currentIndex = THEME_ORDER.indexOf(config.bgType);

  const switchToPrev = () => {
    const prevIndex = (currentIndex - 1 + THEME_ORDER.length) % THEME_ORDER.length;
    onChangeBg(THEME_ORDER[prevIndex]);
  };

  const switchToNext = () => {
    const nextIndex = (currentIndex + 1) % THEME_ORDER.length;
    onChangeBg(THEME_ORDER[nextIndex]);
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        switchToPrev();
      } else {
        switchToNext();
      }
    }
  }, [currentIndex]);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingAuthor, setIsEditingAuthor] = useState(false);

  const bgConfig = CANVAS_BG_CONFIGS[config.bgType];

  // Handle Delete/Backspace keyboard key to remove selected item
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedItemId) {
        onRemoveItem(selectedItemId);
        setSelectedItemId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemId, onRemoveItem]);

  // Handle click outside to deselect word item and close toolbar
  React.useEffect(() => {
    if (!selectedItemId) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-no-deselect="true"]')) {
        return;
      }

      setSelectedItemId(null);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [selectedItemId, setSelectedItemId]);

  // Calculate total lines in collage
  const lineBreakCount = items.filter((item) => item.isLineBreak).length;
  const lineCount = items.length === 0 ? 0 : lineBreakCount + 1;

  return (
    <div
      className="w-full flex flex-col items-center justify-center py-4 sm:py-8 transition-all my-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Theme Switcher Bar */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 select-none">
        <button
          onClick={switchToPrev}
          className="p-1 border border-[#2d2a26]/30 text-[#2d2a26]/60 hover:text-[#2d2a26] hover:border-[#2d2a26] rounded-full transition-colors"
          title="上一个主题"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-center">
          <span className="font-serif-sc font-bold text-sm sm:text-base text-[#2d2a26]">
            {CANVAS_BG_CONFIGS[config.bgType].name}
          </span>
        </div>
        <button
          onClick={switchToNext}
          className="p-1 border border-[#2d2a26]/30 text-[#2d2a26]/60 hover:text-[#2d2a26] hover:border-[#2d2a26] rounded-full transition-colors"
          title="下一个主题"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[10px] text-[#2d2a26]/40 font-serif-sc mb-3 -mt-1">← 左右滑动切换主题 →</p>

      {/* Canvas Paper Wrapper */}
      <div
        ref={canvasRef}
        id="collage-poetry-poster"
        className={`relative w-full max-w-[380px] sm:max-w-[460px] p-5 sm:p-7 rounded-sm shadow-2xl transition-all duration-300 grain-overlay border overflow-visible ${bgConfig.bgClass} ${bgConfig.cardClass} ${bgConfig.textColor}`}
        style={{
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.06)'
        }}
        onClick={(e) => {
          // Deselect if background clicked
          if (e.target === e.currentTarget) {
            setSelectedItemId(null);
          }
        }}
      >

        {/* Vintage Top Tape Decorative Element */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#d2c3af]/60 backdrop-blur-[1px] rotate-1 shadow-sm border-x border-[#b3a38f] z-20 pointer-events-none opacity-80" />

        {/* Vintage Top Right Hollowed Ink Stamp Pattern (镂空斑驳盖章印章) */}
        <div className={`absolute top-2 right-2 sm:top-3 sm:right-4 z-20 pointer-events-none select-none flex items-center gap-1 -rotate-12 ${bgConfig.stampBlend}`}>
          {/* Postmark Wave Lines */}
          <svg className={`w-8 h-8 ${bgConfig.stampColor} opacity-70 hidden sm:block`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 10 Q10 5, 20 10 T40 10 M0 20 Q10 15, 20 20 T40 20 M0 30 Q10 25, 20 30 T40 30" />
          </svg>

          {/* Main Round Stamp with SVG Distressed Filter & Mask */}
          <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center">
            <svg className={`w-full h-full ${bgConfig.stampColor}`} viewBox="0 0 100 100">
              <defs>
                {/* Ink Roughness & Bleed Filter */}
                <filter id="stamp-ink-texture" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                {/* Stamp Distress Mask */}
                <mask id="stamp-distress">
                  <rect width="100" height="100" fill="white" />
                  <circle cx="28" cy="22" r="2" fill="black" />
                  <circle cx="72" cy="78" r="1.8" fill="black" />
                  <circle cx="82" cy="32" r="2.2" fill="black" />
                  <circle cx="22" cy="72" r="1.5" fill="black" />
                  <circle cx="50" cy="14" r="1.2" fill="black" />
                  <path d="M15 45 L85 48" stroke="black" strokeWidth="1" strokeDasharray="2 4" />
                </mask>
              </defs>

              <g filter="url(#stamp-ink-texture)" mask="url(#stamp-distress)">
                {/* Outer Heavy Ring */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="98 2" />

                {/* Inner Fine Rings */}
                <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />

                {/* Center Ring */}
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.2" />

                {/* Top and Bottom Vintage Arcs / Stars */}
                <text x="50" y="19" textAnchor="middle" fill="currentColor" fontSize="5.5" fontWeight="bold" letterSpacing="0.5">
                  ★ LYRIC COLLAGE ★
                </text>
                <text x="50" y="87" textAnchor="middle" fill="currentColor" fontSize="5" fontWeight="bold" letterSpacing="0.5">
                  ✦ POETRY SEAL ✦
                </text>

                {/* Center Stamped Text */}
                {bgConfig.name.length === 4 ? (
                  <>
                    <text x="50" y="46" textAnchor="middle" fill="currentColor" fontSize="10.5" fontWeight="900" fontFamily="Noto Serif SC, serif">
                      {bgConfig.name.slice(0, 2)}
                    </text>
                    <text x="50" y="59" textAnchor="middle" fill="currentColor" fontSize="10.5" fontWeight="900" fontFamily="Noto Serif SC, serif">
                      {bgConfig.name.slice(2)}
                    </text>
                  </>
                ) : (
                  <text x="50" y="54" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="900" fontFamily="Noto Serif SC, serif">
                    {bgConfig.name}
                  </text>
                )}
              </g>
            </svg>
          </div>
        </div>

        {/* Vintage Header Information */}
        <div className="border-b border-current/20 pb-3 mb-5 flex items-start justify-between relative z-10">
          <div className="flex-1 pr-14 sm:pr-16">
            {/* Title Editing */}
            {isEditingTitle ? (
              <div className="flex items-center gap-1.5 mb-1">
                <input
                  type="text"
                  value={config.poemTitle}
                  placeholder="输入标题"
                  onChange={(e) => onUpdateConfig({ poemTitle: e.target.value })}
                  className="font-serif-sc font-bold text-base sm:text-lg bg-black/10 border-b border-current px-1 py-0.5 outline-none w-full placeholder:text-current/40"
                  autoFocus
                  onBlur={() => setIsEditingTitle(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                />
                <button onClick={() => setIsEditingTitle(false)} className="p-1 opacity-70 hover:opacity-100 export-hide">
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <h2
                onClick={() => setIsEditingTitle(true)}
                className="font-serif-sc font-bold text-base sm:text-xl tracking-wide cursor-pointer hover:underline flex items-center gap-1.5 group"
                title="点击自定义标题"
              >
                {config.poemTitle ? (
                  <span>{config.poemTitle}</span>
                ) : (
                  <span className="opacity-50 italic flex items-center gap-1 font-normal text-sm sm:text-base">
                    <span>点击自定义标题</span>
                    <Edit2 className="w-3.5 h-3.5 text-[#c2410c] opacity-80 export-hide" />
                  </span>
                )}
                {config.poemTitle && <Edit2 className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity export-hide" />}
              </h2>
            )}

            {/* Author Signature & Date */}
            <div className="flex items-center gap-3 text-[11px] opacity-75 font-serif-sc mt-1">
              {isEditingAuthor ? (
                <input
                  type="text"
                  value={config.authorName}
                  placeholder="输入署名"
                  onChange={(e) => onUpdateConfig({ authorName: e.target.value })}
                  className="bg-black/10 border-b border-current px-1 outline-none text-xs placeholder:text-current/40"
                  autoFocus
                  onBlur={() => setIsEditingAuthor(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingAuthor(false)}
                />
              ) : (
                <span
                  onClick={() => setIsEditingAuthor(true)}
                  className="cursor-pointer hover:underline flex items-center gap-1"
                  title="点击自定义署名"
                >
                  {config.authorName ? (
                    <span>{config.authorName}</span>
                  ) : (
                    <span className="opacity-50 italic flex items-center gap-1">
                      <span>拼贴者：点击自定义署名</span>
                      <Edit2 className="w-3 h-3 text-[#c2410c] opacity-80 export-hide" />
                    </span>
                  )}
                </span>
              )}
              <span>•</span>
              <span className="font-courier text-[10px] tracking-wider">{config.dateString}</span>
            </div>
          </div>

        </div>

        {/* Primary Lyric Collage Playground Area */}
        <div
          className={`min-h-[280px] sm:min-h-[340px] flex flex-wrap content-center items-center gap-x-2 relative z-10 py-2 transition-all ${
            lineCount <= 2
              ? 'gap-y-1 sm:gap-y-1.5'
              : lineCount <= 4
              ? 'gap-y-1.5 sm:gap-y-2'
              : 'gap-y-2.5 sm:gap-y-3'
          }`}
        >
          
          {items.length === 0 ? (
            <div className="w-full h-52 flex flex-col items-center justify-center border-2 border-dashed border-current/20 rounded-lg p-6 text-center opacity-75 my-auto pointer-events-none relative">
              <div className="w-10 h-10 rounded-full bg-[#c2410c]/10 flex items-center justify-center mb-2">
                <Feather className="w-5 h-5 text-[#c2410c]" />
              </div>
              <p className="font-serif-sc text-sm font-medium text-[#2d2a26]">从下方选择歌词片段</p>
              <p className="font-serif-sc text-xs opacity-70 mt-1">拼接属于你的手剪诗篇</p>

              {/* Insertion Position Cursor */}
              <div className="mt-3 flex flex-col items-center justify-center export-hide">
                <div className="w-[2.5px] h-7 bg-[#c2410c] rounded-full animate-pulse shadow-[0_0_8px_rgba(194,65,12,0.9)]" />
              </div>
            </div>
          ) : (
            items.map((item, idx) => {
              const isCursorHere = selectedItemId ? selectedItemId === item.id : idx === items.length - 1;

              // Line Break handling
              if (item.isLineBreak) {
                return (
                  <React.Fragment key={item.id}>
                    <div
                      data-no-deselect="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItemId(selectedItemId === item.id ? null : item.id);
                      }}
                      className={`basis-full w-full h-0 relative cursor-pointer ${lineCount <= 3 ? 'my-0.5' : 'my-1'}`}
                    />

                    {/* Insertion Position Cursor */}
                    {isCursorHere && (
                      <div
                        key={`cursor-${item.id}`}
                        className={`inline-flex items-center px-0.5 select-none pointer-events-none z-20 animate-pulse export-hide ${
                          lineCount <= 3 ? 'my-0.5' : 'my-1'
                        }`}
                        title="新字条添加位置"
                      >
                        <div className="w-[2.5px] h-6 sm:h-7 bg-[#c2410c] rounded-full shadow-[0_0_8px_rgba(194,65,12,0.9)]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              }

              // Retrieve Paper Style configuration
              const styleConfig = PAPER_STYLES.find((s) => s.id === item.styleId) || PAPER_STYLES[0];
              const isSelected = selectedItemId === item.id;

              return (
                <React.Fragment key={item.id}>
                  <div
                    data-no-deselect="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItemId(isSelected ? null : item.id);
                    }}
                    className={`relative inline-flex items-center group cursor-pointer transition-transform duration-150 active:scale-95 select-none ${
                      lineCount <= 3 ? 'my-0.5' : 'my-1'
                    } ${
                      isSelected ? 'ring-2 ring-[#c93c3c] ring-offset-2 ring-offset-transparent z-30' : 'z-10'
                    }`}
                    style={{
                      transform: `rotate(${item.rotationAngle || 0}deg)`
                    }}
                  >
                    {/* Optional Scotch Tape attached to top of slip */}
                    {item.hasTape && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#e0d3be]/80 border-x border-[#c2b29b] rotate-[-2deg] opacity-75 z-20 pointer-events-none" />
                    )}

                    {/* Cutout Paper Slip */}
                    <div
                      className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-[2px] transition-all relative ${styleConfig.bgClass} ${styleConfig.textClass} ${styleConfig.borderClass}`}
                    >
                      <span
                        className={`text-sm sm:text-base font-bold tracking-wide whitespace-nowrap ${
                          styleConfig.fontFamily === 'courier' ? 'font-courier' :
                          styleConfig.fontFamily === 'xiaowei' ? 'font-xiaowei text-base sm:text-lg' :
                          styleConfig.fontFamily === 'playfair' ? 'font-playfair' : 'font-serif-tc'
                        }`}
                        style={{
                          fontFeatureSettings: '"trad"',
                          fontVariantEastAsian: 'traditional'
                        }}
                      >
                        {toTraditional(item.text)}
                      </span>

                      {/* Quick Delete Badge on Selected */}
                      {isSelected && (
                        <button
                          data-no-deselect="true"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveItem(item.id);
                          }}
                          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#c2410c] text-white text-[10px] font-bold flex items-center justify-center hover:bg-red-700 shadow z-50 export-hide"
                          title="删除字条"
                        >
                          ×
                        </button>
                      )}
                    </div>

                    {/* Selected Item Floating Toolbar */}
                    {isSelected && (
                      <div
                        data-no-deselect="true"
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#2d2a26] border border-[#2d2a26] shadow-2xl p-1 flex items-center gap-1 z-40 text-white animate-in fade-in zoom-in duration-150 export-hide"
                      >
                        
                        {/* Move Left */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveItem(item.id, 'left');
                          }}
                          className="p-1.5 hover:bg-white/10 rounded text-[#f2efea] transition-colors"
                          title="向前移动"
                        >
                          <MoveLeft className="w-3.5 h-3.5" />
                        </button>

                        {/* Move Right */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveItem(item.id, 'right');
                          }}
                          className="p-1.5 hover:bg-white/10 rounded text-[#f2efea] transition-colors"
                          title="向后移动"
                        >
                          <MoveRight className="w-3.5 h-3.5" />
                        </button>

                        {/* Toggle Tape */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleItemTape(item.id);
                          }}
                          className={`p-1.5 rounded transition-colors ${item.hasTape ? 'bg-[#c2410c] text-white' : 'hover:bg-white/10 text-[#f2efea]'}`}
                          title="贴胶带"
                        >
                          <Pin className="w-3.5 h-3.5" />
                        </button>

                        {/* Cycle Paper Cutout Style */}
                        <div className="relative group/style">
                          <button
                            className="p-1.5 hover:bg-white/10 rounded text-[#e6c875] transition-colors flex items-center gap-0.5"
                            title="换字条质感"
                          >
                            <Layers className="w-3.5 h-3.5" />
                          </button>

                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-32 bg-[#2d2a26] border border-white/20 shadow-xl p-1 grid grid-cols-1 gap-0.5 hidden group-hover/style:block z-50">
                            {getPaperStylesForTheme(config.bgType).map((ps) => (
                              <button
                                key={ps.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onUpdateItemStyle(item.id, ps.id);
                                }}
                                className={`w-full text-left px-2 py-1 text-[11px] font-serif-sc flex items-center justify-between ${
                                  item.styleId === ps.id ? 'bg-white text-[#2d2a26] font-bold' : 'text-[#f2efea]/80 hover:bg-white/10'
                                }`}
                              >
                                <span>{ps.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveItem(item.id);
                          }}
                          className="p-1.5 hover:bg-red-600 text-red-300 hover:text-white transition-colors"
                          title="删除字条"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                      </div>
                    )}

                  </div>

                  {/* Insertion Position Cursor */}
                  {isCursorHere && (
                    <div
                      key={`cursor-${item.id}`}
                      className={`inline-flex items-center px-0.5 select-none pointer-events-none z-20 animate-pulse export-hide ${
                        lineCount <= 3 ? 'my-0.5' : 'my-1'
                      }`}
                      title="新字条添加位置"
                    >
                      <div className="w-[2.5px] h-6 sm:h-7 bg-[#c2410c] rounded-full shadow-[0_0_8px_rgba(194,65,12,0.9)]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })
          )}

        </div>

        {/* Placed Stickers on Canvas */}
        {stickers.map((st) => (
          <div
            key={st.id}
            className="absolute z-20 group cursor-pointer"
            style={{
              left: `${st.x}%`,
              top: `${st.y}%`,
              transform: `rotate(${st.rotation}deg) scale(${st.scale})`
            }}
          >
            {st.type === 'wax-seal' && (
              <div className="w-12 h-12 rounded-full bg-[#8c232b] shadow-md border border-[#a8323c] flex items-center justify-center text-[#fce8eb] font-xiaowei font-bold text-xs ring-2 ring-[#8c232b]/50">
                印封
              </div>
            )}
            {st.type === 'postmark' && (
              <div className="px-2 py-1 border border-dashed border-[#8c232b] text-[#8c232b] font-courier text-[10px] rotate-[-5deg] bg-[#8c232b]/5">
                PARIS • 1980
              </div>
            )}
            {st.type === 'vinyl-record' && (
              <div className="w-14 h-14 rounded-full bg-[#111] border-4 border-[#222] shadow-xl flex items-center justify-center relative">
                <div className="w-5 h-5 rounded-full bg-[#8c232b] border border-[#d4af37] text-[6px] text-white flex items-center justify-center font-bold">
                  霏
                </div>
              </div>
            )}
            {st.type === 'pressed-flower' && (
              <div className="text-xl select-none opacity-80 filter sepia-[0.3]">
                🥀
              </div>
            )}
            {st.type === 'scotch-tape' && (
              <div className="w-16 h-5 bg-[#e0d3be]/70 border-x border-[#c2b29b] shadow-sm rotate-[12deg]" />
            )}

            {/* Remove sticker button */}
            <button
              onClick={() => onRemoveSticker(st.id)}
              className="absolute -top-2 -right-2 w-4 h-4 bg-[#c93c3c] text-white rounded-full text-[9px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
            >
              ×
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};
