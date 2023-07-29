//微信公众号【云星日记】制作分享
//微信公众号【云星测评】制作分享

//QQ频道搜索云星日记加入频道交流
//关注公众号回复【接口】获取在线接口
//关注公众号回复【本地接口】获取本地接口
//保存外链网址实时在线更新

//直接把在线网址外链输入TvBox就可以同步更新
//打造属于自己的app，请看下面微信公号文章链接
//TvBox生成项目打包教程：https://mp.weixin.qq.com/s/FDa4OSDwHemy8uDyhn-1UQ
//TVBox在线接口地址：https://mp.weixin.qq.com/s/uCipLSKxHvEdwKpIaQTFlw


{
"spider":"./bili.jar",
//"spider":"http://maoyingshi.cc/tvbox/云星日记/jar/bili.jar",




"sites":[
{"key":"MV_vod","name":"MTV","type":1,"api":"https://tvbox-mv--leosam2048.repl.co/mv/vod","playerType":"1"},
{"key":"我的哔哩","name":"我的哔哩🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/我的哔哩.js"},
{"key":"哔哩影视","name":"哔哩影视🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/哔哩影视.js"},
{"key":"哔哩直播","name":"🛤哔哩直播","type":3,"api":"./lib/drpy2.min.js","ext":"./js/哔哩直播.js"},
{"key": "Bili","name": "🅱️哔哩套餐〔SP〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/哔哩.json"},
{"key": "学堂","name": "🏯学堂教育〔合集〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/学堂.json"},
{"key": "演唱会","name": "🍟演唱会〔合集〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/演唱会.json"},
{"key": "戏曲","name": "📽戏曲〔合集〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/戏曲.json"},
{"key": "美食","name": " 🍲美食〔合集〕","type": 3,"api": "csp_Bili","searchable": 0,"quickSearch": 0,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/美食.json"},
{"key": "少儿","name": "🅰️少儿〔合集〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/少儿教育.json"},
{"key": "体育","name": "💋体育〔合集〕","type": 3,"api": "csp_Bili","searchable": 0,"quickSearch": 0,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/体育.json"},
{"key": "球类","name": "⚽️球类〔合集〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/球类.json"},
{"key": "棋牌","name": " 🅿️棋牌娱乐〔合集〕","type": 3,"api": "csp_Bili","searchable": 0,"quickSearch": 0,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/棋牌.json"},
{"key": "MV","name": "💽歌曲MV〔合集〕","type": 3,"api": "csp_Bili","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/歌曲MV.json"},
{"key": "软件","name": "📚软件教程","type": 3,"api": "csp_Bili","searchable": 0,"quickSearch": 0,"filterable": 1,"ext": "https://raw.githubusercontent.com/sqspot/tac/main/MeowXB/软件教程.json"}

//{"key":"说明","name":"------公众号【云星日记】------","type":3,"api":"360","searchable":1,"quickSearch":1,"filterable":1},
//{"key":"说明2","name":"------提供免费更新维护------","type":3,"api":"360","searchable":1,"quickSearch":1,"filterable":1},
//{"key": "M","name": "(新增哔哩bli套餐内容请到： 云星日记 频道反馈）","type": 3,"api": "csp_Bili","searchable": 0,"quickSearch": 0,"filterable": 1,"ext": "/"}
],
"rules": [ 
{"host":"*", "rule":["douyinvod.com", "/video/tos/cn/"]}, 
{"host":"*", "rule":["default.365yg.com", "/video/tos/cn/"]}, 
{"host":"*","rule":["ysting.ysxs8.vip","m4a"]},
{"host":"*", "rule":["/m3u8.php?path=", ".m3u8"]}, 
{"host":"*", "rule":["/API.php?time=", "key=", "path=", ".m3u8"]}, 
{"host":"*", "rule":["oss-cn-m3u8", "myqcloud.com.zh188.net", "?url=", ".m3u8"]}, 
{"host":"*", "rule":["iesdouyin.com/aweme", "video_id="]},
{"host":"*", "rule":["douyin.com/aweme", "video_id="]},
{"host":"*", "rule":["huoshan.com", "/item/video/"]}, 
{"host":"*", "rule":["http((?!http).){12,}?\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)\\?.*"]}, 
{"host":"*", "rule":["http((?!http).){12,}\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)"]},
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".m3u8"]}, 
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".mp4"]}, 
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".mkv"]}, 
{"host":"www.007ts.me", "rule":["hls.pchj.net", ".m3u8"]},
{"host":"www.agemys.cc","rule":["cdn-tos","obj/tos-cn"]},
{"host":"zjmiao.com","rule":["play.videomiao.vip/API.php","time="]},
{"host":"www.djuu.com","rule":["mp4.djuu.com","m4a"]},
{"host":"www.sharenice.net","rule":["huoshan.com","/item/video/"],"filter":[]},
{"host":"www.sharenice.net","rule":["sovv.qianpailive.com","vid="],"filter":[]},
{"host":"www.sharenice.net","rule":["douyin.com","/play/"]},
{"host":"m.ysxs8.vip","rule":["ysting.ysxs8.vip:81","xmcdn.com"],"filter":[]},
{"host":"hdmoli.com","rule":[".m3u8"]},
{"host":"https://api.live.bilibili.com","rule":["bilivideo.com","/index.m3u8"],"filter":["data.bilibili.com/log/web","i0.hdslb.com/bfs/live/"]},
{"host":"www.agemys.cc","rule":["cdn-tos","obj/tos-cn"]},
{"host":"www.fun4k.com","rule":["https://hd.ijycnd.com/play","index.m3u8"]},
{"host":"zjmiao.com","rule":["play.videomiao.vip/API.php","time=","key=","path="]}
],
"parses":[
{"name":"懒懒","type":1,"url":"http://lanlan.ckflv.cn/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"猫爪1","type":0,"url":"https://jx.zhanlangbu.com/?url="},
{"name":"ok","type":0,"url":"https://okjx.cc/?url="},
{"name":"bozrc","type":0,"url":"https://jx.bozrc.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","leshi","LS","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":""}}},
{"name":"不累","type":0,"url":"https://blbfq.f3322.net/player/analysis.php?v=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"cod","type":0,"url":"https://ksksl.codjx.com/?url="},
{"name":"byg解析","type":0,"url":"https://byg.ziqj5.shop/?url="},
{"name":"xmflv","type":0,"url":"https://jx.xmflv.com/?url="},
{"name":"365","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"26db","type":0,"url":"http://vip.26db.cn/g/?url="},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"FreeOK","type":0,"url":"https://play.86516.tk/OKPlayer/?url="},
{"name":"free","type":0,"url":"https://h5.freejson.xyz/player/?url="}],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",
    "ads": [
        "vip.ffzyad.com",
        "https://lf1-cdn-tos.bytegoofy.com/obj/tos-cn-i-dy/455ccf9e8ae744378118e4bd289288dd",
        "mimg.0c1q0l.cn",
        "www.googletagmanager.com",
        "www.google-analytics.com",
        "mc.usihnbcq.cn",
        "mg.g1mm3d.cn",
        "mscs.svaeuzh.cn",
        "cnzz.hhttm.top",
        "tp.vinuxhome.com",
        "cnzz.mmstat.com",
        "www.baihuillq.com",
        "s23.cnzz.com",
        "z3.cnzz.com",
        "c.cnzz.com",
        "stj.v1vo.top",
        "z12.cnzz.com",
        "img.mosflower.cn",
        "tips.gamevvip.com",
        "ehwe.yhdtns.com",
        "xdn.cqqc3.com",
        "www.jixunkyy.cn",
        "sp.chemacid.cn",
        "hm.baidu.com",
        "s9.cnzz.com",
        "z6.cnzz.com",
        "um.cavuc.com",
        "mav.mavuz.com",
        "wofwk.aoidf3.com",
        "z5.cnzz.com",
        "xc.hubeijieshikj.cn",
        "tj.tianwenhu.com",
        "xg.gars57.cn",
        "k.jinxiuzhilv.com",
        "cdn.bootcss.com",
        "ppl.xunzhuo123.com",
        "xomk.jiangjunmh.top",
        "img.xunzhuo123.com",
        "z1.cnzz.com",
        "s13.cnzz.com",
        "xg.huataisangao.cn",
        "z7.cnzz.com",
        "xg.huataisangao.cn",
        "z2.cnzz.com",
        "s96.cnzz.com",
        "q11.cnzz.com",
        "thy.dacedsfa.cn",
        "xg.whsbpw.cn",
        "s19.cnzz.com",
        "z8.cnzz.com",
        "s4.cnzz.com",
        "f5w.as12df.top",
        "ae01.alicdn.com",
        "www.92424.cn",
        "k.wudejia.com",
        "vivovip.mmszxc.top",
        "qiu.xixiqiu.com",
        "cdnjs.hnfenxun.com",
        "cms.qdwght.com"
    ]
}