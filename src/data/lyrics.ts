import { LyricItem, SongCategory } from '../types';

export const SONG_CATEGORIES: SongCategory[] = [
  { id: 'all', title: '全部歌词', subtitle: 'All Lyrics', mood: 'all' },
  { id: 'album_cjf', title: '《陈婧霏》', subtitle: 'Debut Album', mood: 'romantic' },
  { id: 'album_xh', title: '《猩红》', subtitle: 'Crimson', mood: 'noir' },
  { id: 'singles_pre2020', title: '2020前单曲', subtitle: 'Pre-2020 Singles', mood: 'vintage' },
  { id: 'singles_2020_2024', title: '2020-2024单曲', subtitle: '2020-2024 Era', mood: 'dream' },
  { id: 'singles_post2024', title: '2024后单曲', subtitle: '2024+ Singles', mood: 'existential' },
];

export const LYRICS_DATABASE: LyricItem[] = [
  // ==========================================
  // 第一级：《陈婧霏》
  // ==========================================
  // 我的孤独认出你的孤独
  { id: 'cjf-wdgd-1', text: '面具', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-2', text: '春天', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-3', text: '腐烂', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-4', text: '输给上帝', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-5', text: '擦身而过', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-6', text: '敏感不幸的神经', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-7', text: '暴力', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-wdgd-8', text: '孤独', song: '我的孤独认出你的孤独', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 夏宫
  { id: 'cjf-xg-1', text: '浪漫多情', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-2', text: '天晴', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-3', text: '氧气', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-4', text: '奇迹', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-5', text: '时代边缘外', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-6', text: '狂欢', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-7', text: '享受黑暗', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-8', text: '上世纪的', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xg-9', text: '客厅', song: '夏宫', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 消亡史
  { id: 'cjf-xws-1', text: '沐浴', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-2', text: '哼唱', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-3', text: '纯真又放荡', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-4', text: '永昼的光芒', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-5', text: '浪漫的刑场', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-6', text: '诱惑', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-7', text: '抵挡', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-8', text: '仓皇', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-9', text: '肉体', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-10', text: '欲望', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-xws-11', text: '静脉', song: '消亡史', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 晕船记
  { id: 'cjf-ycj-1', text: '树影', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-2', text: '水草', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-3', text: '落入风里', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-4', text: '航离了时代', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-5', text: '彼岸', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-6', text: '新诗意', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-7', text: '沉醉', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ycj-8', text: '星河深处', song: '晕船记', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 今晚
  { id: 'cjf-jw-1', text: '不要离开', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-2', text: '疯狂的世界', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-3', text: '地平线', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-4', text: '眼泪', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-5', text: '你还在我的身边', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-6', text: '今晚', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-7', text: '城市的表面', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-8', text: '感受', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-9', text: '笑容', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-jw-10', text: '安全', song: '今晚', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 深蓝
  { id: 'cjf-sl-1', text: '深蓝色', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-2', text: '瞳孔', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-3', text: '涌入', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-4', text: '臂窝', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-5', text: '完整我', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-6', text: '嘴唇', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-7', text: '爱和欲望', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-8', text: '高墙', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-9', text: '进入我', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-10', text: '躯壳', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-11', text: '熄灭蜡烛', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-12', text: '熊熊烈火', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-13', text: '尘世的梦幻想', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-14', text: '耗尽了目光', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-sl-15', text: '自由奢侈', song: '深蓝', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // In Bloom
  { id: 'cjf-ib-1', text: 'blossom', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ib-2', text: 'golden paradise', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ib-3', text: 'sweet love', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ib-4', text: 'synchronised', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ib-5', text: 'whisper', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ib-6', text: 'scar', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-ib-7', text: 'stolen stars', song: 'In Bloom', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 舞舞舞
  { id: 'cjf-www-1', text: '酥软', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-2', text: '尽情地旋转', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-3', text: '性感', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-4', text: '贪玩', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-5', text: '迷幻', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-6', text: '尽情地旋转', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-7', text: '一起玩', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-www-8', text: '我不怕孤单', song: '舞舞舞', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 人间指南
  { id: 'cjf-rjzn-1', text: '烟花般灿烂', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-2', text: '彼岸', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-3', text: '方向感', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-4', text: '谋杀麻烦', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-5', text: '盲目', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-6', text: '忙碌', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-7', text: '美食榜单', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-rjzn-8', text: '黯淡', song: '人间指南', category: '《陈婧霏》', categoryId: 'album_cjf' },

  // 生活在别处
  { id: 'cjf-shbc-1', text: '吻', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-2', text: '淌过', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-3', text: '还给生活', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-4', text: '别处的烟火', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-5', text: '列车', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-6', text: '重新复活', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-7', text: '旋律', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },
  { id: 'cjf-shbc-8', text: '褪色的小说', song: '生活在别处', category: '《陈婧霏》', categoryId: 'album_cjf' },


  // ==========================================
  // 第一级：《猩红》
  // ==========================================
  // 红霞剧场
  { id: 'xh-hxjc-1', text: '日落', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-2', text: '飞驰', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-3', text: '黄金的时代', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-4', text: '舞台', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-5', text: '胸怀', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-6', text: '恋和爱', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-7', text: '天涯', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-8', text: '灵感', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-9', text: '善待', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-10', text: '反向的列车', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-11', text: '红色头发', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-12', text: '带我回家', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-hxjc-13', text: '命运的春风', song: '红霞剧场', category: '《猩红》', categoryId: 'album_xh' },

  // 北海
  { id: 'xh-bh-1', text: '绿树', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-2', text: '红墙', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-3', text: '喜悦', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-4', text: '逆流而上', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-5', text: '人间剧场', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-6', text: '绝美的光', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-7', text: '昨日', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-8', text: '散场', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-9', text: '直觉', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-10', text: '小船儿', song: '北海', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-bh-11', text: '梦里的水乡', song: '北海', category: '《猩红》', categoryId: 'album_xh' },

  // 沙漠一枝花
  { id: 'xh-smyzh-1', text: '社会的情趣', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-smyzh-2', text: '自说自话', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-smyzh-3', text: '快乐', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-smyzh-4', text: '床被', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-smyzh-5', text: '暧昧', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-smyzh-6', text: '一朵花', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-smyzh-7', text: '沙漠', song: '沙漠一枝花', category: '《猩红》', categoryId: 'album_xh' },

  // 春宵苦短，少女快前进！
  { id: 'xh-cxkd-1', text: '白兰地', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-2', text: '苹果雨', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-3', text: '神仙鱼', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-4', text: '夏日恋曲', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-5', text: '梦境', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-6', text: '电气的滑梯', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-7', text: '起伏的四季', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-8', text: '蒸汽的陷阱', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-9', text: '掉进', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-cxkd-10', text: '行李', song: '春宵苦短，少女快前进！', category: '《猩红》', categoryId: 'album_xh' },

  // 禁色宝丽来
  { id: 'xh-jsblr-1', text: '崎岖', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-2', text: '天台烛火', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-3', text: '飞蛾扑火', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-4', text: '心魔', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-5', text: '坠落', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-6', text: '寂寞', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-7', text: '打碎', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-8', text: '道德', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-9', text: '裙下的', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-10', text: '封锁', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-11', text: '爱欲', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-jsblr-12', text: '惊心动魄', song: '禁色宝丽来', category: '《猩红》', categoryId: 'album_xh' },

  // 演！演！演！
  { id: 'xh-yyy-1', text: '戏', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-2', text: '轮廓', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-3', text: '本色', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-4', text: '交给命运', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-5', text: '摩擦后生热', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-6', text: '存在', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-7', text: '野火', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-8', text: '镜中的自己', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-9', text: '戏', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-10', text: '性感', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-yyy-11', text: '悲观垫底', song: '演！演！演！', category: '《猩红》', categoryId: 'album_xh' },

  // 诸多夏日后天鹅死去
  { id: 'xh-zdxrh-1', text: '天鹅', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zdxrh-2', text: '殉情', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zdxrh-3', text: '诸多夏日后', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zdxrh-4', text: '阴影', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zdxrh-5', text: '光', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zdxrh-6', text: '闯入', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zdxrh-7', text: '上升的烟火', song: '诸多夏日后天鹅死去', category: '《猩红》', categoryId: 'album_xh' },

  // 你是我最爱的褪色幻想
  { id: 'xh-tshx-1', text: '紫罗兰色的', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-2', text: '阳光', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-3', text: '金黄', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-4', text: '热浪', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-5', text: '下滑的旋律', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-6', text: '别离', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-7', text: '光晕', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-8', text: '结局', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-9', text: '褪色的幻想', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-10', text: '失焦在光晕', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-tshx-11', text: '梦', song: '你是我最爱的褪色幻想', category: '《猩红》', categoryId: 'album_xh' },

  // 自恋咒
  { id: 'xh-zlz-1', text: '是我', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-2', text: '也是我', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-3', text: '浴缸', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-4', text: '烛光', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-5', text: '灵魂', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-6', text: '纯真', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-7', text: '脆弱', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-8', text: '狂热', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-9', text: '笨拙', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-10', text: '沉静', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-zlz-11', text: '都留给我', song: '自恋咒', category: '《猩红》', categoryId: 'album_xh' },

  // 猩红
  { id: 'xh-xh-1', text: '炽热的红', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-2', text: '霓虹', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-3', text: '肉体', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-4', text: '湮没', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-5', text: '奶油的香浓', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-6', text: '中和', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-7', text: 'truth', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-8', text: 'fiction', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-9', text: '城市上空', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-10', text: '狂喜的风', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-11', text: '地心', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-12', text: '翅膀', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-13', text: '疼痛', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-14', text: '降落在花丛', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-15', text: '融化的霓虹', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },
  { id: 'xh-xh-16', text: '凝固', song: '猩红', category: '《猩红》', categoryId: 'album_xh' },

  // ==========================================
  // 第一级：2020前单曲
  // ==========================================
  // 别处的夕阳
  { id: 'pre-bcxy-1', text: '玫瑰色', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-bcxy-2', text: '细雨', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-bcxy-3', text: '燃烧四方', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-bcxy-4', text: '夏日的松香', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-bcxy-5', text: '守望', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-bcxy-6', text: '夜风', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-bcxy-7', text: '一整片夕阳', song: '别处的夕阳', category: '2020前单曲', categoryId: 'singles_pre2020' },

  // September lies
  { id: 'pre-sl-1', text: 'sweetest lullaby', song: 'September lies', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-sl-2', text: 'heaven', song: 'September lies', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-sl-3', text: 'paradise', song: 'September lies', category: '2020前单曲', categoryId: 'singles_pre2020' },

  // 手
  { id: 'pre-shou-1', text: '山川风光', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-2', text: '模样', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-3', text: '一池春浪', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-4', text: '吹皱', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-5', text: '手掌', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-6', text: '爱的弥彰', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-7', text: '爱神', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-8', text: '一路流淌', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-9', text: '春光', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-10', text: '回望', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-shou-11', text: '你手上风光', song: '手', category: '2020前单曲', categoryId: 'singles_pre2020' },

  // I found out too late
  { id: 'pre-ifotl-1', text: '九月', song: 'I found out too late', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-ifotl-2', text: '游乐园', song: 'I found out too late', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-ifotl-3', text: '旧时光', song: 'I found out too late', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-ifotl-4', text: '冲淡', song: 'I found out too late', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-ifotl-5', text: '频率', song: 'I found out too late', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-ifotl-6', text: '涟漪般', song: 'I found out too late', category: '2020前单曲', categoryId: 'singles_pre2020' },

  // 积极向下
  { id: 'pre-jjxx-1', text: '天大地大', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-2', text: '谁的嘉年华', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-3', text: '加速蒸发', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-4', text: '失重的', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-5', text: '宿醉', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-6', text: '眷恋', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-7', text: '纯真', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-8', text: '长大', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-9', text: '自由落体', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-10', text: '黄昏大桥', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-11', text: '不羁', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-12', text: '年轻', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-13', text: '明天', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-14', text: '男孩女孩', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-15', text: '苹果', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-16', text: '浪费这盛夏', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },
  { id: 'pre-jjxx-17', text: '心碎', song: '积极向下', category: '2020前单曲', categoryId: 'singles_pre2020' },

  // ==========================================
  // 第一级：2020-2024单曲
  // ==========================================
  // 至暗时刻
  { id: 'mid-zask-1', text: '冷漠', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-zask-2', text: '反派角色', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-zask-3', text: '传说', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-zask-4', text: '恐吓', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-zask-5', text: '萤火', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-zask-6', text: '腐朽的规则', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-zask-7', text: '因果', song: '至暗时刻', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 逝去的海
  { id: 'mid-sqdh-1', text: '晚霞', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-sqdh-2', text: '游鱼', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-sqdh-3', text: '一扇窗', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-sqdh-4', text: '清晨的东方', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-sqdh-5', text: '等待', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-sqdh-6', text: '淅淅沥沥', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-sqdh-7', text: '澎湃', song: '逝去的海', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 芍药信
  { id: 'mid-syx-1', text: '节日快乐', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-2', text: '泡沫', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-3', text: '海鸥', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-4', text: '过敏般泛红', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-5', text: '蔬果', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-6', text: '错过', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-7', text: '降落', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-8', text: '炙热', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-9', text: '蒲公英', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-10', text: '日记上的斑驳', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-11', text: '星河', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-syx-12', text: '含羞的星河', song: '芍药信', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 如梦
  { id: 'mid-rm-1', text: '流浪车厢', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-2', text: '无尽的当下', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-3', text: '蔷薇', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-4', text: '明媚', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-5', text: '直觉', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-6', text: '显化', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-7', text: '当下', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-8', text: '世界模样', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-9', text: '流光', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-10', text: '雪霜', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-rm-11', text: '真相', song: '如梦', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 她ELLE
  { id: 'mid-elle-1', text: '脱轨', song: '她ELLE', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-elle-2', text: '不完美', song: '她ELLE', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-elle-3', text: '陶醉', song: '她ELLE', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-elle-4', text: '浪费', song: '她ELLE', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-elle-5', text: '街头到巷尾', song: '她ELLE', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 光芒
  { id: 'mid-gm-1', text: '暴力天堂', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-2', text: '意识边疆', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-3', text: '波浪', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-4', text: '品尝', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-5', text: '全息幻象', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-6', text: '解放', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-7', text: '身躯滚烫', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-8', text: '公路', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-9', text: '震荡', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-10', text: '妖冶', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-11', text: '光芒', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-12', text: '猩涩的月亮', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-gm-13', text: '摇摇晃晃', song: '光芒', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 春色悠悠不及你荡漾
  { id: 'mid-csyy-1', text: '肩膀', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-2', text: '流浪', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-3', text: '恋人的絮语', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-4', text: '等待', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-5', text: '轻轻地唱', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-6', text: '香气', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-7', text: '炙热的双唇', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-8', text: '未知远方', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-csyy-9', text: '荡漾', song: '春色悠悠不及你荡漾', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 午夜爱未眠
  { id: 'mid-wyawm-1', text: '狂野', song: '午夜爱未眠', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-wyawm-2', text: '流星', song: '午夜爱未眠', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-wyawm-3', text: '午夜', song: '午夜爱未眠', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-wyawm-4', text: '房间', song: '午夜爱未眠', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // 她不再幻想
  { id: 'mid-tbzhx-1', text: '抵达月光', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-tbzhx-2', text: '松绑', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-tbzhx-3', text: '倔强', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-tbzhx-4', text: '新世界', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-tbzhx-5', text: '飞过', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-tbzhx-6', text: '当你说', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },
  { id: 'mid-tbzhx-7', text: '旅途', song: '她不再幻想', category: '2020-2024单曲', categoryId: 'singles_2020_2024' },

  // ==========================================
  // 第一级：2024后单曲
  // ==========================================
  // 我长期坠入梦乡
  { id: 'post-wcqzrmx-1', text: '献祭', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-2', text: '挣脱这绳索', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-3', text: '潮湿的太阳', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-4', text: '切断', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-5', text: '乌鸦', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-6', text: '惊醒', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-7', text: '秋千', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-wcqzrmx-8', text: '在绽放', song: '我长期坠入梦乡', category: '2024后单曲', categoryId: 'singles_post2024' },

  // 岩中花述
  { id: 'post-yzhs-1', text: '绽放', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-2', text: '岩石', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-3', text: '遇见', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-4', text: '柔软', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-5', text: '内心', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-6', text: '她的天堂', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-7', text: '创造', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-8', text: '遥望', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-yzhs-9', text: '美丽', song: '岩中花述', category: '2024后单曲', categoryId: 'singles_post2024' },

  // 美力场
  { id: 'post-mlc-1', text: '颈后', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-2', text: '发梢', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-3', text: '陆离光怪', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-4', text: '馥郁流淌', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-5', text: '磁场', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-6', text: '巨浪', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-7', text: '天使的翅膀', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-8', text: '情网', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-9', text: '嚣张', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-10', text: '流淌', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-11', text: '天地', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-12', text: '发烫', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
  { id: 'post-mlc-13', text: '天地多宽广', song: '美力场', category: '2024后单曲', categoryId: 'singles_post2024' },
];

export const PRESET_POEMS = [
  {
    title: '消亡史与星河',
    songTheme: '《陈婧霏》',
    items: [
      { text: '纯真又放荡', styleId: 'newspaper' },
      { text: '永昼的光芒', styleId: 'charcoal-dark' },
      { text: '↵', isLineBreak: true },
      { text: '航离了时代', styleId: 'gold-line' },
      { text: '落入风里', styleId: 'crimson-stamp' },
      { text: '星河深处', styleId: 'kraft-border' },
    ]
  },
  {
    title: '猩红剧场',
    songTheme: '《猩红》',
    items: [
      { text: '猩纯的红', styleId: 'crimson-stamp' },
      { text: '黄金的时代', styleId: 'newspaper' },
      { text: '↵', isLineBreak: true },
      { text: '绝美的光', styleId: 'gold-line' },
      { text: '起伏的四季', styleId: 'vintage-type' },
    ]
  },
  {
    title: '别处的夕阳',
    songTheme: '2020前单曲',
    items: [
      { text: '玫瑰色', styleId: 'charcoal-dark' },
      { text: '夏日的松香', styleId: 'newspaper' },
      { text: '↵', isLineBreak: true },
      { text: '一池春浪', styleId: 'gold-line' },
      { text: '一整片夕阳', styleId: 'kraft-border' },
    ]
  },
  {
    title: '岩中花述',
    songTheme: '2024后单曲',
    items: [
      { text: '潮湿的太阳', styleId: 'vintage-type' },
      { text: '在绽放', styleId: 'crimson-stamp' },
      { text: '↵', isLineBreak: true },
      { text: '陆离光怪', styleId: 'newspaper' },
      { text: '天使的翅膀', styleId: 'gold-line' },
    ]
  }
];
