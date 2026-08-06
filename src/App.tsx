import React, { useState, useRef, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { CollageItem, CanvasConfig, StickerItem, LyricItem, CanvasBgType, PaperStyleId } from './types';
import { LYRICS_DATABASE, PRESET_POEMS, SONG_CATEGORIES } from './data/lyrics';
import { PAPER_STYLES, getPaperStylesForTheme } from './data/paperStyles';
import { Header } from './components/Header';
import { CollageCanvas } from './components/CollageCanvas';
import { LyricPoolDrawer } from './components/LyricPoolDrawer';
import { StickerPickerModal } from './components/StickerPickerModal';
import { PresetModal } from './components/PresetModal';
import { ExportModal } from './components/ExportModal';
import { HelpModal } from './components/HelpModal';

export default function App() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  // Initial State setup
  const [items, setItems] = useState<CollageItem[]>([]);

  const [stickers, setStickers] = useState<StickerItem[]>([]);

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const [config, setConfig] = useState<CanvasConfig>({
    bgType: 'linen',
    showGrid: false,
    showStamp: true,
    authorName: '',
    dateString: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
    poemTitle: '',
    fontScale: 'md',
    aspectRatio: '3/4',
  });

  // Lyric Pool state
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [selectedSong, setSelectedSong] = useState<string>('all');
  const [lyricsPool, setLyricsPool] = useState<LyricItem[]>([]);

  // Modals state
  const [isStickerOpen, setIsStickerOpen] = useState(false);
  const [isPresetsOpen, setIsPresetsOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isClearConfirmOpen, setIsClearConfirmOpen] = useState(false);

  // Available song titles for Level 2 filter
  const availableSongs = React.useMemo(() => {
    if (currentCategory === 'all') {
      const songSet = new Set<string>();
      LYRICS_DATABASE.forEach((item) => songSet.add(item.song));
      return Array.from(songSet);
    } else {
      const songSet = new Set<string>();
      LYRICS_DATABASE.filter((item) => item.categoryId === currentCategory)
        .forEach((item) => songSet.add(item.song));
      return Array.from(songSet);
    }
  }, [currentCategory]);

  // Update lyrics pool on category or song change
  useEffect(() => {
    shuffleLyricsPool(currentCategory, selectedSong);
  }, [currentCategory, selectedSong]);

  const handleSelectCategory = (catId: string) => {
    setCurrentCategory(catId);
    setSelectedSong('all');
  };

  const handleSelectSong = (songTitle: string) => {
    setSelectedSong(songTitle);
  };

  const shuffleLyricsPool = (catId: string = currentCategory, song: string = selectedSong) => {
    let filtered = LYRICS_DATABASE;
    if (catId !== 'all') {
      filtered = filtered.filter((l) => l.categoryId === catId);
    }
    if (song !== 'all') {
      filtered = filtered.filter((l) => l.song === song);
    }

    if (song !== 'all') {
      // When a specific song is selected, display all words of that song
      setLyricsPool(filtered);
    } else {
      // When viewing category/all songs, pick 7 random words
      const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 7);
      setLyricsPool(shuffled);
    }
  };

  // Handlers for Canvas items
  const handleAddLyric = (lyric: LyricItem) => {
    const randomAngle = (Math.random() * 6 - 3); // -3deg to +3deg
    // Paper style from current theme's available styles
    const themeStyles = getPaperStylesForTheme(config.bgType);
    const randomStyle = themeStyles[Math.floor(Math.random() * themeStyles.length)].id;
    const newId = `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;

    const newItem: CollageItem = {
      id: newId,
      text: lyric.text,
      song: lyric.song,
      styleId: randomStyle,
      rotationAngle: parseFloat(randomAngle.toFixed(1)),
      hasTape: Math.random() > 0.7,
    };

    setItems((prev) => {
      if (selectedItemId) {
        const idx = prev.findIndex((i) => i.id === selectedItemId);
        if (idx !== -1) {
          const next = [...prev];
          next.splice(idx + 1, 0, newItem);
          return next;
        }
      }
      return [...prev, newItem];
    });
    setSelectedItemId(newId);
  };

  const handleAddLineBreak = () => {
    const newId = `lb-${Date.now()}`;
    const newBreak: CollageItem = {
      id: newId,
      text: '↵',
      isLineBreak: true,
      styleId: 'newspaper',
      rotationAngle: 0,
    };

    setItems((prev) => {
      if (selectedItemId) {
        const idx = prev.findIndex((i) => i.id === selectedItemId);
        if (idx !== -1) {
          const next = [...prev];
          next.splice(idx + 1, 0, newBreak);
          return next;
        }
      }
      return [...prev, newBreak];
    });
    setSelectedItemId(newId);
  };

  const handleBackspace = () => {
    setItems((prev) => {
      if (prev.length === 0) return prev;
      if (selectedItemId) {
        const idx = prev.findIndex((i) => i.id === selectedItemId);
        if (idx !== -1) {
          const prevItemId = idx > 0 ? prev[idx - 1].id : null;
          setSelectedItemId(prevItemId);
          return prev.filter((i) => i.id !== selectedItemId);
        }
      }
      return prev.slice(0, -1);
    });
  };

  const handleClearAll = () => {
    setIsClearConfirmOpen(true);
  };

  const confirmClearAll = () => {
    setItems([]);
    setStickers([]);
    setSelectedItemId(null);
    setIsClearConfirmOpen(false);
  };

  const handleAddCustomText = (text: string) => {
    const newId = `custom-${Date.now()}`;
    const themeStyles = getPaperStylesForTheme(config.bgType);
    const randomStyle = themeStyles[Math.floor(Math.random() * themeStyles.length)].id;
    const newItem: CollageItem = {
      id: newId,
      text,
      styleId: randomStyle,
      rotationAngle: parseFloat((Math.random() * 4 - 2).toFixed(1)),
      hasTape: true,
    };
    setItems((prev) => {
      if (selectedItemId) {
        const idx = prev.findIndex((i) => i.id === selectedItemId);
        if (idx !== -1) {
          const next = [...prev];
          next.splice(idx + 1, 0, newItem);
          return next;
        }
      }
      return [...prev, newItem];
    });
    setSelectedItemId(newId);
  };

  const handleGenerateRandomPoem = () => {
    // Pick 4-5 evocative lyrics randomly
    const randomPicks = [...LYRICS_DATABASE].sort(() => 0.5 - Math.random()).slice(0, 4);
    const themeStyles = getPaperStylesForTheme(config.bgType);
    
    const newItems: CollageItem[] = [];
    randomPicks.forEach((pic, idx) => {
      newItems.push({
        id: `gen-${idx}-${Date.now()}`,
        text: pic.text,
        song: pic.song,
        styleId: themeStyles[idx % themeStyles.length].id,
        rotationAngle: parseFloat((Math.random() * 5 - 2.5).toFixed(1)),
        hasTape: idx % 2 === 0,
      });
      // Add a line break after second item
      if (idx === 1) {
        newItems.push({
          id: `gen-lb-${Date.now()}`,
          text: '↵',
          isLineBreak: true,
          styleId: themeStyles[0].id,
          rotationAngle: 0,
        });
      }
    });

    setItems(newItems);
  };

  // Item modifications
  const handleUpdateItemStyle = (id: string, styleId: PaperStyleId) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, styleId } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    if (selectedItemId === id) {
      setSelectedItemId(null);
    }
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMoveItem = (id: string, direction: 'left' | 'right') => {
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return;

    const targetIndex = direction === 'left' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;

    const newItems = [...items];
    const [moved] = newItems.splice(index, 1);
    newItems.splice(targetIndex, 0, moved);
    setItems(newItems);
  };

  const handleToggleItemTape = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, hasTape: !item.hasTape } : item))
    );
  };

  // Sticker Handlers
  const handleAddSticker = (st: Omit<StickerItem, 'id' | 'x' | 'y'>) => {
    const newSticker: StickerItem = {
      ...st,
      id: `st-${Date.now()}`,
      x: Math.floor(Math.random() * 60) + 10,
      y: Math.floor(Math.random() * 60) + 10,
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleRemoveSticker = (id: string) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  // Change canvas theme and update existing items to match new theme's paper styles
  const handleBgTypeChange = (bgType: CanvasBgType) => {
    setConfig((prev) => ({ ...prev, bgType }));
    const themeStyles = getPaperStylesForTheme(bgType);
    setItems((prev) =>
      prev.map((item, idx) => {
        if (item.isLineBreak) return item;
        return {
          ...item,
          styleId: themeStyles[idx % themeStyles.length].id,
        };
      })
    );
  };

  // Preset Poem Selection
  const handleSelectPreset = (index: number) => {
    const preset = PRESET_POEMS[index];
    if (!preset) return;

    setConfig((prev) => ({ ...prev, poemTitle: `《${preset.title}》` }));
    const themeStyles = getPaperStylesForTheme(config.bgType);

    const presetItems: CollageItem[] = preset.items.map((item, idx) => ({
      id: `preset-${idx}-${Date.now()}`,
      text: item.text,
      isLineBreak: item.isLineBreak,
      styleId: item.isLineBreak ? themeStyles[0].id : themeStyles[idx % themeStyles.length].id,
      rotationAngle: item.isLineBreak ? 0 : parseFloat((Math.random() * 4 - 2).toFixed(1)),
      hasTape: idx % 3 === 0,
    }));

    setItems(presetItems);
  };

  const handleExportImage = () => {
    setSelectedItemId(null);
    setConfig((prev) => ({
      ...prev,
      poemTitle: prev.poemTitle.trim() || '无题',
      authorName: prev.authorName.trim() || '霏列罗',
    }));
    setIsExportOpen(true);
  };

  return (
    <div className="h-screen h-dvh bg-editorial-grid text-[#2d2a26] flex flex-col justify-between selection:bg-[#2d2a26] selection:text-white relative font-serif-sc overflow-hidden">
      
      {/* Top Zine Header */}
      <Header
        currentBg={config.bgType}
        onChangeBg={handleBgTypeChange}
        onOpenPresets={() => setIsPresetsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onClearCanvas={handleClearAll}
        onExportImage={handleExportImage}
        itemCount={items.length}
      />

      {/* Main Center Canvas Playground */}
      <main className="flex-1 min-h-0 overflow-y-auto p-2 sm:p-4 flex flex-col items-center justify-start sm:justify-center relative">
        <CollageCanvas
          items={items}
          stickers={stickers}
          config={config}
          selectedItemId={selectedItemId}
          onSelectItem={setSelectedItemId}
          onUpdateConfig={(newConf) => setConfig((prev) => ({ ...prev, ...newConf }))}
          onUpdateItemStyle={handleUpdateItemStyle}
          onRemoveItem={handleRemoveItem}
          onMoveItem={handleMoveItem}
          onToggleItemTape={handleToggleItemTape}
          onOpenStickerPicker={() => setIsStickerOpen(true)}
          onRemoveSticker={handleRemoveSticker}
          onAddLineBreak={handleAddLineBreak}
          canvasRef={canvasRef}
        />
      </main>

      {/* Bottom Lyric Pool & Action Bar */}
      <LyricPoolDrawer
        lyricsPool={lyricsPool}
        currentCategory={currentCategory}
        selectedSong={selectedSong}
        availableSongs={availableSongs}
        onSelectCategory={handleSelectCategory}
        onSelectSong={handleSelectSong}
        onAddLyric={handleAddLyric}
        onShufflePool={() => shuffleLyricsPool(currentCategory, selectedSong)}
        onAddLineBreak={handleAddLineBreak}
        onBackspace={handleBackspace}
        onClearAll={handleClearAll}
        onAddCustomText={handleAddCustomText}
        onGenerateRandomPoem={handleGenerateRandomPoem}
      />

      {/* Modals & Dialogs */}
      <StickerPickerModal
        isOpen={isStickerOpen}
        onClose={() => setIsStickerOpen(false)}
        onAddSticker={handleAddSticker}
      />

      <PresetModal
        isOpen={isPresetsOpen}
        onClose={() => setIsPresetsOpen(false)}
        onSelectPreset={handleSelectPreset}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        canvasRef={canvasRef}
        poemTitle={config.poemTitle}
        bgType={config.bgType}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Clear Canvas Confirmation Modal */}
      {isClearConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#f2efea] text-[#2d2a26] border-2 border-[#2d2a26] p-5 max-w-xs sm:max-w-sm w-full rounded-sm shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-[#c2410c]">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h3 className="font-serif-sc font-bold text-base">确认清空画布？</h3>
            </div>
            <p className="text-xs text-[#2d2a26]/80 font-serif-sc leading-relaxed">
              此操作将清除画布上所有内容，该操作无法撤销。
            </p>
            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                onClick={() => setIsClearConfirmOpen(false)}
                className="px-3.5 py-1.5 border border-[#2d2a26]/30 text-[#2d2a26] hover:bg-black/5 font-serif-sc text-xs font-medium rounded-sm transition-colors"
              >
                取消
              </button>
              <button
                onClick={confirmClearAll}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white font-serif-sc text-xs font-bold rounded-sm shadow-sm transition-colors"
              >
                确认清空
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
