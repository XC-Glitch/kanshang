const toolList = [
  // ==================== 工具 ====================
  { id: 1, name: "百家姓加解密", desc: "敏感字符转换工具，免费在线使用", url: "https://baijiaxingjiemi.com", type: "工具", view: 548, like: 164 },
  { id: 2, name: "Map Genie", desc: "3A游戏地图工具，精准导航游戏场景", url: "https://mapgenie.io", type: "工具", view: 625, like: 188 },
  { id: 3, name: "I miss the office", desc: "模拟办公室氛围的声音工具，放松/专注使用", url: "https://imisstheoffice.com", type: "工具", view: 832, like: 249 },
  { id: 4, name: "哈希影视", desc: "区块链+影视生态垂直导航，免费高清影视资源", url: "https://hashvideo.com", type: "工具", view: 1258, like: 386 },
  { id: 5, name: "大额流量卡", desc: "流量卡办理与知识科普，生活学习实用参考", url: "https://daliuliangka.com", type: "工具", view: 587, like: 176 },

  // ==================== AI工具（原AIGC） ====================
  { id: 10, name: "Ai女友", desc: "中文AIGC平台，含角色扮演、效率工具等功能", url: "https://ainvyou.com", type: "AI工具", view: 1456, like: 437 },
  { id: 11, name: "Toonme", desc: "AI照片转卡通工具，一键生成卡通形象", url: "https://toonme.com", type: "AI工具", view: 1187, like: 356 },
  { id: 12, name: "绿色正规撸美元", desc: "海外合规收益方法科普，学习参考用途", url: "https://lumeiyuan.com", type: "AI工具", view: 612, like: 184 },
  { id: 13, name: "莱卡云", desc: "云计算/游戏云服务，BGP多线接入", url: "https://laikayun.com", type: "AI工具", view: 689, like: 207 },

  // ==================== 影视 ====================
  { id: 14, name: "百思派电影网", desc: "免费高清电影、电视剧在线观看，无广告", url: "https://baisipai.com", type: "影视", view: 987, like: 295 },
  { id: 15, name: "555电影网", desc: "全网影视资源聚合，免费高清播放", url: "https://555dyw.com", type: "影视", view: 1124, like: 342 },
  { id: 16, name: "火车太顺", desc: "免费影视资源导航，支持多源播放", url: "https://huochetaishun.com", type: "影视", view: 876, like: 258 },

  // ==================== 动漫 ====================
  { id: 17, name: "无广告TV", desc: "无广告影视播放平台，高清免费", url: "https://wuguanggao.tv", type: "动漫", view: 1053, like: 317 },
  { id: 18, name: "茶杯狐", desc: "影视资源聚合搜索，免费高清观影", url: "https://cupfox.com", type: "动漫", view: 1328, like: 405 },
  { id: 19, name: "Guo.Ge", desc: "世界各国国歌国旗资料站，可作动漫文化素材", url: "https://guo.ge", type: "动漫", view: 768, like: 230 },

  // ==================== 音乐 ====================
  { id: 20, name: "SkylineWebcams", desc: "全球高清实况摄像头，背景音效可作音乐素材", url: "https://skylinewebcams.com", type: "音乐", view: 945, like: 284 },
  { id: 21, name: "资源避难所", desc: "PC/安卓绿色软件+免费游戏资源分享", url: "https://ziyuannansuo.com", type: "音乐", view: 892, like: 268 },
  { id: 22, name: "麋鹿游戏仓库", desc: "各类免费单机游戏资源整合下载", url: "https://milugame.com", type: "音乐", view: 785, like: 236 },

  // ==================== 游戏 ====================
  { id: 23, name: "668游戏仓库", desc: "多平台游戏资源，免费分享无套路", url: "https://668game.com", type: "游戏", view: 742, like: 223 },
  { id: 24, name: "咸鱼单机", desc: "多平台单机游戏整合，免费下载", url: "https://xianyudanji.com", type: "游戏", view: 817, like: 245 },
  { id: 25, name: "Chrono Divide", desc: "网页版红色警戒2，无需下载直接玩", url: "https://chronodivide.com", type: "游戏", view: 1024, like: 307 },

  // ==================== 学习 ====================
  { id: 26, name: "跳跳兔导航", desc: "综合类资源导航，覆盖工作、学习等多领域", url: "https://tiaotiaotu.com", type: "学习", view: 954, like: 286 },
  { id: 27, name: "资源喵网", desc: "全网稀缺资源整合，免费分享影视/软件等资源", url: "https://ziyuanniao.com", type: "学习", view: 873, like: 262 },
  { id: 28, name: "SkylineWebcams", desc: "全球高清实况摄像头，可学习地理/文化知识", url: "https://skylinewebcams.com", type: "学习", view: 945, like: 284 },
  { id: 29, name: "Guo.Ge", desc: "世界各国国歌国旗学习资料站", url: "https://guo.ge", type: "学习", view: 768, like: 230 },

  // ==================== 生活 ====================
  { id: 30, name: "百家姓加解密", desc: "敏感字符转换，生活中隐私保护实用工具", url: "https://baijiaxingjiemi.com", type: "生活", view: 548, like: 164 },
  { id: 31, name: "大额流量卡", desc: "生活实用流量卡办理与查询", url: "https://daliuliangka.com", type: "生活", view: 587, like: 176 },
  { id: 32, name: "跳跳兔导航", desc: "生活类资源综合导航，便捷查找各类服务", url: "https://tiaotiaotu.com", type: "生活", view: 954, like: 286 },

  // ==================== 资源 ====================
  { id: 33, name: "资源避难所", desc: "PC/安卓软件+游戏资源整合分享", url: "https://ziyuannansuo.com", type: "资源", view: 892, like: 268 },
  { id: 34, name: "资源喵网", desc: "全网稀缺资源汇总，免费下载", url: "https://ziyuanniao.com", type: "资源", view: 873, like: 262 },
  { id: 35, name: "莱卡云", desc: "云计算资源与服务，免费体验/学习", url: "https://laikayun.com", type: "资源", view: 689, like: 207 }
];