/* By Bravelee  Inspired by @LOO2K *****/

var CN_CEN  = {lng: 103.758427, lat: 36.172333},         // 中国中心
    TJ_NK  = {lng: 117.155046, lat: 39.144602},        // 天津南开
    HB_XT   = {lng: 114.506447,  lat: 36.861406},     // 河北邢台
    YN_KM   ={lng: 102.715187, lat: 25.065474},
    CN_BJ  = {lng: 116.65105, lat: 39.914314},         // 北京
    MP_MID  = {lng: 118.04651,  lat: 36.817265},         // 中点
    MUSIC,                                               // 背景音乐
    map;                                                 // 地图

function zoomTo(zoom, time, callback, point) {
    var time     = time || 1000;
    var callback = callback || function() {};
    var loop     = '';
    function loopZoom() {
        var curZoom  = map.getZoom();
        if( curZoom == zoom ) {
            clearTimeout(loop);
            callback();
            return false;
        }
        var plus    = curZoom > zoom ? -1 : 1;
        var toZoom  = curZoom + plus;
        map.setZoom(toZoom);
        if( point ) {
            map.setCenter(point);
        }
        loop = setTimeout(loopZoom, time);
    }
    loopZoom();
}

function loopWin(loopList, time, callback) {
    var i    = 0;
    var len  = loopList.length;
    var callback = callback || function () {};
    var timeout = '';

    function loopWinInner() {
        if( i == len ) {
            clearTimeout(timeout);
            setTimeout(callback, 1000);
            return false;
        }

        var opts = {
            title: loopList[i].title,
            maxWidth: 600,
            height: 0
        };
        var infoWindow = new BMap.InfoWindow(loopList[i].content, opts);
        map.openInfoWindow(infoWindow, new BMap.Point(loopList[i].point.lng, loopList[i].point.lat));
        infoWindow.redraw();
        i++;
        if( loopList[i] ) {
            time = loopList[i].timeout || 4000;
        } else {
            time = 4000;
        }
        timeout = setTimeout(loopWinInner, time);
    }

    loopWinInner();
}

function panZoom_QZU() {
    map.panTo(new BMap.Point(CN_BJ.lng, CN_BJ.lat));
    setTimeout(function() {
        zoomTo(17, 800, function() {
            var marker = new BMap.Marker(CN_BJ);
            map.addOverlay(marker);
            marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            setTimeout(panZoom_SDUT, 1000);
        }, CN_BJ);
    }, 800);
}

function panZoom_SDUT() {
    zoomTo(6, 1000, function() {
        map.panTo(new BMap.Point(HB_XT.lng, HB_XT.lat));
        setTimeout(function() {
            zoomTo(17, 800, function() {
                var marker = new BMap.Marker(HB_XT);
                map.addOverlay(marker);
                marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                setTimeout(panZoom_DIS, 1000);
            });
        }, 1000);
    });
}

function panZoom_DIS() {
    zoomTo(5, 1000, function() {
        map.panTo(new BMap.Point(MP_MID.lng, MP_MID.lat));
        setTimeout(function() {
            var start = new BMap.Point(CN_BJ.lng, CN_BJ.lat);
            var end   = new BMap.Point(HB_XT.lng, HB_XT.lat);
            var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: false}});
            driving2.search(start, end);
            setTimeout(function() {
                var between = [
                    {
                        title: '北京 → 邢台',
                        content: '381.7 km.',
                        point: HB_XT
                    },
                    {
                        title: '北京 → 邢台',
                        content: '2 hours by train G429.',
                        point: CN_BJ
                    },
                    {
                        title: '认识‘三多’已经4年了...居然发现合照一张：）',
                        content: '<img src="http://bravelee.u.qiniudn.com/sanduo_1-1.JPG" width="500px" height="551px" alt="1" />',
                        point: TJ_NK
                    },
                    {
                        title: '和‘老冀’成为基友已经3年了...',
                        content: '<img src="http://bravelee.u.qiniudn.com/sanduo_1-2.jpg" width="550px" height="332px" alt="2" />',
                        point: CN_BJ
                    },
                    {
                        title: '后来‘老冀’勾搭了‘三多’...',
                        content: '<img src="http://bravelee.u.qiniudn.com/sanduo_1-3.JPG" width="550px" height="367px" alt="3" />',
                        point: YN_KM
                    },
                    {
                        title: '我才明白我跟三多的友情、我和老冀的基情，终究抵不过他俩的爱（se）情：）',
                        content: '<img src="http://bravelee.u.qiniudn.com/sanduo_1-4.jpg" width="510px" height="307px" alt="4" />',
                        point: CN_BJ
                    }
                ];
                loopWin(between, 2000, showPhotos);
            }, 2000);
        }, 1000);
    });
}

function showPhotos() {
    map.clearOverlays();
    map.panTo(new BMap.Point(MP_MID.lng, MP_MID.lat));
    setTimeout(function() {
        zoomTo(5, 1000, function() {
            var photos = [
                {
                    title: '执子之手 与子偕老',
                    content: '',
                    point: MP_MID
                },
                {
                    title: '愿得一心人，白头不相离。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-1.jpg" width="550" height="440" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '身无彩凤双飞翼，心有灵犀一点通。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-2.jpg" width="550" height="367" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '衣带渐宽终不悔，为伊消得人憔悴。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-3.jpg" width="550" height="440" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '死生契阔，与子成说。执子之手，与子偕老。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-4.jpg" width="550" height="367" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '在天愿作比翼鸟，在地愿为连理枝。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-5.jpg" width="367" height="550" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '结发为夫妻，恩爱两不疑。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-6.jpg" width="367" height="550" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '天涯地角有穷时，只有相思无尽处。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-7.jpg" width="440" height="550" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '婚姻的真谛在于理解和包容，祝你们幸福！',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-8.jpg" width="550" height="367" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '珍惜彼此，温暖彼此，相爱永远。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-9.jpg" width="550" height="367" alt="love" />',
                    point: HB_XT
                },
                {
                    title: 'Being in love is easy, being married is not. It is to be cherished.',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-10.jpg" width="400" height="550" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '相守一生，无怨无悔',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-11.jpg" width="550" height="367" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '生命短暂，爱情永恒，有一个可以思念的人，就是幸福。',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-12.jpg" width="550" height="550" alt="love" />',
                    point: HB_XT
                },
                {
                    title: '只有最好的爱情，没有伟大的爱情，老冀、三多，祝幸福',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_2-13.jpg" width="550" height="388" alt="love" />',
                    point: HB_XT
                }
            ];
            loopWin(photos, 2500, happyBirthday);
        });
    }, 1000);
}

function happyBirthday() {
    map.closeInfoWindow();
    zoomTo(5, 1000, function() {
        map.panTo(new BMap.Point(MP_MID.lng, MP_MID.lat));
        // map.setMapType(BMAP_HYBRID_MAP);
        setTimeout(function() {
            var bless = [
                {
                    title: '',
                    content: '小伙伴们从地球各个角落都发来了贺电：',
                    point: MP_MID
                },
                {
                    title: 'Bravelee & King',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-1.jpg" width="550" height="510" alt="Wedding" />',
                    point: CN_BJ
                },
                {
                    title: 'Obama',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-2.jpg" width="550" height="375" alt="Wedding" />',
                    point: {lng: -101.052525, lat: 52.113595}
                },
                {
                    title: '杨幂',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-3.jpg" width="382" height="442" alt="Wedding" />',
                    point: CN_BJ
                },
                {
                    title: '成龙',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-4.jpg" width="424" height="470" alt="Wedding" />',
                    point: {lng: 114.170026, lat: 22.28342}
                },
                {
                    title: '生物界小伙伴',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-5.jpg" width="550" height="424" alt="Wedding" />',
                    point: {lng: 50.657217, lat: -75.205831}
                },
                {
                    title: '韩国MM',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-6.jpg" width="365" height="482" alt="Wedding" />',
                    point: {lng: 110.917562, lat: 64.438852}
                },
                {
                    title: '王子和公主',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-77.jpg" width="450" height="397" alt="Wedding" />',
                    point: {lng: 17.549373, lat: 49.27114}
                },
                {
                    title: '老俞',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-8.jpg" width="323" height="380" alt="Wedding" />',
                    point: CN_BJ
                },
                {
                    title: '黄渤等',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-9.jpg" width="550" height="326" alt="Wedding" />',
                    point: {lng: 120.388452, lat: 36.072782}
                },
                {
                    title: '科比',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-10.jpg" width="550" height="369" alt="Wedding" />',
                    point: {lng: -101.052525, lat: 52.113595}
                },
                {
                    title: '加菲猫',
                    content: '<img src="http://bravelee.u.qiniudn.com/sanduo_3-111.jpg" width="450" height="398" alt="Wedding" />',
                    point: {lng: 139.760551, lat: 35.735261}
                }
            ];
        loopWin(bless, 1000, slideDown);
        }, 1000);
    });
}

function slideDown() {
    $('#theEnd').animate({height: '100%'}, 5000);
}

function preLoadImages(imagesList, callback) {
    var len     = imagesList.length;
    var i       = 0;
    var images  = {};
    var callback = callback || function() {};
    function loadImage() {
        if( i == len ) {
            callback();
            return false;
        }
        images[i]           = new Image();
        images[i].src       = imagesList[i];
        i++;
        loadImage();
    }
    loadImage();
}

function initMap() {
    map = new BMap.Map("map");
    var point = new BMap.Point(CN_CEN.lng, CN_CEN.lat);
    map.centerAndZoom(point, 4);
    map.disableDragging();
    map.disableDoubleClickZoom();
    init();
}

function init() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('theEnd').style.height = '0';
    map.setMapType(BMAP_NORMAL_MAP);
    var point = new BMap.Point(CN_CEN.lng, CN_CEN.lat);
    map.centerAndZoom(point, 8);
    map.clearOverlays();
    map.reset();
    MUSIC.play();
    map.panTo(new BMap.Point(CN_BJ.lng, CN_BJ.lat));
    panZoom_QZU();
}
 
function loadScript() {
  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/api?v=1.2&callback=initMap";
  document.body.appendChild(script);
}

window.onload = function() {
    var imglist = [
        'http://happybirthday520.qiniudn.com/images/between/mailer.png',
        'http://happybirthday520.qiniudn.com/images/between/medicine.jpg',
        'http://happybirthday520.qiniudn.com/images/between/letter.png',
        'http://happybirthday520.qiniudn.com/images/between/fly.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-1.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-2.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-3.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-4.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-5.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-6.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-7.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-8.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-9.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-10.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-11.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-12.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_2-13.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-1.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-2.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-3.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-4.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-5.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-6.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-77.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-8.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-9.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-10.jpg',
        'http://bravelee.u.qiniudn.com/sanduo_3-111.jpg'
    ];

    soundManager.setup({
        url: './',
        onready: initMP3
    });
    
    function initMP3() {

        MUSIC = soundManager.createSound({
            id: 'mp3',
            url: 'http://bravelee.u.qiniudn.com/sanduo_1413.mp3',
            onload: function() {
                preLoadImages(imglist, function() {
                    setTimeout(function() {
                        var loading = document.getElementById('loading');
                        loading.style.cursor = 'pointer';
                        loading.innerHTML = 'Click to Start';
                        loading.onclick = function() {
                            screenfull && screenfull.request();
                            loadScript();
                        };
                    }, 3000);
                });
            }
        });
        MUSIC.load();
    }
};