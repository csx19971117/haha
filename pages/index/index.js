// pages/index/index.js
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

        if (scrollTop >= 200) {
            show = 'show';
        }
        this.setData({ show });
    }
})