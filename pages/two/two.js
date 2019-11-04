// pages/two/two.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lists: [{
                img: "https://img10.360buyimg.com/n2/s240x240_jfs/t1/36958/36/4356/152596/5cbd6760Efa28252f/7feca13b43181046.jpg!q70.jpg",
                text: "夜长梦还多你就不要想起我你就不要想起我",
                rmb: '￥9068',
                where: '北京顺义区自营店'
            },
            {
                img: "https://img10.360buyimg.com/n2/s240x240_jfs/t1/97442/23/1195/291479/5dbba247E1f3a206a/56e98d8c5665c42a.jpg!q70.jpg",
                text: "没答案怎么办看不惯自我期满惯自我期满",
                rmb: '￥5635',
                where: '北京朝阳自营店'
            },
            {
                img: "https://img11.360buyimg.com/n2/s240x240_jfs/t1/68714/40/14069/186070/5dba4f7aE3e0bb97d/e40a05686affcf52.jpg!q70.jpg",
                text: "纵容着任性的随意的太死板随意的太死板",
                rmb: '￥3543',
                where: '深圳自营店'
            },
            {
                img: "https://img13.360buyimg.com/mobilecms/s316x316_jfs/t11713/71/1628008166/645304/10748f34/5a056330N6ece1a4e.jpg!q70.dpg.webp",
                text: "不应该想起了死心了大飒飒死心了大飒飒",
                rmb: '￥5233',
                where: '辽宁沈阳自营店'
            },
            {
                img: "https://img13.360buyimg.com/evalpic/s240x240_jfs/t1/62839/3/13499/188438/5dabf7ddE530d6765/9f010f1fb1b49e16.jpg",
                text: "超值物品一件绝对优惠低价出售低价出售",
                rmb: '￥8992',
                where: '河北石家庄自营店'
            },
            {
                img: "https://img10.360buyimg.com/mobilecms/s316x316_jfs/t1/78123/9/14262/195988/5dbaf17cE883bc7fd/6e3b791aee8cf5d1.jpg!q70.dpg.webp",
                text: "人生亦旅行，我亦似行人,我亦似行人",
                rmb: '￥10265',
                where: '黑龙江哈尔滨自营店'
            }
        ],
        pinglun: [{
                name: 'chensixu',
                text: '图片上的一样，包包有点大，出去玩背着太合适不过，雨伞平板都能装得下，也很适合宝妈哦，面料材质都很好，做工细致，信奈京东',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/34147/4/13225/78420/5d10b8bbEb2339268/e3760cc4141ad356.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/58632/13/2776/81775/5d10b8bcEc6c6c069/6033769949d2c8ac.jpg!cc_100x100!q70.dpg.webp'
            }, {
                name: '曹操',
                text: '包包很漂亮，买来出去玩给孩子装东西用的，刚好不大不小，五金配件质量也不错，拉链很好拉，里面还有分层装东西方便找，买东西要选好的品牌，好的平台，京东一直信赖，稻草人不错，会一直支持的',
                img: 'https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/75fedd36218427263149465601/imageSampleSnapshot/1566813140_46456810.100_930.jpg',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/53275/37/8874/159387/5d63ac06E64079f30/fd69e816a04695ef.jpg!cc_100x100!q70.dpg.webp'
            }, {
                name: '诸葛亮',
                text: '特别完美，包很轻，我一直在找一个包没有那么笨势太大，还能装下我这个文件夹的，挑来挑去，这款相当完美。通过微信京东购买还减了*块钱，完美完美。',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t14647/62/1991599298/128488/3f05229c/5a657f97N0527bd30.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t12970/225/2634963328/132079/74c0c4d1/5a657f97Nba119634.jpg!cc_100x100!q70.dpg.webp'
            }, {
                name: '孙权',
                text: '背包质量很好，大小合适，要是里面的夹层多点就完美了。买前看了半天评论，很多人都说里面要是多个拉链内袋就好了。果真如此。',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t15286/276/2033960324/113623/e4fa843d/5a657f98Ne22f6472.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t18094/298/231915586/105572/2c4479a5/5a657f95Nc27155ac.jpg!cc_100x100!q70.dpg.webp'
            }, {
                name: '周瑜',
                text: '非常满意的一款包包，质量也不错，买来装宝宝出行的衣服，空间大能装很多东西，很满意，邻居也说好看，都来要链接。',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t16516/227/1789923891/132865/f1c8aca6/5a657f9aN9909e729.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t14605/29/1970789734/150083/8c035735/5a657f97N25b573ad.jpg!cc_100x100!q70.dpg.webp'
            }, {
                name: '吕布不爱貂蝉',
                text: '非常不错！也没有很大异味，物流速度很快。感觉实物比照片上的要稍微矮胖一点，但也能装下很多东西。拿了一本五三做对比(•ω•)',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t14824/131/2001262369/100899/cbf26cc8/5a657f9cNe28afb90.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/31150/39/1265/81007/5c4a5ab7Ee99c4533/1eb830afd7d38fec.jpg!cc_100x100!q70.dpg.webp'
            },
            {
                name: '刘禅',
                text: '非常不错！也没有很大异味，物流速度很快。感觉实物比照片上的要稍微矮胖一点，但也能装下很多东西。拿了一本五三做对比(•ω•)',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t14824/131/2001262369/100899/cbf26cc8/5a657f9cNe28afb90.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/31150/39/1265/81007/5c4a5ab7Ee99c4533/1eb830afd7d38fec.jpg!cc_100x100!q70.dpg.webp'
            },
            {
                name: '吕布不爱貂蝉',
                text: '非常不错！也没有很大异味，物流速度很快。感觉实物比照片上的要稍微矮胖一点，但也能装下很多东西。拿了一本五三做对比(•ω•)',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t14824/131/2001262369/100899/cbf26cc8/5a657f9cNe28afb90.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/31150/39/1265/81007/5c4a5ab7Ee99c4533/1eb830afd7d38fec.jpg!cc_100x100!q70.dpg.webp'
            },
            {
                name: '吕布不爱貂蝉',
                text: '非常不错！也没有很大异味，物流速度很快。感觉实物比照片上的要稍微矮胖一点，但也能装下很多东西。拿了一本五三做对比(•ω•)',
                img: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t14824/131/2001262369/100899/cbf26cc8/5a657f9cNe28afb90.jpg!cc_100x100!q70.dpg.webp',
                img2: 'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/31150/39/1265/81007/5c4a5ab7Ee99c4533/1eb830afd7d38fec.jpg!cc_100x100!q70.dpg.webp'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    goHome() {
        this.setData({ topNum: 0 })
    },
    scroll(evt) {
        let scrollTop = evt.detail.scrollTop;
        let show = 'hide';

        if (scrollTop >= 300) {
            show = 'show';
        }
        this.setData({ show });
    },
    onShareAppMessage() {
        return {
            title: '夜长梦还多你就不要想起我你就不要想起我',
            imageUrl: 'https://img10.360buyimg.com/n2/s240x240_jfs/t1/36958/36/4356/152596/5cbd6760Efa28252f/7feca13b43181046.jpg!q70.jpg',
            path: '/pages/two/two'
        }
    }


})