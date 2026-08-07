import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Music, Image as ImageIcon, HelpCircle, Play, Pause } from 'lucide-react';

const songs = [
  { title: '光芒', file: '/光芒.mp3' },
  { title: '猩红', file: '/猩红.mp3' },
  { title: '生活在别处', file: '/生活在别处.mp3' },
  { title: '积极向下', file: '/积极向下.mp3' },
];

interface HeaderProps {
  onOpenPresets: () => void;
  onOpenHelp: () => void;
  onClearCanvas: () => void;
  onExportImage: () => void;
  itemCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPresets,
  onOpenHelp,
  onClearCanvas,
  onExportImage,
  itemCount
}) => {
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [isSongDropdownOpen, setIsSongDropdownOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Auto-play 积极向下 on mount with random delay
  useEffect(() => {
    const delay = Math.random() * 3000 + 1000; // 1–4 seconds
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = songs[3].file;
        audioRef.current.play().then(() => {
          setCurrentSongIndex(3);
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked by browser, keep default state
        });
      }
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSongDropdownOpen(false);
      }
    };
    if (isSongDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSongDropdownOpen]);

  const isActuallyPlaying = () => {
    return audioRef.current && !audioRef.current.paused;
  };

  const handleMusicClick = () => {
    if (isActuallyPlaying()) {
      audioRef.current?.pause();
      setIsPlaying(false);
      setIsSongDropdownOpen(false);
    } else {
      setIsSongDropdownOpen(!isSongDropdownOpen);
    }
  };

  const selectSong = (index: number) => {
    if (currentSongIndex === index && isActuallyPlaying()) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.src = songs[index].file;
        audioRef.current.load();
        audioRef.current.play().then(() => {
          setCurrentSongIndex(index);
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
    setIsSongDropdownOpen(false);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };
  return (
    <header className="sticky top-0 z-30 bg-[#f2efea]/95 backdrop-blur-md border-b border-[#2d2a26]/15 px-2.5 pb-2 sm:px-6" style={{ paddingTop: '25px' }}>
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
          
          {/* Audio Vibe */}
          <div className="relative group" ref={dropdownRef}>
            <audio ref={audioRef} onEnded={handleAudioEnded} preload="auto" />
            <button
              onClick={handleMusicClick}
              className={`p-1.5 sm:p-2 border text-xs transition-colors flex items-center justify-center relative shrink-0 ${
                isPlaying
                  ? 'border-[#c2410c] bg-[#c2410c]/10 text-[#c2410c]'
                  : 'border-[#2d2a26] text-[#2d2a26] hover:bg-[#2d2a26] hover:text-white'
              }`}
              title="选歌"
            >
              <Music className="w-3.5 h-3.5" />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#c2410c] animate-pulse" />
              )}
            </button>
            {isSongDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-36 bg-[#f2efea] border border-[#2d2a26] shadow-2xl p-1 z-50">
                <div className="text-[10px] text-[#2d2a26]/60 px-2 py-1 font-courier border-b border-[#2d2a26]/15 uppercase tracking-widest">
                  SELECT SONG
                </div>
                {songs.map((s, idx) => (
                  <button
                    key={s.title}
                    onClick={() => selectSong(idx)}
                    className={`w-full text-left px-2 py-1.5 text-xs font-serif-sc flex items-center justify-between transition-colors ${
                      currentSongIndex === idx && isPlaying
                        ? 'bg-[#2d2a26] text-white font-bold'
                        : 'text-[#2d2a26] hover:bg-[#e2ded6]'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {currentSongIndex === idx && isPlaying ? (
                        <Pause className="w-2.5 h-2.5" />
                      ) : (
                        <Play className="w-2.5 h-2.5" />
                      )}
                      {s.title}
                    </span>
                    {currentSongIndex === idx && isPlaying && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

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
