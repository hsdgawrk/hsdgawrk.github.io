const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
        {
            name: '朝汐',
            artist: '泠鸢yousa，双笙',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E6%98%9F%E7%81%AB%E8%A1%8C%E5%8A%A8%E3%80%91%E6%9C%9D%E6%B1%90%E3%80%90%E6%B3%A0%E9%B8%A2&amp%EF%BC%9B%E5%8F%8C%E7%AC%99%E3%80%91-Chaoxi_Full%20%E6%9C%80%E7%BB%88%E7%89%88%5B%E8%B6%85%E6%B8%85%E7%89%88%5D.mp3',
            cover: 'https://i0.hdslb.com/bfs/archive/8567fec72badcd1d42f3e11c4d6b1f7da90b5553.jpg',
        },
        {
            name: '春意红包',
            artist: '三无MarBlue,祖娅纳惜,泠鸢yousa',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/%E4%B8%89%E6%97%A0MarBlue,%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C,%E6%B3%A0%E9%B8%A2yousa%20-%20%E6%98%A5%E6%84%8F%E7%BA%A2%E5%8C%85.mp3',
            cover: 'https://p1.music.126.net/TVOFJLTlo7o1hOPewr5NwA==/109951162857898547.jpg',
        },
        {
            name: "君が好きだと叫びたい／好想大声说爱你（Cover BAAD）",
            artist: '茶理理',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/%E8%8C%B6%E7%90%86%E7%90%86%20-%20%E5%90%9B%E3%81%8C%E5%A5%BD%E3%81%8D%E3%81%A0%E3%81%A8%E5%8F%AB%E3%81%B3%E3%81%9F%E3%81%84%EF%BC%8F%E5%A5%BD%E6%83%B3%E5%A4%A7%E5%A3%B0%E8%AF%B4%E7%88%B1%E4%BD%A0%EF%BC%88Cover%20BAAD%EF%BC%89.mp3',
            cover: 'http://p2.music.126.net/_Q88InYyHiqryCbGw_jQlA==/109951163464349418.jpg',
        },
        {
            name: 'Lemon（Cover 米津玄師）',
            artist: '茶理理,人形兎',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/%E8%8C%B6%E7%90%86%E7%90%86,%E4%BA%BA%E5%BD%A2%E5%85%8E%20-%20Lemon%EF%BC%88Cover%20%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%EF%BC%89.mp3',
            cover: 'http://p2.music.126.net/6FG8ZczNpS3Ec_u2tit6MA==/109951163358943073.jpg',
        },
        {
            name: '多情岸【忘川风华录】（Cover 忘川风华录）',
            artist: '泠鸢yousa',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/%E6%B3%A0%E9%B8%A2yousa%20-%20%E3%80%90%E6%B3%A0%E9%B8%A2%E3%80%91%E5%A4%9A%E6%83%85%E5%B2%B8%E3%80%90%E5%BF%98%E5%B7%9D%E9%A3%8E%E5%8D%8E%E5%BD%95%E3%80%91%EF%BC%88Cover%20%E5%BF%98%E5%B7%9D%E9%A3%8E%E5%8D%8E%E5%BD%95%EF%BC%89.mp3',
            cover: 'https://p2.music.126.net/1bq_2MKtHKlFJgUgyLAkmw==/109951163387084057.jpg',
        },
        {
            name: 'Fall In Love（Cover 葵井歌菜）',
            artist: '泠鸢yousa',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/%E6%B3%A0%E9%B8%A2yousa%20-%20Fall%20In%20Love%EF%BC%88Cover%20%E8%91%B5%E4%BA%95%E6%AD%8C%E8%8F%9C%EF%BC%89.mp3',
            cover: 'https://p2.music.126.net/dxyUFufwkUh1TQQufkLqtw==/109951163452240678.jpg',
        },
        {
            name: '怀梦之泽',
            artist: '泠鸢yousa,银临',
            url: 'http://pfwddfxnm.bkt.clouddn.com/music/%E6%B3%A0%E9%B8%A2yousa,%E9%93%B6%E4%B8%B4%20-%20%E6%80%80%E6%A2%A6%E4%B9%8B%E6%B3%BD.mp3',
            cover: 'https://p1.music.126.net/6b_OrWggmiepJV1LGPwFWg==/109951163424531701.jpg',
        }
    ]
});