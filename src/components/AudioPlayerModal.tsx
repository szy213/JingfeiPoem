import React, { useState, useEffect, useRef } from 'react';
import { Music, X, Play, Pause, Disc, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface AudioPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AudioPlayerModal: React.FC<AudioPlayerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    { title: '《晚风》', album: '陈婧霏', lyric: '晚风吹起你的裙摆，浪漫在夜色里蔓延' },
    { title: '《深蓝》', album: '陈婧霏', lyric: '坠入深蓝的海底，无声的叹息' },
    { title: '《消亡史》', album: '陈婧霏', lyric: '玫瑰在荒芜中怒放，文明在梦境里消亡' },
    { title: '《欲望》', album: '陈婧霏', lyric: '红唇与危险的试探，午夜零点的钟声' },
    { title: '《如梦初醒》', album: '陈婧霏', lyric: '晨光撕裂了黄昏，大梦一场' },
  ];

  // Synthesize soft vinyl record noise using Web Audio API
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Create warm vintage vinyl crackle noise
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Filter to emulate vinyl needle crackle
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1200;
        filter.Q.value = 3;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.04; // Gentle ambient level

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        noiseNodeRef.current = whiteNoise;
      } else {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full max-w-sm bg-[#1b161c] border border-[#3e3240] rounded-2xl p-5 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-[#2d242f] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Disc className="w-4 h-4 text-[#e6c875]" />
            <h3 className="font-serif-sc font-bold text-base text-[#f4efe8]">留声机音效与氛围</h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#a093a1] hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Spinning Vinyl Record Visual */}
        <div className="flex flex-col items-center py-4 bg-[#120f13] rounded-xl border border-[#2b222c] mb-4">
          <div className={`w-32 h-32 rounded-full bg-[#0d0c0e] border-4 border-[#221f24] shadow-2xl flex items-center justify-center relative ${isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''}`}>
            {/* Vinyl Groves */}
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
            <h4 className="font-serif-sc font-bold text-sm text-[#f4efe8]">{songs[currentSongIndex].title}</h4>
            <p className="font-serif-sc text-xs text-[#a093a1] italic mt-1 font-serif-sc">
              "{songs[currentSongIndex].lyric}"
            </p>
          </div>
        </div>

        {/* Play Ambient Vinyl Sound Button */}
        <button
          onClick={toggleAudio}
          className={`w-full py-2.5 rounded-xl font-serif-sc text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all ${
            isPlaying
              ? 'bg-[#8c232b] text-white border border-[#c93c3c]'
              : 'bg-[#282029] text-[#e8ded3] border border-[#3e3240] hover:border-[#c93c3c]'
          }`}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-[#e6c875]" /> : <Play className="w-4 h-4 text-[#e6c875]" />}
          <span>{isPlaying ? '暂停黑胶底噪音效' : '播放复古黑胶留声机音效'}</span>
        </button>

        {/* Song Selector Pills */}
        <div className="mt-3 flex gap-1.5 overflow-x-auto no-scrollbar pt-1">
          {songs.map((s, idx) => (
            <button
              key={s.title}
              onClick={() => setCurrentSongIndex(idx)}
              className={`px-2.5 py-1 rounded text-[11px] font-serif-sc whitespace-nowrap border ${
                currentSongIndex === idx
                  ? 'bg-[#3d272d] text-[#fce8eb] border-[#c93c3c]'
                  : 'bg-[#181318] text-[#9c8e9b] border-[#2b222c]'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
