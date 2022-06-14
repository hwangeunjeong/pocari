$(document).ready(function () {
    /* 주메뉴 */
    $(".menu_toggle_btn").click(function () {
        $(this).toggleClass("menu-open");
        $(".allmenu").slideToggle("fast");

    });

    /* 서브메뉴 */
    $(".submenu>li").hover(function () {
        $(this).find(">ul").stop().slideDown();
    }, function () {
        $(this).find("a>span").css({
            "opacity": "0"
        }).animate({
            top: "50px"
        });
        $(this).find(">ul").stop().slideUp();
    });


    /* 픽스메뉴 */

    $("header").mouseleave(function () { //헤더 영역에서 나갔을 시
        $(this).find("li>.smenu").stop().slideUp();
        $(".bg_box").stop().slideUp();
    });


    //스크롤 내렸을때 보이는 탑메뉴
    $(".gnbMenu_fix").mouseenter(function () { //주메뉴 영역에 오버시
        $(this).find("li>.sub_fix").stop().slideDown();
        $(".bg_box_fix").stop().slideDown();

    });

    $("#header").mouseleave(function () { //헤더 영역에서 나갔을 시
        $(this).find("li>.sub_fix").stop().slideUp();
        $(".bg_box_fix").stop().slideUp();
    });


    //스크롤 내렸을때 보이는 탑메뉴2
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $(".gnb_fix").css({
                "margin-top": "0px",
                "transition": "all 1s"
            });
        } else {
            $(".gnb_fix").css({
                "margin-top": "-140px",
                "transition": "all 1s"
            });
        }

    });


});

// The Slideshow class.

//dddddddddddddddddddddddddddddddddddd
let showImg = 0; //기존이미지
let nextImg = 0; //새이미지

function changeImg() {
    /*일반함수*/

    nextImg++;
    ImgCount = $(".mainvisual .visual li").length;

    if (nextImg == ImgCount) { //마지막이미지일때 다시 첫번째 이미지로  
        nextImg = 0;
    }

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); //이미지효과준 클래스 제거(기존 이미지)
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); //이미지효과준 클래스 생성(새로 나타나는 이미지)
    $(".mainvisual .btn>span").eq(showImg).removeClass("active"); //기존 버튼	
    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); //선택된 버튼

    showImg = nextImg;

}

timer1 = setInterval(changeImg, 5000);


//텍스트 전환효과 함수생성
let showText = 0; //기존이미지
let nextText = 0; //새이미지

function changeText() {
    /*일반함수*/

    nextText++;
    TextCount = $(".mainvisual .visual li").length;

    if (nextText == TextCount) { //마지막이미지일때 다시 첫번째 이미지로  
        nextText = 0;
    }

    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible");
    $(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible");
    $(".mainvisual .btn>span").eq(showText).removeClass("active");
    $(".mainvisual .btn>span").eq(nextText).addClass("active");

    showText = nextText;

}

timer2 = setInterval(changeText, 5000);


//버튼클릭시....
$(".mainvisual .btn>span").click(function () {

    clearInterval(timer1);
    clearInterval(timer2);

    nextImg = $(this).index();
    nextText = $(this).index();

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible");
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible");
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");
    $(".mainvisual .btn>span").eq(nextImg).addClass("active");
    showImg = nextImg;

    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible");
    $(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible");
    $(".mainvisual .btn>span").eq(showText).removeClass("active");
    $(".mainvisual .btn>span").eq(nextText).addClass("active");
    showText = nextText;

    timer1 = setInterval(changeImg, 5000);
    timer2 = setInterval(changeText, 5000);

});