$(document).ready(function(){

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

// 포카리TEXT
  $(".box1").hover(function(){
      $(".box1 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
  },function(){
      $(".box1 li:first-child").stop(true,true).animate({marginLeft:"-75px"},250);    
  });

  //컨텐츠3 탭메뉴
 
  $("dd:not(:first)").css("display","none");
	$("dt:first").addClass("selected");




  $("dl dt").click(function(){
    
    $("dl dt").find("+dd").stop().hide(200); //기존에 보이는것은 다른것을 선ㅌ액할떄 올라가게  
    $(this).find("+dd").show("slow")
    $("dt").removeClass("selected"); //기존선택된 탭메뉴 제거
    $(this).addClass("selected"); //새로 선택된 탭메뉴 추가

  });



  $(window).scroll( function(){
    /* 2 */
    $('#sub_01').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* 3 */
        if( bottom_of_window > bottom_of_object/2 ){
            $(this).animate({'opacity':'1'},2000);
        }
        
    }); 

      
  }); 
  $(window).scroll( function(){

    $('#tabmenu').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* 3 */
        if( bottom_of_window > bottom_of_object/2 ){
            $(this).animate({'opacity':'1'},1000);
        }
        $('.content3').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},800);
          }
          $(window).scroll( function(){
            $('.content4').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','margin-left':'0px'},1000);
                }
                
            }); 
        });
        });
    }); 
  });



});


  
