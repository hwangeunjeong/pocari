$(document).ready(function(){



  //마우스 오버와 아웃의 영역을 다르게 할때... 
  $(".gnbMenu>li").mouseenter(function(){
    $(".gnbMenu>li>ul").hide();//기존에 보여지는 서브메뉴 안보이게....
    $(this).find(">ul").stop().slideDown();
    $(".bg_box").stop().slideDown();

  });

  $("header").mouseleave(function(){
    $(".gnbMenu>li>ul").hide();
    $(this).find(">ul").stop().slideUp();
    $(".bg_box").stop().slideUp();

  });


  //비쥬얼 

  $(".subtext_01").fadeIn(2000,function(){ //배경이미지부터 fadeIn
});
      /* 섹션2탭메뉴 */
    
$(".tab li").click(function(){

  tval=$(this).index();
  tnum=+100*tval; //가로폭 120px씩 증가됨

  $(".tab-header .tab-highlight").animate({left:tnum});
  $(".tab li a").css("color","#000"); //탭의 모든 글자색
  $(this).find(">a").css("color","#fff"); //선택된 탭의 글자색

  $(".panel li").hide(); //기존의 보여진 내용 숨기기 
  $($(this).find(">a").attr("href")).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기
});


  //사이트맵
  site=true; //변수

  $(".sitemap_btn span").click(function(){

      if(site){//참일때 
          $(this).css({"background":"url(/img/sitemap_close.png"}); //이미지변경 
          $(".sitemap").animate({height:"200px"},"fast"); //height변경 
          $(".sitemap").css({"boder-bottom":"1px solid #e5e5e5"}); //하단에 테두리 만듬 
          $(".sitemap_list").show(); //사이트맵 내용 보임 
          site=false;
      }else{
          $(this).css({"background":"url(/img/sitemap_open.png"}); 
          $(".sitemap").animate({height:"0px"},"fast"); 
          $(".sitemap").css({"boder-bottom":"none"}); 
          $(".sitemap_list").hide();
          site=true;
      }
  });



  
});
