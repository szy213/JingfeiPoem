export interface LyricItem {
  id: string;
  text: string;      // 第三级：词语
  song: string;      // 第二级：歌名
  category: string;  // 第一级：分类 (《陈婧霏》 | 《猩红》 | 2020前单曲 | 2020-2024单曲 | 2025后单曲)
  categoryId: string;
  mood?: 'romantic' | 'noir' | 'dream' | 'melancholy' | 'existential' | 'vintage';
  tag?: string;
}

export type PaperStyleId = 
  | 'newspaper'     // 黑字白底切页
  | 'vintage-type'   // 怀旧打字机
  | 'charcoal-dark'  // 暗黑炭黑
  | 'crimson-stamp'  // 胭脂复古红
  | 'gold-line'      // 描金烫印
  | 'kraft-border'   // 粗糙牛皮纸
  | 'film-slide'     // 胶片底片
  | 'soda-orange'    // 汽水橘
  | 'sky-blue'       // 天空蓝
  | 'sun-orange'     // 阳光橙
  | 'pine-brown'     // 松木棕
  | 'letter-white'   // 信纸白
  | 'orchid-purple'  // 罗兰紫
  | 'rose-pink'      // 蔷薇粉
  | 'grass-green'    // 草木绿
  | 'linen-brown'    // 亚麻棕
  | 'kraft-letter';  // 信纸白

export interface PaperStyleConfig {
  id: PaperStyleId;
  name: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  fontFamily: 'serif' | 'xiaowei' | 'courier' | 'playfair';
  tapeColor?: string;
}

export interface CollageItem {
  id: string;
  text: string;
  song?: string;
  styleId: PaperStyleId;
  rotationAngle: number; // e.g. -3 to 3 degrees for organic handmade look
  isLineBreak?: boolean;
  paddingSize?: 'sm' | 'md' | 'lg';
  hasTape?: boolean;
}

export interface StickerItem {
  id: string;
  type: 'postmark' | 'wax-seal' | 'vinyl-record' | 'pressed-flower' | 'scotch-tape' | 'signature' | 'badge';
  title: string;
  x: number; // percentage or px on canvas
  y: number;
  rotation: number;
  scale: number;
}

export type CanvasBgType = 'rose' | 'linen' | 'kraft';

export interface CanvasConfig {
  bgType: CanvasBgType;
  showGrid: boolean;
  showStamp: boolean;
  authorName: string;
  dateString: string;
  poemTitle: string;
  fontScale: 'sm' | 'md' | 'lg';
  aspectRatio: '3/4' | '9/16' | '1/1' | '4/5';
}

export interface SongCategory {
  id: string;
  title: string;
  subtitle: string;
  mood: string;
}
