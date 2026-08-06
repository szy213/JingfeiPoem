import { PaperStyleConfig, CanvasBgType, PaperStyleId } from '../types';

export const ROSE_PAPER_STYLES: PaperStyleConfig[] = [
  {
    id: 'newspaper',
    name: '旧报剪页',
    bgClass: 'bg-[#f4efe4]',
    textClass: 'text-[#1c1815]',
    borderClass: 'border border-[#d8cfbe] shadow-[1px_2px_4px_rgba(0,0,0,0.12)]',
    fontFamily: 'serif',
  },
  {
    id: 'vintage-type',
    name: '打字机印',
    bgClass: 'bg-[#181615]',
    textClass: 'text-[#e6dfd3]',
    borderClass: 'border border-[#38332e] shadow-[2px_2px_5px_rgba(0,0,0,0.3)]',
    fontFamily: 'courier',
  },
  {
    id: 'charcoal-dark',
    name: '墨黑残切',
    bgClass: 'bg-[#2b2628]',
    textClass: 'text-[#f2ebe1]',
    borderClass: 'border-l-2 border-l-[#c93c3c] border-y border-r border-[#423b3e] shadow-md',
    fontFamily: 'serif',
  },
  {
    id: 'crimson-stamp',
    name: '胭脂复古红',
    bgClass: 'bg-[#8c232b]',
    textClass: 'text-[#fce8eb]',
    borderClass: 'border border-[#a8323c] shadow-md',
    fontFamily: 'serif',
  },
  {
    id: 'gold-line',
    name: '描金衬底',
    bgClass: 'bg-[#231e1a]',
    textClass: 'text-[#e2c17c]',
    borderClass: 'border border-[#d4af37]/40 shadow-[0_2px_8px_rgba(212,175,55,0.15)]',
    fontFamily: 'playfair',
  },
  {
    id: 'kraft-border',
    name: '毛边牛皮纸',
    bgClass: 'bg-[#d9c4aa]',
    textClass: 'text-[#2b2118]',
    borderClass: 'border border-[#b59e82] shadow-sm',
    fontFamily: 'serif',
  },
  {
    id: 'film-slide',
    name: '胶片底片',
    bgClass: 'bg-[#0f1115]',
    textClass: 'text-[#d6e0ea]',
    borderClass: 'border-x-2 border-x-[#e6c875] border-y border-[#2a2d34]',
    fontFamily: 'courier',
  }
];

export const LINEN_PAPER_STYLES: PaperStyleConfig[] = [
  {
    id: 'soda-orange',
    name: '汽水橘',
    bgClass: 'bg-[#D8845E]',
    textClass: 'text-[#E5E0DD]',
    borderClass: 'border border-[#c5734d] shadow-sm',
    fontFamily: 'courier',
  },
  {
    id: 'sky-blue',
    name: '天空蓝',
    bgClass: 'bg-[#A7BCB8]',
    textClass: 'text-[#FFF8EF]',
    borderClass: 'border border-[#92a7a3] shadow-sm',
    fontFamily: 'serif',
  },
  {
    id: 'sun-orange',
    name: '阳光橙',
    bgClass: 'bg-[#E0B279]',
    textClass: 'text-[#BA4B22]',
    borderClass: 'border border-[#cb9e64] shadow-sm',
    fontFamily: 'xiaowei',
  },
  {
    id: 'pine-brown',
    name: '松木棕',
    bgClass: 'bg-[#634A3E]',
    textClass: 'text-[#FFF6E6]',
    borderClass: 'border border-[#4f3a30] shadow-sm',
    fontFamily: 'serif',
  },
  {
    id: 'letter-white',
    name: '信纸白',
    bgClass: 'bg-[#F1D5C7]',
    textClass: 'text-[#482D1F]',
    borderClass: 'border border-[#dfbfb1] shadow-sm',
    fontFamily: 'playfair',
  },
];

export const KRAFT_PAPER_STYLES: PaperStyleConfig[] = [
  {
    id: 'orchid-purple',
    name: '罗兰紫',
    bgClass: 'bg-[#AB80AE]',
    textClass: 'text-[#FFF8EF]',
    borderClass: 'border border-[#9a6f9d] shadow-sm',
    fontFamily: 'courier',
  },
  {
    id: 'rose-pink',
    name: '蔷薇粉',
    bgClass: 'bg-[#DE83AB]',
    textClass: 'text-[#7D2943]',
    borderClass: 'border border-[#cb6d95] shadow-sm',
    fontFamily: 'playfair',
  },
  {
    id: 'grass-green',
    name: '草木绿',
    bgClass: 'bg-[#667D73]',
    textClass: 'text-[#FFF8EF]',
    borderClass: 'border border-[#cb9d64] shadow-sm',
    fontFamily: 'xiaowei',
  },
  {
    id: 'linen-brown',
    name: '亚麻棕',
    bgClass: 'bg-[#7D5347]',
    textClass: 'text-[#FFF6E6]',
    borderClass: 'border border-[#694338] shadow-sm',
    fontFamily: 'serif',
  },
  {
    id: 'kraft-letter',
    name: '玫瑰红',
    bgClass: 'bg-[#e5665d]',
    textClass: 'text-[#F1D5C7]',
    borderClass: 'border border-[#dfbfb1] shadow-sm',
    fontFamily: 'serif',
  },
];

export const PAPER_STYLES: PaperStyleConfig[] = [
  ...ROSE_PAPER_STYLES,
  ...LINEN_PAPER_STYLES,
  ...KRAFT_PAPER_STYLES,
];

export function getPaperStylesForTheme(bgType: CanvasBgType): PaperStyleConfig[] {
  if (bgType === 'rose') {
    return ROSE_PAPER_STYLES;
  }
  if (bgType === 'kraft') {
    return KRAFT_PAPER_STYLES;
  }
  return LINEN_PAPER_STYLES;
}

export const CANVAS_BG_CONFIGS: Record<CanvasBgType, { name: string; bgClass: string; cardClass: string; textColor: string; stampColor: string; stampBlend: string }> = {
  'rose': {
    name: '猩纯的红',
    bgClass: 'bg-paper-rose',
    cardClass: 'border-[#7a3240]/40',
    textColor: 'text-[#fce8eb]',
    stampColor: 'text-[#f3d3a7]',
    stampBlend: 'mix-blend-normal opacity-90',
  },
  'linen': {
    name: '积极向下',
    bgClass: 'bg-paper-linen',
    cardClass: 'border-[#4a4036]/20',
    textColor: 'text-[#2d2824]',
    stampColor: 'text-[#aa2e2b]',
    stampBlend: 'mix-blend-multiply opacity-85',
  },
  'kraft': {
    name: '别处生活',
    bgClass: 'bg-paper-kraft',
    cardClass: 'border-[#5a4838]/20',
    textColor: 'text-[#28211b]',
    stampColor: 'text-[#aa2e2b]',
    stampBlend: 'mix-blend-multiply opacity-85',
  }
};
