const toolList = [
  // ==================== 工具 ====================
  { id: 1, name: "图片压缩", desc: "免费在线图片压缩，无损缩小体积", url: "https://tinypng.com", type: "工具", view: 328, like: 86 },
  { id: 2, name: "PDF转换", desc: "PDF转Word、图片、PPT免费转换", url: "https://www.ilovepdf.com", type: "工具", view: 412, like: 105 },
  { id: 3, name: "在线工具箱", desc: "百款实用在线小工具合集", url: "https://tool.lu", type: "工具", view: 566, like: 142 },
  { id: 4, name: "二维码生成", desc: "免费生成、解析各种二维码", url: "https://cli.im", type: "工具", view: 298, like: 76 },
  { id: 5, name: "格式转换", desc: "音视频、图片格式在线转换", url: "https://convertio.co/zh", type: "工具", view: 344, like: 92 },

  // ==================== 设计 ====================
  { id: 6, name: "在线PS", desc: "网页版Photoshop，无需安装", url: "https://www.photopea.com", type: "设计", view: 389, like: 97 },
  { id: 7, name: "图标下载", desc: "免费矢量图标、PNG素材", url: "https://www.flaticon.com", type: "设计", view: 452, like: 121 },
  { id: 8, name: "可画设计", desc: "免费海报、封面、PPT在线制作", url: "https://www.canva.com", type: "设计", view: 521, like: 156 },
  { id: 9, name: "免费图库", desc: "可商用高清无版权图片", url: "https://unsplash.com", type: "设计", view: 487, like: 139 },

  // ==================== AIGC ====================
  { id: 10, name: "AI绘画", desc: "AI生成图片，支持多种风格", url: "https://www.midjourney.com", type: "AIGC", view: 721, like: 235 },
  { id: 11, name: "AI写作", desc: "AI文案、文章、总结生成", url: "https://yiyan.baidu.com", type: "AIGC", view: 645, like: 198 },
  { id: 12, name: "AI语音", desc: "文字转语音，多种音色选择", url: "https://voice.baidu.com", type: "AIGC", view: 427, like: 117 },
  { id: 13, name: "AI代码", desc: "AI编程、代码解释、自动生成", url: "https://github.com/copilot", type: "AIGC", view: 562, like: 174 },

  // ==================== 影视 ====================
  { id: 14, name: "影视在线", desc: "高清电影、电视剧免费在线", url: "https://www.watchseries.so", type: "影视", view: 942, like: 310 },
  { id: 15, name: "影视搜索", desc: "全网影视资源快速检索", url: "https://www.zhuixinfan.com", type: "影视", view: 876, like: 276 },
  { id: 16, name: "纪录片", desc: "国内外高清纪录片免费观看", url: "https://www.jilunihao.net", type: "影视", view: 532, like: 168 },

  // ==================== 动漫 ====================
  { id: 17, name: "番剧在线", desc: "新番、旧番动漫免费看", url: "https://www.bilibili.com", type: "动漫", view: 821, like: 263 },
  { id: 18, name: "动漫搜索", desc: "全网动漫资源搜索", url: "https://www.dm530p.com", type: "动漫", view: 679, like: 201 },
  { id: 19, name: "漫画阅读", desc: "国漫、日漫免费在线阅读", url: "https://www.manhuagui.com", type: "动漫", view: 546, like: 159 },

  // ==================== 音乐 ====================
  { id: 20, name: "无损音乐", desc: "全网音乐免费试听与下载", url: "https://music.163.com", type: "音乐", view: 765, like: 241 },
  { id: 21, name: "歌词搜索", desc: "根据歌词查找歌曲名称", url: "https://www.geciduoduo.com", type: "音乐", view: 312, like: 89 },
  { id: 22, name: "伴奏下载", desc: "歌曲伴奏、纯音乐下载", url: "https://www.5sing.kugou.com", type: "音乐", view: 387, like: 106 },

  // ==================== 游戏 ====================
  { id: 23, name: "单机游戏", desc: "经典单机游戏资源合集", url: "https://www.3dmgame.com", type: "游戏", view: 698, like: 217 },
  { id: 24, name: "小游戏", desc: "网页在线小游戏，无需下载", url: "https://www.4399.com", type: "游戏", view: 845, like: 282 },
  { id: 25, name: "游戏攻略", desc: "各类游戏攻略、资讯、评测", url: "https://www.3dmgame.com", type: "游戏", view: 421, like: 113 },

  // ==================== 学习 ====================
  { id: 26, name: "网课平台", desc: "IT、考证、考研各类学习资源", url: "https://www.bilibili.com", type: "学习", view: 547, like: 163 },
  { id: 27, name: "文档搜索", desc: "PPT、Word、PDF学习资料搜索", url: "https://www.doc88.com", type: "学习", view: 398, like: 107 },
  { id: 28, name: "编程学习", desc: "前端、后端、编程入门教程", url: "https://www.runoob.com", type: "学习", view: 621, like: 192 },
  { id: 29, name: "外语学习", desc: "英语、日语、韩语学习工具", url: "https://www.youdao.com", type: "学习", view: 476, like: 131 },

  // ==================== 生活 ====================
  { id: 30, name: "生活查询", desc: "快递、天气、生活常用工具", url: "https://www.baidu.com", type: "生活", view: 432, like: 118 },
  { id: 31, name: "快递查询", desc: "一键查询全网快递物流", url: "https://www.kuaidi100.com", type: "生活", view: 385, like: 99 },
  { id: 32, name: "油价查询", desc: "全国今日油价实时查询", url: "https://www.qiyoujiage.com", type: "生活", view: 297, like: 78 },

  // ==================== 资源 ====================
  { id: 33, name: "软件资源", desc: "Windows、Mac实用软件分享", url: "https://www.pc6.com", type: "资源", view: 611, like: 185 },
  { id: 34, name: "电子书", desc: "小说、教材、电子书免费下载", url: "https://www.book118.com", type: "资源", view: 529, like: 157 },
  { id: 35, name: "模板资源", desc: "PPT、简历、表格模板免费下载", url: "https://www.officeplus.cn", type: "资源", view: 478, like: 133 }
];