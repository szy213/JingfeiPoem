import React, { useState, useRef } from 'react';
import { Music, X, Play, Pause, Disc } from 'lucide-react';

interface AudioPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const songs = [
  { title: '猩红', file: '/猩红.mp3' },
  { title: '生活在别处', file: '/生活在别处.mp3' },
  { title: '积极向下', file: '/积极向下.mp3' },
];

export const AudioPlayerModal: React.FC<AudioPlayerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1); // -1 means no song selected yet
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectSong = (index: number) => {
    if (currentSongIndex === index) {
      // Toggle play/pause for same song
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
      return;
    }

    // Switch to new song
    if (audioRef.current) {
      audioRef.current.src = songs[index].file;
      audioRef.current.load();
      audioRef.current.play();
    }
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      {/* Hidden audio element for actual playback */}
      <audio ref={audioRef} onEnded={handleAudioEnded} preload="auto" />

      <div className="w-full max-w-sm bg-[#1b161c] border border-[#3e3240] rounded-2xl p-5 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-[#2d242f] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Disc className="w-4 h-4 text-[#e6c875]" />
            <h3 className="font-serif-sc font-bold text-base text-[#f4efe8]">选歌</h3>
          </div>
          <button onClick={handleClose} className="p-1 text-[#a093a1] hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Spinning Vinyl Record Visual */}
        <div className="flex flex-col items-center py-4 bg-[#120f13] rounded-xl border border-[#2b222c] mb-4">
          <div className={`w-32 h-32 rounded-full bg-[#0d0c0e] border-4 border-[#221f24] shadow-2xl flex items-center justify-center relative ${isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''}`}>
            {/* Vinyl Grooves */}
            <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center">
                {/* Center Label */}
                <div className="w-10 h-10 rounded-full bg-[#8c232b] border border-[#d4af37] text-[8px] text-[#fce8eb] font-xiaowei flex items-center justify-center font-bold text-center p-1">
                  陈婧霏
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-3 px-3">
            {currentSongIndex >= 0 ? (
              <>
                <h4 className="font-serif-sc font-bold text-sm text-[#f4efe8]">{songs[currentSongIndex].title}</h4>
                <p className="font-serif-sc text-xs text-[#a093a1] italic mt-1">
                  {isPlaying ? '正在播放...' : '已暂停'}
                </p>
              </>
            ) : (
              <p className="font-serif-sc text-xs text-[#a093a1] italic">点击下方歌曲开始播放</p>
            )}
          </div>
        </div>

        {/* Play/Pause Button */}
        {currentSongIndex >= 0 && (
          <button
            onClick={() => selectSong(currentSongIndex)}
            className={`w-full py-2.5 rounded-xl font-serif-sc text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all ${
              isPlaying
                ? 'bg-[#8c232b] text-white border border-[#c93c3c]'
                : 'bg-[#282029] text-[#e8ded3] border border-[#3e3240] hover:border-[#c93c3c]'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-[#e6c875]" /> : <Play className="w-4 h-4 text-[#e6c875]" />}
            <span>{isPlaying ? '暂停' : '继续播放'}</span>
          </button>
        )}

        {/* Song Selector */}
        <div className="mt-3 flex flex-col gap-2 pt-1">
          <p className="text-[10px] text-[#a093a1] font-courier uppercase tracking-wider px-1">选择歌曲</p>
          {songs.map((s, idx) => (
            <button
              key={s.title}
              onClick={() => selectSong(idx)}
              className={`w-full px-3 py-2.5 rounded-lg text-sm font-serif-sc text-left border transition-all ${
                currentSongIndex === idx
                  ? isPlaying
                    ? 'bg-[#3d272d] text-[#fce8eb] border-[#c93c3c]'
                    : 'bg-[#3d272d] text-[#fce8eb] border-[#c93c3c]/50'
                  : 'bg-[#181318] text-[#9c8e9b] border-[#2b222c] hover:border-[#e6c875]/40 hover:text-[#e8ded3]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Music className={`w-3.5 h-3.5 ${currentSongIndex === idx && isPlaying ? 'text-[#e6c875]' : 'text-[#5a525b]'}`} />
                <span>{s.title}</span>
                {currentSongIndex === idx && isPlaying && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#e6c875] animate-pulse" />
                )}
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
