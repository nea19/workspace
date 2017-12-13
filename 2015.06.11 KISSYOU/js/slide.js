;(function($){
    var isclicked=false,
        musicFlag = true;

    $(".square").height(function(){
        return $(this).width();
    })
    //music
    $("#music").click(function(event) {
        var bgaudio = $("#bgaudio")[0];
        $(this).toggleClass("music-roll")
            .siblings().toggleClass("heart-propagation");
        if($(this).hasClass("music-roll")){
            bgaudio.play();
            musicFlag = true;
        }else{
            bgaudio.pause();
            musicFlag = false;
        }
    });


    function sectionAnimate0(){
        setInterval(function(){
            var $fore1 = $(".fore1"),
                index = $(".loading:visible",$fore1).length;
            if(index === 8){
                $(".loading",$fore1).hide();
            }else{
                $(".loading:eq("+index+")",$fore1).css("display","inline-block");
            }
        },500);

        var $audio1 = $("#bgaudio");
        $audio1.attr("src","bgmusic.wav").on("canplaythrough",function(){
            $audio1[0].play();
            swiper.activeIndex=1;
            swiper.slideTo(1, 500, false);
            setTimeout(function(){
                sectionAnimate1();
            },500);
        })[0].load();
    }
    function sectionAnimate1(){
        $(".kiss-text").animate({opacity:1},2000)
        var w=$(window).width();
        var h=$(window).height();
        var row=Math.ceil(h/80);
        var col=Math.ceil(w/100);
        var arrKiss=[];
        var arrKiss2=[];
        var len=0;
        for(var i=0;i<row;i++){
            for(var j=0;j<col;j++){
                arrKiss.push({left:100*j-30,top:80*i-20})
            }
        }
        len=arrKiss.length;
        for(var i=0;i<len;i++){
            var n=parseInt(Math.random()*arrKiss.length);
            arrKiss2.push(arrKiss[n]);
            arrKiss.splice(n,1);
        }
        function randomKiss(left,top){
            var n=parseInt(Math.random()*3)+2;
            var deg=parseInt(Math.random()*120)-60;
            var opa=(parseInt(Math.random()*5)+5)/10;
            var $kiss=$('<div class="kiss kiss-'+n+'"></div>')
            $kiss.css({
                "opacity":opa,
                "left":left+"px",
                "top":top+"px",
                "transform": "rotate("+deg+"deg)",
                "-ms-transform":"rotate("+deg+"deg)",
                "-moz-transform": "rotate("+deg+"deg)",
                "-webkit-transform": "rotate("+deg+"deg)",
                "-o-transform": "rotate("+deg+"deg)"
            });
            $(".fore2").append($kiss);
            $kiss.animate({opacity:1});
        }
        $(".fore2").click(function(){
            if(isclicked==true){
                return;
            }
            musicFlag && $("#kissesaudio")[0].play();
            isclicked=true;
            var kissNum=0;
            var t1=50;
            $(".fore2").css("background","#c91623");
            $(".tap-tip").hide();
            var timer=setInterval(function(){
                kissNum++;
                if(kissNum==5){
                    $(".kiss-text img").attr("src","skin/i/kiss-text-2.png");
                }
                else if(kissNum==parseInt(arrKiss2.length*2/3)){
                    $(".kiss-text").css("opacity",0).animate({opacity:1},1500);
                    $(".kiss-text img").attr("src","skin/i/kiss-text-3.png");
                }
                t1=1/kissNum*50;
                if(kissNum<arrKiss2.length)
                {
                    randomKiss(arrKiss2[kissNum].left,arrKiss2[kissNum].top);
                }
                else{
                    clearInterval(timer);
                    $(".kiss").css("background","none");
                    $(".kiss-text").addClass("flash");
                    setTimeout(function(){
                        $(".kiss-text").css({
                            "transform": "scale3d(0.8,0.8,1) rotate(-10deg) translate(0,-30px)",
                            "-webkit-transform": "scale3d(0.8,0.8,1) rotate(-10deg) translate(0,-30px)",
                            "-webkit-transition": "all ease-out 0.2s",
                            "transition": "all ease-out 0.2s"
                        });
                    },1000);
                    setTimeout(function(){
                        $(".it-text").css("visibility","visible").addClass("tada");
                    },1800)
                    setTimeout(function(){
                        //$(".it-text-shadow").animate({opacity:1},500);
                        $(".kiss-blue").animate({opacity:1},1500);
                    },3300)
                }
            },t1)
        })
    }
    function sectionAnimate4(){
        $(".run-man1").addClass("runningman");
        setTimeout(function(){
            $("#run-man1").removeClass("runningman").addClass("run-man2 opacityIn");
            $("#arm").addClass("opacityIn");
            setTimeout(function(){
                $("#arm").removeClass("opacityIn").addClass("armmove");
                //$("#run-encourage").addClass("opacityIn");
                $("#run-type1").removeClass("hide").addClass("scaleZ");
                setTimeout(function(){
                    $("#run-type2").removeClass("hide").addClass("scaleZ");
                    setTimeout(function(){
                        $("#run-type3").removeClass("hide").addClass("scaleZ");
                        setTimeout(function(){
                            $("#run-type4").removeClass("hide").addClass("scaleZ");
                        },500);
                    },500);
                },500);
            },1000);
        },1000);

        $(".run-type").bind('touchstart', function(event) {
            $(this).addClass($(this).attr("id")+"-active");
        }).bind('touchend', function(event) {
            $(this).removeClass($(this).attr("id")+"-active");
        });
        $(".run-type").on('tap', function(event) {
            var idx=$(".run-type").index($(this));
            $(".line-w").css("display","none").eq(idx).css("display","block");
            swiper.activeIndex=3;
            swiper.slideTo(3, 500, false);
            setTimeout(function(){
                sectionAnimate6();
            },500);
        });
    }
    function sectionAnimate6(){
        $(".change-w").addClass("flipInY")
        /*箭头闪烁是禁止点击遮罩*/
        $('.sad-w').css({
            height: $(window).height()
        });
        /*亲吻弹层*/
        $('.sad-popup').css({
            height: $(window).height()
        });
        /*吻ta箭头动画*/
        setTimeout(function(){
            $('.sad-point').eq(0).addClass('sad-flash');
            setTimeout(function(){
                $('.sad-point').eq(1).addClass('sad-flash');
                setTimeout(function(){
                    $('.sad-point').eq(2).addClass('sad-flash');
                    $('.sad-w').hide();
                    setTimeout(function(){
                        $('.sad-point').eq(3).addClass('sad-flash');
                        $('.sad-w').hide();
                    },1000);
                },1000);
            },1000);
        },1000);

        /*点击人物*/
        $('.sad ul li p').bind('click', function(event) {
            if($(this).hasClass('hadClick')){
                return;
            }
            $(this).addClass('hadClick');
            $(this).children('.sad-kiss').show(); 
            /*$('.sad-swing-hide').removeClass();*/
            $(this).find('.sad-swing-hide').removeClass();
            musicFlag && $("#kissaudio")[0].play();
            setTimeout(function(){
               $('.sad-popup').show();
                /*弹窗动画*/
                setTimeout(function(){
                    $('.sp-people').show();
                    $('.sp-people').addClass('happy-tada');
                    setTimeout(function(){
                        $('.sp-skin01,.sp-del,.sp-txt').show();
                        $('.sp-skin01,.sp-del,.sp-txt').addClass('happy-fadeIn');
                        setTimeout(function(){
                            $('.happy-point').show();
                            $('.happy-point').addClass('happy-bounceInLeft');
                        },500);
                    },1000);
                },1000); 
            },800);

        });
        /*弹层关闭按钮*/
        $('.sp-del,.hg-del').bind('click', function(event) {
            $('.sad-popup').hide();
        });
        /*换一批吻*/
        var changeAttr=[];
        $('.change').bind('click', function(event) {
            changeAttr = [];
            for (var i = 0; i < 4; i++) {
                var changeNum=parseInt(Math.random()*10);
                if(!findNum(changeNum,changeAttr)){
                    changeAttr.push(changeNum);
                }else{
                    i--;
                }
            }
            $('.sad-cover img').each(function(index) {
                $('.sad-cover img').eq(index).attr("src","skin/i/sad0"+changeAttr[index]+"-cover.png");
            });
           
        });
        function findNum(num,arr){
            for(var i = 0;i<arr.length;i++){
                if(num == arr[i]){
                    return true;
                }
            }
            return false;
        }
    }

    $(".common-wrapper").css("height",$(window).height());
    sectionAnimate0();
    var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        autoplay: false,
        autoplayDisableOnInteraction: false,
        loop:false,
        threshold :20,
        direction:"vertical",
        onSlideChangeEnd: function(swiper){
            switch(swiper.activeIndex){
                case 1:
                    sectionAnimate1();
                    swiper.unlockSwipeToNext();
                    break;
                case 2:
                    sectionAnimate4();
                    swiper.unlockSwipeToNext();
                    break;
                case 3:
                    sectionAnimate6();
                    swiper.lockSwipeToNext();
                    break;
            }
            
        }
    });


        // 微信分享事件绑定
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": "http://img12.360buyimg.com/cms/s640x960_jfs/t1021/260/561159989/47244/d897e499/5530714eN4ad9b67f.png",
                "img_width": "640",
                "img_height": "640",
                "link": window.location.href,
                "desc": "这个618你被保养了",
                "title": "这个618你被保养了！亲肿了算我的"
            }, function (res) {
                _report('send_msg', res.err_msg);
            })
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": "http://img12.360buyimg.com/cms/s640x960_jfs/t1021/260/561159989/47244/d897e499/5530714eN4ad9b67f.png",
                "img_width": "640",
                "img_height": "640",
                "link": window.location.href,
                "desc": "这个618你被保养了",
                "title": "这个618你被保养了！亲肿了算我的"
            }, function (res) {
                _report('timeline', res.err_msg);
            });
        });
    }, false)
})(Zepto);

        
