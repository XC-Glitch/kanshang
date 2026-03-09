const toolList = [
  { id: 1, name: "百家姓加解密", desc: "敏感字符转换工具，免费在线使用", url: "https://tool.hoothin.com/zh-CN/baijiaxing-cipher#google_vignette", type: "工具", view: 548, like: 164 },
  { id: 2, name: "Map Genie", desc: "3A游戏地图工具，精准导航游戏场景", url: "https://mapgenie.io", type: "工具", view: 625, like: 188 },
  { id: 3, name: "I miss the office", desc: "模拟办公室氛围的声音工具，放松/专注使用", url: "https://imisstheoffice.eu/", type: "工具", view: 832, like: 249 },
  { id: 5, name: "大额流量卡", desc: "流量卡办理与知识科普，生活学习实用参考", url: "https://daliuliangka.com", type: "工具", view: 587, like: 176 },
  { id: 6, name: "开发者导航-陌上开花", desc: "开发者工具导航网站，提供各种开发者工具", url: "https://codernav.com/#term-8631", type: "工具", view: 623, like: 187 },
  { id: 7, name: "玖玖影院", desc: "免费在线观看电影和电视剧", url: "https://www.99dy.vip/", type: "影视", view: 625, like: 188 },









  { id: 19, name: "Guo.Ge", desc: "世界各国国歌国旗资料站，可作动漫文化素材", url: "https://guo.ge", type: "动漫", view: 768, like: 230 },
  { id: 20, name: "SkylineWebcams", desc: "全球高清实况摄像头，背景音效可作音乐素材", url: "https://skylinewebcams.com", type: "音乐", view: 945, like: 284 },



  { id: 24, name: "咸鱼单机", desc: "多平台单机游戏整合，免费下载", url: "https://xianyudanji.com", type: "游戏", view: 817, like: 245 },
  { id: 25, name: "Chrono Divide", desc: "网页版红色警戒2，无需下载直接玩", url: "https://chronodivide.com", type: "游戏", view: 1024, like: 307 },




  
  { id: 36, name: "Photopea", desc: "在线PS，功能媲美Photoshop", url: "https://www.photopea.com", type: "工具", view: 689, like: 215 },
  { id: 37, name: "RemoveBG", desc: "AI一键智能抠图去背景", url: "https://www.remove.bg", type: "工具", view: 742, like: 236 },
  { id: 38, name: "PDF24", desc: "全能免费PDF处理工具", url: "https://tools.pdf24.org", type: "工具", view: 512, like: 163 },
  { id: 39, name: "JSON.cn", desc: "JSON格式化与校验", url: "https://www.json.cn", type: "工具", view: 425, like: 129 },
  { id: 40, name: "ProcessOn", desc: "在线思维导图流程图", url: "https://www.processon.com", type: "工具", view: 586, like: 179 },
  {id: 41, name: "Kimi", desc: "AI长文档阅读PDF解析", url: "https://kimi.moonshot.cn", type: "AI工具", view: 824, like: 267 },
  { id: 42, name: "讯飞听见", desc: "AI语音转文字录音转写", url: "https://www.iflyrec.com", type: "AI工具", view: 463, like: 142 },
  { id: 43, name: "写作猫", desc: "AI文章校对改写润色", url: "https://xiezuocat.com", type: "AI工具", view: 395, like: 118 },
  { id: 44, name: "通义灵码", desc: "AI编程辅助自动补全", url: "https://lingma.aliyun.com", type: "AI工具", view: 542, like: 168 },
  { id: 45, name: "樱花动漫", desc: "新番旧番动漫在线看", url: "https://www.yhdm.wang", type: "动漫", view: 915, like: 296 },


  { id: 48, name: "Libvio", desc: "正版影视聚合平台", url: "https://www.libvio.me", type: "影视", view: 813, like: 264 },

  { id: 50, name: "liumingye", desc: "一个工具导航网站", url: "https://tools.liumingye.cn/music", type: "音乐", view: 694, like: 223 },
  { id: 51, name: "Steam", desc: "游戏平台", url: "https://store.steampowered.com", type: "游戏", view: 895, like: 291 },
  { id: 52, name: "4399小游戏", desc: "网页在线小游戏免安装", url: "https://www.4399.com", type: "游戏", view: 982, like: 321 },

  { id: 54, name: "中国大学MOOC", desc: "高校免费课程学习", url: "https://www.icourse163.org", type: "学习", view: 725, like: 238 },
  { id: 55, name: "力扣LeetCode", desc: "算法面试刷题平台", url: "https://leetcode.cn", type: "学习", view: 641, like: 204 },
  { id: 56, name: "慕课网", desc: "IT编程实战课程", url: "https://www.imooc.com", type: "学习", view: 593, like: 185 },


  { id: 59, name: "爱给网", desc: "音效视频素材免费下", url: "https://www.aigei.com", type: "资源", view: 532, like: 164 },
  { id: 60, name: "快递100", desc: "快递物流一键查询", url: "https://www.kuaidi100.com", type: "生活", view: 469, like: 147 },
  { id: 61, name: "天气网", desc: "全国天气预报查询", url: "https://www.tianqi.com", type: "生活", view: 418, like: 126 },
  { id: 62, name: "万年历", desc: "农历黄历节假日查询", url: "https://wannianli.tianqi.com", type: "生活", view: 385, like: 115 },
  { id: 63, name: "Deepl", desc: "精准多语种在线翻译", url: "https://www.deepl.com/translator", type: "工具", view: 753, like: 241 },

  { id: 65, name: "OCR文字识别", desc: "图片提取文字工具", url: "https://ocr.wdku.net", type: "工具", view: 517, like: 161 },
  { id: 66, name: "Canva", desc: "在线平面设计海报简历", url: "https://www.canva.com", type: "工具", view: 692, like: 226 },
  { id: 67, name: "Diffchecker", desc: "文本图片PDF对比工具", url: "https://www.diffchecker.com", type: "工具", view: 386, like: 121 },
  { id: 68, name: "Noisli", desc: "白噪音专注工作学习", url: "https://www.noisli.com", type: "工具", view: 415, like: 132 },
  { id: 69, name: "RainyMood", desc: "雨声白噪音专注神器", url: "https://www.rainymood.com", type: "工具", view: 394, like: 125 },
  { id: 70, name: "阿里图标库", desc: "免费矢量图标商用无忧", url: "https://www.iconfont.cn", type: "资源", view: 871, like: 287 },
  { id: 71, name: "Pexels", desc: "无版权高清图片视频", url: "https://www.pexels.com", type: "资源", view: 826, like: 269 },
  { id: 72, name: "Pixabay", desc: "免费可商用设计素材", url: "https://pixabay.com", type: "资源", view: 783, like: 254 },
  { id: 73, name: "石墨文档", desc: "在线协作文档表格", url: "https://shimo.im", type: "工具", view: 542, like: 172 },
  { id: 74, name: "Trello", desc: "轻量任务管理清单", url: "https://trello.com", type: "工具", view: 427, like: 136 },
  { id: 75, name: "7k7k", desc: "休闲小游戏在线玩", url: "https://www.7k7k.com", type: "游戏", view: 864, like: 281 },
  { id: 76, name: "Coursera", desc: "世界名校在线课程", url: "https://www.coursera.org", type: "学习", view: 653, like: 208 },
  { id: 77, name: "英语趣配音", desc: "英语口语练习工具", url: "https://www.qupeiyin.com", type: "学习", view: 436, like: 141 },
  { id: 78, name: "字体天下", desc: "免费可商用字体下载", url: "https://www.fonts.net.cn", type: "资源", view: 418, like: 133 },

  { id: 80, name: "BrowserFrame", desc: "网页生成设备边框截图", url: "https://browserframe.com", type: "工具", view: 317, like: 97 },
  { id: 81, name: "Carbon", desc: "代码生成精美图片", url: "https://carbon.now.sh", type: "工具", view: 589, like: 187 },
  { id: 82, name: "Unminify", desc: "代码格式化解压", url: "https://unminify.com", type: "工具", view: 421, like: 131 },
  { id: 83, name: "Favicon.io", desc: "免费图标生成下载", url: "https://favicon.io", type: "工具", view: 387, like: 122 },
  { id: 84, name: "123Apps", desc: "在线音视频编辑", url: "https://123apps.com", type: "工具", view: 518, like: 165 },
  { id: 85, name: "取文件", desc: "临时大文件传输", url: "https://quwenjian.cc", type: "工具", view: 467, like: 148 },
  { id: 86, name: "通义千问", desc: "阿里AI文案创作", url: "https://tongyi.aliyun.com", type: "AI工具", view: 896, like: 291 },
  { id: 87, name: "DeepSeek", desc: "免费AI对话助手", url: "https://www.deepseek.com", type: "AI工具", view: 912, like: 298 },








  { id: 96, name: "小鸡模拟器", desc: "怀旧游戏在线玩", url: "https://www.xiaoji001.com", type: "游戏", view: 789, like: 257 },
  { id: 97, name: "游戏攻略网", desc: "各类游戏攻略资讯", url: "https://www.3dmgame.com", type: "游戏", view: 654, like: 212 },
  { id: 98, name: "菜鸟教程", desc: "编程入门全教程", url: "https://www.runoob.com", type: "学习", view: 898, like: 292 },
  { id: 99, name: "MDN", desc: "Web开发权威文档", url: "https://developer.mozilla.org", type: "学习", view: 921, like: 301 },
  { id: 100, name: "牛客网", desc: "IT笔试面试题库", url: "https://www.nowcoder.com", type: "学习", view: 789, like: 257 },
  { id: 101, name: "免费简历", desc: "简历PPT模板免费", url: "https://www.jianli.com", type: "资源", view: 654, like: 212 },
  { id: 102, name: "UI Gradients", desc: "渐变色配色工具", url: "https://uigradients.com", type: "资源", view: 489, like: 158 },
  { id: 103, name: "Dribbble", desc: "全球设计灵感", url: "https://dribbble.com", type: "资源", view: 876, like: 285 },


  { id: 106, name: "Regex101", desc: "正则表达式测试", url: "https://regex101.com", type: "工具", view: 543, like: 175 },

  { id: 108, name: "掘金", desc: "前端技术干货", url: "https://juejin.cn", type: "学习", view: 876, like: 285 },
  { id: 109, name: "GitHub", desc: "全球代码托管", url: "https://github.com", type: "工具", view: 987, like: 321 },
  { id: 110, name: "Stack Overflow", desc: "程序员问答平台", url: "https://stackoverflow.com", type: "工具", view: 921, like: 301 },
  { id: 111, name: "Can I Use", desc: "前端兼容性查询", url: "https://caniuse.com", type: "工具", view: 876, like: 285 },
  { id: 112, name: "NiceTool", desc: "200+实用在线工具", url: "https://www.egouz.com", type: "工具", view: 789, like: 257 },
  { id: 113, name: "豆包", desc: "全能AI日常助理", url: "https://www.doubao.com", type: "AI工具", view: 987, like: 321 },

  { id: 115, name: "剪映在线版", desc: "在线视频剪辑", url: "https://www.capcut.cn", type: "工具", view: 876, like: 285 },
  { id: 116, name: "图床神器", desc: "免费图片托管", url: "https://imgchr.com", type: "工具", view: 654, like: 212 },

  { id: 118, name: "在线计算器", desc: "科学计算器全能版", url: "https://www.calculator.net", type: "工具", view: 487, like: 157 },
  { id: 119, name: "颜色拾取器", desc: "取色器色值转换", url: "https://htmlcolorcodes.com", type: "工具", view: 543, like: 175 },
  { id: 120, name: "IP查询", desc: "IP地址定位信息", url: "https://www.ip138.com", type: "工具", view: 612, like: 198 },
  { id: 121, name: "测速网", desc: "网速测试工具", url: "https://www.speedtest.cn", type: "工具", view: 587, like: 189 },
  { id: 122, name: "短网址还原", desc: "短链接解析", url: "https://tool.chinaz.com/shorturl/", type: "工具", view: 487, like: 157 },
  { id: 123, name: "二维码解码", desc: "图片二维码识别", url: "https://cli.im/deqr", type: "工具", view: 543, like: 175 },


  { id: 126, name: "视频转GIF", desc: "视频片段转GIF", url: "https://ezgif.com/video-to-gif", type: "工具", view: 654, like: 212 },
  { id: 127, name: "图片加水印", desc: "在线水印添加", url: "https://www.watermarkly.com", type: "工具", view: 543, like: 175 },
  { id: 128, name: "网页截图", desc: "整页截图工具", url: "https://www.url2png.com", type: "工具", view: 487, like: 157 },
  { id: 129, name: "时间戳转换", desc: "Unix时间戳工具", url: "https://tool.lu/timestamp", type: "工具", view: 587, like: 189 },
  { id: 130, name: "进制转换", desc: "二进制十六进制转换", url: "https://www.rapidtables.com/convert/number/index.html", type: "工具", view: 487, like: 157 },
  { id: 131, name: "ASCII艺术", desc: "文字转ASCII图案", url: "https://patorjk.com/software/taag", type: "工具", view: 421, like: 131 },


  { id: 134, name: "AI思维导图", desc: "AI生成思维导图", url: "https://www.boardmix.cn", type: "AI工具", view: 721, like: 235 },

  { id: 136, name: "AI换脸", desc: "图片视频换脸", url: "https://www.reface.ai", type: "AI工具", view: 789, like: 257 },
  { id: 137, name: "AI文案生成", desc: "电商文案创作", url: "https://www.yinxiang.com", type: "AI工具", view: 721, like: 235 },



  { id: 141, name: "哔哩哔哩漫画", desc: "正版漫画平台", url: "https://manhua.bilibili.com", type: "动漫", view: 921, like: 301 },
  { id: 142, name: "QQ音乐在线", desc: "高清音乐试听", url: "https://y.qq.com", type: "音乐", view: 876, like: 285 },
  { id: 143, name: "网易云音乐", desc: "音乐社区评论", url: "https://music.163.com", type: "音乐", view: 987, like: 321 },
  { id: 144, name: "Steam社区", desc: "游戏交流平台", url: "https://steamcommunity.com", type: "游戏", view: 876, like: 285 },
  { id: 145, name: "Epic游戏", desc: "免费游戏领取", url: "https://www.epicgames.com", type: "游戏", view: 921, like: 301 },
  { id: 146, name: "编程猫", desc: "少儿编程学习", url: "https://www.codemao.cn", type: "学习", view: 789, like: 257 },
  { id: 147, name: "扇贝单词", desc: "背单词工具", url: "https://www.shanbay.com", type: "学习", view: 721, like: 235 },
  { id: 148, name: "百词斩", desc: "图形化背单词", url: "https://www.baicizhan.com", type: "学习", view: 654, like: 212 },
  { id: 149, name: "懒人听书", desc: "有声书免费听", url: "https://www.lrts.me", type: "学习", view: 612, like: 198 },
  { id: 150, name: "得到", desc: "知识付费课程", url: "https://www.dedao.cn", type: "学习", view: 789, like: 257 },

  { id: 152, name: "书格", desc: "古籍善本资源", url: "https://www.shuge.org", type: "资源", view: 654, like: 212 },
  { id: 153, name: "知网研学", desc: "学术文献阅读", url: "https://x.cnki.net", type: "资源", view: 721, like: 235 },

  { id: 155, name: "Excel模板", desc: "表格模板下载", url: "https://www.excelhome.net", type: "资源", view: 587, like: 189 },



  { id: 159, name: "火车票查询", desc: "高铁票余票", url: "https://www.12306.cn", type: "生活", view: 921, like: 301 },
  { id: 160, name: "机票预订", desc: "低价机票查询", url: "https://www.fliggy.com", type: "生活", view: 876, like: 285 },
  { id: 161, name: "在线翻译", desc: "多语种翻译", url: "https://fanyi.baidu.com", type: "工具", view: 987, like: 321 },
  { id: 162, name: "词典网", desc: "汉语成语词典", url: "https://www.cidianwang.com", type: "工具", view: 721, like: 235 },

  { id: 164, name: "字符画生成", desc: "图片转字符画", url: "https://www.asciiart.eu", type: "工具", view: 487, like: 157 },

  { id: 166, name: "视频格式转换", desc: "在线视频转码", url: "https://www.freeconvert.com/video-converter", type: "工具", view: 612, like: 198 },


  { id: 169, name: "在线拼图", desc: "图片拼接工具", url: "https://www.piccollage.com", type: "工具", view: 487, like: 157 },
  { id: 170, name: "图片裁剪", desc: "在线图片裁剪", url: "https://www.simpleimageresizer.com", type: "工具", view: 421, like: 131 },
  { id: 171, name: "AI写诗", desc: "古诗词现代诗生成", url: "https://www.aishi.net", type: "AI工具", view: 654, like: 212 },
  { id: 172, name: "AI起名", desc: "宝宝公司起名", url: "https://www.qiming.com", type: "AI工具", view: 721, like: 235 },



  { id: 176, name: "短视频素材", desc: "无版权短视频", url: "https://www.vjshi.com", type: "资源", view: 876, like: 285 },
  { id: 177, name: "音效素材", desc: "免费音效下载", url: "https://www.soundeffectsplus.com", type: "资源", view: 721, like: 235 },


  { id: 180, name: "PPT素材", desc: "PPT素材下载", url: "https://www.51pptmoban.com", type: "资源", view: 612, like: 198 },




  { id: 185, name: "星座网", desc: "星座运势查询", url: "https://www.xingzuo.com", type: "生活", view: 612, like: 198 },

  { id: 187, name: "编程竞赛", desc: "算法竞赛平台", url: "https://www.acwing.com", type: "学习", view: 721, like: 235 },

  { id: 189, name: "创客贴", desc: "在线设计工具", url: "https://www.chuangkit.com", type: "工具", view: 876, like: 285 },
  { id: 190, name: "易企秀", desc: "H5制作工具", url: "https://www.eqxiu.com", type: "工具", view: 823, like: 268 },
  { id: 191, name: "金数据", desc: "在线表单制作", url: "https://jinshuju.net", type: "工具", view: 789, like: 257 },
  { id: 192, name: "问卷星", desc: "问卷调查工具", url: "https://www.wjx.cn", type: "工具", view: 921, like: 301 },
  { id: 193, name: "草料二维码活码", desc: "动态二维码制作", url: "https://cli.im/active", type: "工具", view: 721, like: 235 },
  { id: 194, name: "腾讯文档", desc: "在线协作文档", url: "https://docs.qq.com", type: "工具", view: 876, like: 285 },
  { id: 195, name: "金山文档", desc: "在线办公文档", url: "https://kdocs.cn", type: "工具", view: 921, like: 301 },
  { id: 196, name: "思维导图", desc: "XMind在线版", url: "https://ai.xmind.cn", type: "工具", view: 789, like: 257 },
  { id: 197, name: "在线画图", desc: "流程图UML制作", url: "https://www.draw.io", type: "工具", view: 721, like: 235 },
  { id: 198, name: "代码对比", desc: "代码差异对比", url: "https://www.diffchecker.com/code", type: "工具", view: 654, like: 212 },

  { id: 200, name: "在线终端", desc: "网页Linux终端", url: "https://www.teleconsole.com", type: "工具", view: 543, like: 175 }
];
