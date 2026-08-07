import React, { useState } from 'react';
import { LyricItem } from '../types';
import { SONG_CATEGORIES, LYRICS_DATABASE } from '../data/lyrics';
import { toTraditional } from '../utils/toTraditional';
import { Shuffle, CornerDownLeft, Delete, Trash2, Plus, Wand2, Music2, Disc, Tag, Library, X } from 'lucide-react';

interface LyricPoolDrawerProps {
  lyricsPool: LyricItem[];
  currentCategory: string;
  selectedSong: string;
  availableSongs: string[];
  onSelectCategory: (catId: string) => void;
  onSelectSong: (songTitle: string) => void;
  onAddLyric: (lyric: LyricItem) => void;
  onShufflePool: () => void;
  onAddLineBreak: () => void;
  onBackspace: () => void;
  onClearAll: () => void;
  onAddCustomText: (text: string) => void;
  onGenerateRandomPoem: () => void;
}

export const LyricPoolDrawer: React.FC<LyricPoolDrawerProps> = ({
  lyricsPool,
  currentCategory,
  selectedSong,
  availableSongs,
  onSelectCategory,
  onSelectSong,
  onAddLyric,
  onShufflePool,
  onAddLineBreak,
  onBackspace,
  onClearAll,
  onAddCustomText,
  onGenerateRandomPoem,
}) => {
  const [customText, setCustomText] = useState('');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [showCorpusModal, setShowCorpusModal] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleShuffle = () => {
    setIsFlipping(true);
    onShufflePool();
    setTimeout(() => setIsFlipping(false), 300);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customText.trim()) {
      onAddCustomText(customText.trim());
      setCustomText('');
      setShowCustomModal(false);
    }
  };

  // Filter lyrics inside the corpus modal based on category or song
  const filteredModalLyrics = React.useMemo(() => {
    let result = LYRICS_DATABASE;
    if (currentCategory !== 'all') {
      result = result.filter((l) => l.categoryId === currentCategory);
    }
    if (selectedSong !== 'all') {
      result = result.filter((l) => l.song === selectedSong);
    }
    return result;
  }, [currentCategory, selectedSong]);

  // Ensure exactly 7 words are shown at the bottom bar
  const displayWords = lyricsPool.slice(0, 7);

  const activeCategoryObj = SONG_CATEGORIES.find((c) => c.id === currentCategory);

  return (
    <div className="w-full max-w-md sm:max-w-4xl mx-auto bg-[#2d2a26] text-white border-t border-[#3d3832] rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)] p-2.5 sm:p-4 flex flex-col gap-2 z-20 shrink-0" style={{ paddingBottom: '50px' }}>
      
      {/* 7个随机词语条目展现区 (7 Random Words Bar) */}
      <div className="flex items-center justify-between gap-1.5 bg-[#22201d] p-2 rounded border border-white/10">
        
        <div className="flex items-center gap-1.5 shrink-0 text-[#c2410c] text-xs font-serif-sc font-bold pl-1">
          <Disc className="w-3.5 h-3.5 animate-spin-slow" />
          <span className="hidden xs:inline">灵感词:</span>
        </div>

        {/* 7个词语按钮 */}
        <div className="flex-1 flex flex-wrap items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {displayWords.length > 0 ? (
            displayWords.map((lyric) => (
              <button
                key={lyric.id}
                data-no-deselect="true"
                onClick={() => onAddLyric(lyric)}
                className={`px-2.5 py-1 bg-[#f2efea] text-[#2d2a26] font-serif-tc text-xs font-semibold border border-white/40 shadow-sm hover:bg-white hover:border-[#c2410c] hover:scale-[1.04] active:scale-95 transition-all duration-150 flex items-center gap-1 whitespace-nowrap ${
                  isFlipping ? 'opacity-40 scale-95 blur-[0.5px]' : 'opacity-100'
                }`}
              >
                <span>{toTraditional(lyric.text)}</span>
              </button>
            ))
          ) : (
            <span className="text-xs text-white/50 font-serif-sc">暂无随机词语</span>
          )}
        </div>

        {/* 随机换一批 */}
        <button
          onClick={handleShuffle}
          className="px-2 py-1 bg-white/10 hover:bg-white hover:text-[#2d2a26] text-[#f2efea] font-serif-sc text-xs font-semibold flex items-center gap-1 rounded border border-white/20 active:scale-95 transition-all shrink-0"
          title="随机更换这7个词语"
        >
          <Shuffle className={`w-3.5 h-3.5 ${isFlipping ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">换一批</span>
        </button>
      </div>

      {/* 功能栏 (Feature Action Bar) */}
      <div data-no-deselect="true" className="flex items-center justify-between gap-1.5 sm:gap-2 pt-0.5">
        
        {/* 点击弹出语料库按钮 */}
        <button
          onClick={() => setShowCorpusModal(true)}
          className="flex-1 py-1.5 px-2.5 bg-[#c2410c] hover:bg-[#d9480f] text-white font-serif-sc text-xs font-bold flex items-center justify-center gap-1.5 rounded shadow active:scale-95 transition-all border border-[#c2410c]"
          title="点击打开完整的歌词词语库"
        >
          <Library className="w-3.5 h-3.5 text-white" />
          <span className="whitespace-nowrap">语料库</span>
        </button>

        {/* 换行 */}
        <button
          onClick={onAddLineBreak}
          className="py-1.5 px-2.5 bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-[#2d2a26] text-[#f2efea] font-serif-sc text-xs font-semibold flex items-center justify-center gap-1 rounded active:scale-95 transition-all"
          title="插入换行"
        >
          <CornerDownLeft className="w-3.5 h-3.5 text-[#c2410c]" />
          <span>换行</span>
        </button>

        {/* 退格 */}
        <button
          onClick={onBackspace}
          className="py-1.5 px-2.5 bg-transparent border border-white/20 hover:border-white text-[#f2efea]/80 hover:text-white font-serif-sc text-xs flex items-center justify-center gap-1 rounded active:scale-95 transition-all"
          title="退格删除上个词"
        >
          <Delete className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">退格</span>
        </button>

        {/* 自定义词语 */}
        <button
          onClick={() => setShowCustomModal(true)}
          className="py-1.5 px-2.5 bg-transparent border border-white/20 hover:border-white text-[#f2efea]/80 hover:text-white font-serif-sc text-xs flex items-center justify-center gap-1 rounded active:scale-95 transition-all"
          title="添加自定义词语"
        >
          <Plus className="w-3.5 h-3.5 text-[#e6c875]" />
          <span className="hidden xs:inline">自定</span>
        </button>

        {/* 一键灵感诗篇 */}
        <button
          onClick={onGenerateRandomPoem}
          className="py-1.5 px-2.5 bg-[#e6c875]/20 hover:bg-[#e6c875] text-[#e6c875] hover:text-[#2d2a26] border border-[#e6c875]/50 font-serif-sc text-xs font-bold flex items-center justify-center gap-1 rounded active:scale-95 transition-all"
          title="一键生成灵感诗篇"
        >
          <Wand2 className="w-3.5 h-3.5 animate-pulse" />
          <span className="whitespace-nowrap">灌溉灵感</span>
        </button>

        {/* 清空画布 */}
        <button
          onClick={onClearAll}
          className="py-1.5 px-2 bg-transparent border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white font-serif-sc text-xs flex items-center justify-center rounded active:scale-95 transition-all"
          title="清空画布"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>

      </div>

      {/* Bottom 1/3 Screen Lyric Corpus Drawer (占据屏幕下部三分之一的语料库) */}
      {showCorpusModal && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col justify-end animate-in slide-in-from-bottom duration-200">
          <div className="w-full h-[38vh] sm:h-[35vh] max-h-[320px] min-h-[220px] bg-[#2d2a26] text-white border-t border-white/20 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
            
            {/* Drawer Header */}
            <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between bg-black/40 shrink-0">
              <div className="flex items-center gap-2">
                <Library className="w-4 h-4 text-[#c2410c]" />
                <h3 className="font-serif-sc font-bold text-sm text-white">歌词语料库</h3>
                <span className="text-[10px] text-white/50 font-serif-sc">（点击直接添加）</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCorpusModal(false)}
                  className="p-1 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-colors"
                  title="关闭语料库"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Level 1 Album Categories Filter */}
            <div className="px-2.5 py-1.5 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-black/10 shrink-0">
              <span className="text-[10px] font-courier text-white/40 uppercase shrink-0 flex items-center gap-0.5">
                <Tag className="w-3 h-3" /> 专辑:
              </span>
              {SONG_CATEGORIES.map((cat) => {
                const isActive = currentCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-2 py-0.5 text-[11px] font-serif-sc whitespace-nowrap transition-all rounded ${
                      isActive
                        ? 'bg-white text-[#2d2a26] font-bold shadow-sm'
                        : 'bg-transparent text-[#f2efea]/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Level 2 Song Filter */}
            <div className="px-2.5 py-1 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-black/20 shrink-0">
              <span className="text-[10px] font-courier text-[#e6c875] uppercase shrink-0 flex items-center gap-1">
                <Music2 className="w-3 h-3" /> 歌曲:
              </span>
              <button
                onClick={() => onSelectSong('all')}
                className={`px-2 py-0.5 text-[10px] font-serif-sc whitespace-nowrap transition-colors rounded border ${
                  selectedSong === 'all'
                    ? 'bg-[#c2410c] text-white font-bold border-[#c2410c]'
                    : 'bg-transparent text-[#f2efea]/70 border-white/10 hover:border-white/40'
                }`}
              >
                全部歌曲 ({availableSongs.length})
              </button>
              {availableSongs.map((songTitle) => {
                const isSelected = selectedSong === songTitle;
                return (
                  <button
                    key={songTitle}
                    onClick={() => onSelectSong(songTitle)}
                    className={`px-2 py-0.5 text-[10px] font-serif-sc whitespace-nowrap transition-colors rounded border ${
                      isSelected
                        ? 'bg-[#c2410c] text-white font-bold border-[#c2410c]'
                        : 'bg-transparent text-[#f2efea]/80 border-white/15 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    {songTitle}
                  </button>
                );
              })}
            </div>

            {/* Level 3 Word Grid in Drawer - Click to add */}
            <div data-no-deselect="true" className="p-3 flex-1 overflow-y-auto no-scrollbar">
              {filteredModalLyrics.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {filteredModalLyrics.map((lyric) => (
                    <button
                      key={lyric.id}
                      data-no-deselect="true"
                      onClick={() => onAddLyric(lyric)}
                      className="px-2.5 py-1 bg-[#f2efea] text-[#2d2a26] font-serif-tc text-xs font-semibold border border-white/40 shadow-sm hover:bg-white hover:border-[#c2410c] hover:scale-[1.04] active:scale-95 transition-all flex items-center gap-1 rounded-[2px]"
                    >
                      <span>{toTraditional(lyric.text)}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-white/50 font-serif-sc text-xs">
                  暂无词语
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Custom Text Input Modal Popup */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="w-full max-w-xs bg-[#f2efea] border border-[#2d2a26] text-[#2d2a26] rounded-none p-5 shadow-2xl">
            <h3 className="font-serif-sc font-bold text-base text-[#2d2a26] mb-2 flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-[#c2410c]" />
              <span>添加自定义拼贴词语</span>
            </h3>
            <p className="text-xs text-[#2d2a26]/70 font-serif-sc mb-4">
              输入你心仪的词句，添加到当前诗篇。
            </p>
            <form onSubmit={handleCustomSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#2d2a26] text-sm text-[#2d2a26] font-serif-sc outline-none focus:border-[#c2410c]"
                maxLength={30}
                autoFocus
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowCustomModal(false)}
                  className="px-3 py-1.5 text-xs font-serif-sc text-[#2d2a26]/70 hover:bg-[#e2ded6]"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={!customText.trim()}
                  className="px-4 py-1.5 bg-[#2d2a26] text-white font-serif-sc text-xs font-bold disabled:opacity-50 hover:bg-[#c2410c]"
                >
                  添加到诗篇
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

