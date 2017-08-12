function slide() {
    $('.toggle_down').stop(true, false).slideUp(0);
}

function faq_public(o, moblie) {


    var id = o.attr('id');
    $('.top-right').each(function() {
        $(this).css('display', 'none');
    });
    $('.top-right-block').each(function() {
        $(this).css('display', 'none');
    });



    if (id == 1) {
        $('#top').css('display', 'block');
    } else if (id == 2) {
        $('#SettingupandPairing').css('display', 'block');
    } else if (id == 3) {
        $('#CameraFeatures').css('display', 'block');
    } else if (id == 4) {
        $('#SecurityandPrivacy').css('display', 'block');
    } else if (id == 5) {
        $('#CameraSettings').css('display', 'block');
    } else if (id == 6) {
        $('#top1').css('display', 'block');
    } else if (id == 7) {
        $('#top2').css('display', 'block');
    } else if (id == 8) {
        $('#top3').css('display', 'block');
    } else if (id == 9) {
        $('#top4').css('display', 'block');
    } else if (id == 10) {
        $('#top5').css('display', 'block');
    } else if (id == 11) {
        $('#top6').css('display', 'block');
    } else if (id == 12) {
        $('#top7').css('display', 'block');
    } else if (id == 13) {
        $('#top8').css('display', 'block');
    } else if (id == 14) {
        $('#top9').css('display', 'block');
    } else if (id == 15) {
        $('#top10').css('display', 'block');
    } else if (id == 16) {
        $('#top11').css('display', 'block');
    } else if (id == 17) {
        $('#top12').css('display', 'block');
    } else if (id == 18) {
        $('#top13').css('display', 'block');
    } else if (id == 19) {
        $('#top14').css('display', 'block');
    } else if (id == 20) {
        $('#top15').css('display', 'block');
    }


    if (moblie == 1) {
        $('.support_md-list-faq-left-content').each(function() {
            $(this).attr('class', 'support_md-list-faq-left-content');
        });
        o.attr('class', 'support_md-list-faq-left-content blue');
    } else {
        $('.mobile-support-faq-2').each(function() {
            $(this).attr('class', 'mobile-support-faq-2');
        });
        o.attr('class', 'mobile-support-faq-2 blue-color');
    }



}

function slide_background() {

    $('.container-fluid-jpx').css('background', '#787878');
    $('.header_logo_img').attr('src', Images + 'images/icons_r2_c2.png');
    $('.navbar-default').css('color', '#ffffff');
    $('.navbar-nav li a').css('color', '#ffffff');
    //$('.active a').css('color', '#ffffff');
    $('.homecamera-menu-2 a').css('color', '#1a96d4');
    $('.silde-img-2 a').css('color', '#1a96d4');
    $('.silde-img-3 a').css('color', '#1a96d4');
   // $('.silde-img-1 a').css('color', '#1a96d4');
    $('.silde-img-4 a').css('color', '#1a96d4');
    $('.homecamera-top-clarity a').css('color', '#666666');
    $('.homecamera-menu-2 a').css('color', '#1a96d4');


}

function start() {
    $('.actioncamera-6-2-content-right-content-img').css('opacity', 1);
    var data_1 = $('#ban').val();
    var canvas = document.getElementById("mc");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 300, 285);
    ctx.arc(148, 152, 148, data_1, 7, false);
    ctx.lineTo(148, 152);
    ctx.fillStyle = "#fcfbf9";
    ctx.clearRect(20, 20, 20, 20);
    ctx.fill();
    if (data_1 == "2.60") {
        $('.min0').css('opacity', 1);
    }
    if (data_1 == "4.60") {
        $('.min60').css('opacity', 1);
    }
    if (data_1 == '6.90') {

        $('.min80').css('opacity', 1);
        $('.min120').css('opacity', 1);
        //$('.min1202').css('opacity',1);
        $('.min1202').addClass('menu-down-actioncamera2-h2');


        //clearInterval(t1);
        return false;
    }
    var a = Number(data_1) + 0.1;
    $('#ban').val(a.toFixed(2));

}


function start_2() {

    var data_1 = $('#ban').val();
    var canvas = document.getElementById("mc-1");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 300, 285);
    ctx.arc(148, 152, 148, data_1, 7, false);
    ctx.lineTo(148, 152);
    ctx.fillStyle = "#dbdbdb";
    ctx.clearRect(20, 20, 20, 20);
    ctx.fill();
    $('.actioncamera-6-2-content-right-content-img-2').css('opacity', 1);
    if (data_1 == "2.60") {
        $('.min0-1').css('opacity', 1);
    }
    if (data_1 == "4.60") {
        $('.min60-1').css('opacity', 1);
    }
    if (data_1 == '6.90') {
        $('.min120-1').css('opacity', 1);
        window.setTimeout(
            function() {
                $('.min80-1').css('opacity', 1);
                $('.min1202-1').addClass('menu-down-actioncamera2-h2');
            }, 1000);
        var t2 = setInterval(
            function() {
                var ban = $('#ban2').val();
                if (Number(ban) < 7.00) {}
            }, 0);
    }
    var a = Number(data_1) + 0.1;
    $('#ban').val(a.toFixed(2));

}

function start_3() {

    var data_1 = $('#ban2').val();
    var canvas = document.getElementById("mc-2");
    var ctx2 = canvas.getContext("2d");
    ctx2.beginPath();
    ctx2.clearRect(0, 0, 300, 285);
    ctx2.arc(148, 152, 148, data_1, 7, false);
    ctx2.lineTo(148, 152);
    ctx2.fillStyle = "#ffe7d8";
    ctx2.clearRect(20, 20, 20, 20);
    ctx2.fill();
    $('.actioncamera-6-2-content-right-content-img-3').css('opacity', 1);
    if (data_1 == "2.60") {
        $('.min0-2').css('opacity', 1);
    }
    if (data_1 == "4.60") {
        $('.min60-2').css('opacity', 1);
    }
    if (data_1 == '6.90') {
        $('.min120-2').css('opacity', 1);
        window.setTimeout(
            function() {
                $('.min80-2').css('opacity', 1);
                $('.min1202-2').addClass('menu-down-actioncamera2-h2');
            }, 0);
    }
    var a = Number(data_1) + 0.1;
    $('#ban2').val(a.toFixed(2));

}





$(function() {


    $('#live').click(function(ev) {
        window.parent.open('http://www.xiaoyi.com/live_video/video');
        event.stopPropagation();
    });
    $('#live1').click(function(ev) {
        window.parent.open('http://www.xiaoyi.com/live_video/video');
        event.stopPropagation();
    });

    //whereissn
    $('body').delegate('.whereissn', 'click touchend', function() {
        $('.firmware_action_7_1').css('display', 'block');
    });
    $

    $(".firmware_action_7_1-1_img").hover(
        function() {
            $(this).attr('src', Images + 'images/actioncamera2/firmware/pop_close_click.png');
        },
        function() {
            $(this).attr('src', Images + 'images/actioncamera2/firmware/pop_close_nor.png');
        }
    );
    $('.firmware_action_7_1-1_img').click(function() {
        $('.firmware_action_7_1').css('display', 'none');
    })

    //buy-now-accessories
    $(".acccontent-top-right-buynow").hover(
        function() {
            $('.buy_now_acc_div').stop(true, false).slideDown(200);
        },
        function() {
            $('.buy_now_acc_div').stop(true, false).slideUp(200);
        }
    );


    //buy-now
    $(".activecart").hover(
        function() {
            $('.buy_now').stop(true, false).slideDown(200);
        },
        function() {
            $('.buy_now').stop(true, false).slideUp(200);
        }
    );

    $(".buy_now_img_hover_accessories").hover(
        function() {
            $('.buy_now_img_hover_i1').attr('src', Images + 'images/icon/online.png');
            $('.buy_now_img_hover_i2').attr('src', Images + 'images/icon/amazon.png');
            $('.buy_now_img_hover_i3').attr('src', Images + 'images/icon/ebay.png');

            var id = $(this).attr('id');

            if (id == 1) {
                $('.buy_now_img_hover_i1').attr('src', Images + 'images/icon/onlineh.png');
            } else if (id == 2) {
                $('.buy_now_img_hover_i2').attr('src', Images + 'images/icon/amazonh.png');
            } else if (id == 3) {
                $('.buy_now_img_hover_i3').attr('src', Images + 'images/icon/ebayh.png');
            }
        },
        function() {
            $('.buy_now_img_hover_i1').attr('src', Images + 'images/icon/online.png');
            $('.buy_now_img_hover_i2').attr('src', Images + 'images/icon/amazon.png');
            $('.buy_now_img_hover_i3').attr('src', Images + 'images/icon/ebay.png');
        }


    );



    /*$(".buy_now_img_hover").hover(

     function () {
     $('.buy_now_img_hover_i1').attr('src','images/icon/online.png');
     $('.buy_now_img_hover_i2').attr('src','images/icon/amazon.png');
     $('.buy_now_img_hover_i3').attr('src','images/icon/ebay.png');

     var id=$(this).attr('id');
     if(id == 1){
     $(this).html('<img src="images/icon/onlineh.png" class="buy_now_img_hover_i1 usacart" />');
     }
     else if(id == 2){
     $(this).html('<img src="images/icon/amazonh.png" class="buy_now_img_hover_i2 amazoncart" />');
     }else if(id == 3){
     $(this).html('<img src="images/icon/ebayh.png" class="buy_now_img_hover_i3 ebaycart" />');
     }
     },
     function () {
     $('.buy_now_img_hover_i1').attr('src','images/icon/online.png');
     $('.buy_now_img_hover_i2').attr('src','images/icon/amazon.png');
     $('.buy_now_img_hover_i3').attr('src','images/icon/ebay.png');
     }
     );*/




    $('body').delegate('.OtherCountries', 'click touchend', function() {
        window.open('https://mall.jd.com/index-1000077737.html');
    });
    $('body').delegate('.UnitedStates', 'click touchend', function() {
        window.open('https://yiqcyp.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w11522120-14920573401.3.1Z1oZo&user_number_id=2712901931&rn=6fc3bcbecae18e0e97d9645f7f84110a&scene=taobao_shop');
    });
    $('body').delegate('.OfflineExperienceStore', 'click touchend', function() {
        window.open('http://www.xiaoyi.com/yigoshop/index.html');
    });


    $(".buynow-float-button").hover(
        function() {
            $('.hidden-buynow').show(400);
        },
        function() {}
    );
    $(".buynow-float-oo").hover(
        function() {},
        function() {
            $('.hidden-buynow').hide();

        }
    );










    $('body').delegate('.mobile-support-faq-floating', 'touchend', function() {
        var id = $(this).css('margin-left');
        if (id == '0px') {

            $(this).html('<div style="float:left;margin-top:3%;"><<</div><div style="float:left">menu </div>');
            $(this).animate({ 'margin-left': "40%" });
            $('.mobile-support-faq-floating-menu').animate({ 'margin-left': "0%" });
        } else {
            $(this).html('<div style="float:left">menu </div><div style="float:left;margin-top:3%;">>></div>');
            $(this).animate({ 'margin-left': "0px" });
            $('.mobile-support-faq-floating-menu').animate({ 'margin-left': "-40%" });
        }
    });



    $('#here').click(function() {
        var id = $('.table_answer').css('display');

        if (id == 'none') {
            $('.table_answer').css('display', 'block');
        } else {
            $('.table_answer').css('display', 'none');
        }
        return false;
    });

    $('body').delegate('#here', 'touchend', function() {
        var id = $('.table_answer').css('display');

        if (id == 'none') {
            $('.table_answer').css('display', 'block');
        } else {
            $('.table_answer').css('display', 'none');
        }
        return false;
    });





    $(".toggle_down_menu_accessories_right").click(function() {
        location.href = Url + "/accessories/index";
    });

    $(".page_news").click(function() {
        var id = $(this).attr('id');

        if (id == 1) {
            $('#s1').css('display', 'block');
            $('#s2').css('display', 'none');
        } else {
            $('#s1').css('display', 'none');
            $('#s2').css('display', 'block');
        }



    });
    $(".jp-play").click(function() {

        $(this).html(' ');
    });

    $(".app-menu-home").click(function() {
        $('.app-menu-home-show').toggle();
    });
    $(".app-menu-action").click(function() {
        $('.app-menu-action-show').toggle();
    });
	  $(".app-menu-dash").click(function() {
        $('.app-menu-dash-show').toggle();
    });




    $("#toTop").click(function() {
        $("html").animate({ "scrollTop": "0px" }, 100); //IE,FF
        $("body").animate({ "scrollTop": "0px" }, 100); //Webkit
    });
    //faq



    //active_write  language
    $(".active_write").click(function() {
        $('#language').toggle();
    });




    //top
    $(".toggle_down_menu_home_g").hover(

        function() {
            var home = $(".toggle_down_menu_home").css('opacity');

            if (home == 1) {
                $('.toggle_down_menu_home_g').each(function() {
                    $(this).children('.toggle_down_menu_home_opacity').css('display', 'block');
                });
                $(this).children('.toggle_down_menu_home_opacity').css('display', 'none');
            }
        },
        function() {
            $(this).children('.toggle_down_menu_home_opacity').css('display', 'none');
        }
    );

$(".toggle_down_menu_dash_g").hover(

        function() {
            var home = $(".toggle_down_menu_dash").css('opacity');

            if (home == 1) {
                $('.toggle_down_menu_dash_g').each(function() {
                    $(this).children('.toggle_down_menu_dash_opacity').css('display', 'block');
                });
                $(this).children('.toggle_down_menu_dash_opacity').css('display', 'none');
            }
        },
        function() {
            $(this).children('.toggle_down_menu_dash_opacity').css('display', 'none');
        }
    );
	

    $(".toggle_down_menu_action_g").hover(

        function() {
            var home = $(".toggle_down_menu_action").css('opacity');

            if (home == 1) {
                $('.toggle_down_menu_action_g').each(function() {
                    $(this).children('.toggle_down_menu_action_opacity').css('display', 'block');
                });
                $(this).children('.toggle_down_menu_action_opacity').css('display', 'none');
            }
        },
        function() {
            $(this).children('.toggle_down_menu_action_opacity').css('display', 'none');
        }
    );



    $(".toggle_down_menu_accessories_g").hover(
        function() {
            $('.toggle_down_menu_accessories_g').each(function() {
                $(this).children('.toggle_down_menu_accessories_opacity').css('display', 'block');
            });
            $(this).children('.toggle_down_menu_accessories_opacity').css('display', 'none');
        },
        function() {
            $(this).children('.toggle_down_menu_accessories_opacity').css('display', 'none');
        }
    );



    var mouseover_tid = [];
    var mouseout_tid = [];
    //top-down�����˵���ʾ����
    $(".nav-toggle-down").hover(

        // ��������
        function() {

            var _self = this;
            var id = $(_self).attr('id');
            clearTimeout(mouseout_tid['index']);
            mouseover_tid['index'] = setTimeout(function() {

                if (document.body.clientWidth >= 1202) {;

                    if (!$('.toggle_down').is(":animated")) {
                        $('.toggle_down').stop(true, false).slideDown(200);
                       $('.toggle_down_menu_accessories_right').css('display', 'none');
					   setTimeout(function(){
							 if (id == 1) {
                                $('.toggle_down_menu_action').css('display', 'block');

								$("#houshij").hide();
                                $('.toggle_down_menu_action_g-1').attr('class', 'toggle_down_menu_action_g menu-down-home');

                                setTimeout(function() {
                                    $('.toggle_down_menu_action_g-2').attr('class', 'toggle_down_menu_action_g menu-down-home');
                                }, 30);

                                setTimeout(function() {
                                    $('.toggle_down_menu_action_g-3').attr('class', 'toggle_down_menu_action_g menu-down-home');
                                }, 60);
								setTimeout(function() {
									 $('.toggle_down_menu_action_g').show();
                                    $('.toggle_down_menu_action_g-4').attr('class', 'toggle_down_menu_action_g menu-down-home');
                                }, 90);


                                $('.toggle_down_menu_home').css('display', 'none');
                                $('.toggle_down_menu_dash').css('display', 'none');
                                $('.toggle_down_menu_weidan').css('display', 'none');
                                $('.toggle_down_menu_weibo').css('display', 'none');
                                $('.toggle_down_menu_shequ').css('display', 'none');
								 $('.toggle_down_menu_vr').css('display', 'none');

                            } else if (id == 2) {
								$("#houshij").hide();
								$("#goujVr").hide();
								
                                $('.toggle_down_menu_action').css('display', 'none');
								$('.toggle_down_menu_home').show();
                                $('.toggle_down_menu_home_g').show();


                                $('.toggle_down_menu_home_g-1').attr('class', 'toggle_down_menu_home_g menu-down-home');

                               setTimeout(function() {
                                    $('.toggle_down_menu_home_g-2').attr('class', 'toggle_down_menu_home_g menu-down-home');
                                }, 30);

                                setTimeout(function() {
                                    $('.toggle_down_menu_home_g-3').attr('class', 'toggle_down_menu_home_g menu-down-home');
                               }, 60);
							   setTimeout(function() {
                                    $('.toggle_down_menu_home_g-4').attr('class', 'toggle_down_menu_home_g menu-down-home');
                               }, 90);
									

                                $('.toggle_down_menu_dash').css('display', 'none');
                                $('.toggle_down_menu_weidan').css('display', 'none');
                                $('.toggle_down_menu_weibo').css('display', 'none');
								 $('.toggle_down_menu_vr').css('display', 'none');

                            } else if (id == 3) {
                                $('.toggle_down_menu_action').css('display', 'none');
                                $('.toggle_down_menu_home').css('display', 'none');
                                $('.toggle_down_menu_dash').css('display', 'block');
                                $('.toggle_down_menu_weidan').css('display', 'none');
								setTimeout(function() {
                                   $(".toggle_down_menu_dash_g").show();
                               },350);
				$('.toggle_down_menu_dash_opacity').css('display', 'none');					

                                $('.toggle_down_menu_dash_g').each(function() {
                                    $(this).attr('class', 'toggle_down_menu_dash_g menu-down-dash');
                                })
                                $('.toggle_down_menu_weibo').css('display', 'none');
                                $('.toggle_down_menu_shequ').css('display', 'none');
								 $('.toggle_down_menu_vr').css('display', 'none');

                            } else if (id == 4) {
								$("#goujVr").hide();
                                $('.toggle_down_menu_action').css('display', 'none');
                                $('.toggle_down_menu_home').css('display', 'none');
                                $('.toggle_down_menu_dash').css('display', 'none');
                                $('.toggle_down_menu_weidan').css('display', 'none');
                                $('.toggle_down_menu_weibo').css('display', 'block');
								 $('.toggle_down_menu_vr').css('display', 'none');
                                /*
                                 $('.toggle_down_menu_weibo').attr('id','menu-down');
                                 */


                                $('.toggle_down_menu_weibo_g-1').attr('class', 'toggle_down_menu_weibo_g toggle_down_menu_weibo_g-1 menu-down-weibo');

                                setTimeout(function() {
                                    $('.toggle_down_menu_weibo_g-2').attr('class', 'toggle_down_menu_weibo_g toggle_down_menu_weibo_g-2 menu-down-weibo');
                                }, 100);
                                setTimeout(function() {
                                    $('.toggle_down_menu_weibo_g-3').attr('class', 'toggle_down_menu_weibo_g toggle_down_menu_weibo_g-3 menu-down-weibo');
                                }, 200);
                                setTimeout(function() {
                                    $('.toggle_down_menu_weibo_g-4').attr('class', 'toggle_down_menu_weibo_g toggle_down_menu_weibo_g-4 menu-down-weibo');
                                }, 300);
                                $('.toggle_down_menu_shequ').css('display', 'none');

                            } else if (id == 9) {
                                $('.toggle_down_menu_action').css('display', 'none');
                                $('.toggle_down_menu_home').css('display', 'none');
                                $('.toggle_down_menu_dash').css('display', 'none');
                                $('.toggle_down_menu_weidan').css('display', 'block');
								  $('.toggle_down_menu_vr').css('display', 'none');
                                $('.toggle_down_menu_weidan_g').each(function() {
                                    $(this).attr('class', 'toggle_down_menu_weidan_g menu-down-dash');
                                })
                                $('.toggle_down_menu_weibo').css('display', 'none');
                                $('.toggle_down_menu_shequ').css('display', 'none');
                            }else if (id == 10) {
                                $('.toggle_down_menu_action').css('display', 'none');
                                $('.toggle_down_menu_home').css('display', 'none');
                                $('.toggle_down_menu_dash').css('display', 'none');
                                $('.toggle_down_menu_weidan').css('display', 'none');
								  $('.toggle_down_menu_vr').css('display', 'block');
                                $('.toggle_down_menu_vr_g').each(function() {
                                    $(this).attr('class', 'toggle_down_menu_vr_g menu-down-dash');
                                })
                                $('.toggle_down_menu_weibo').css('display', 'none');
                                $('.toggle_down_menu_shequ').css('display', 'none');
                            }
					   },100);
                           
                    }
                    $('.container-fluid-jpx').css('background', '#fff');
					$('.header_logo_img').attr('srcset', '//publicfiles.xiaoyi.com/yi_files/icons_r1_c1@2x.png 2x');
                    $('.header_logo_img').attr('src', Images + 'images/icons_r2_c2-1.png');
                    $('.navbar-default').css('color', '#787878');
                    $('.navbar-nav li a').css('color', '#787878');
                    $('.activecart a').css('color', '#fff');
                    $(this).find("a").css('color', '#1a96d4');
                    $('.silde-img-2 a').css('color', '#1a96d4');
                    $('.silde-img-3 a').css('color', '#1a96d4');
                    //$('.silde-img-1 a').css('color', '#1a96d4');
                    $('.silde-img-4 a').css('color', '#1a96d4');
                    $(this).attr('display', 'none');
                    $('.homecamera-menu-2 a').css('color', '#1a96d4');
                    $('.homecamera-top-clarity a').css('color', '#666666');

		    $(this).children('.toggle_down_menu_dash_opacity').css('display', 'none');
	
                } else {
			 $(this).children('.toggle_down_menu_dash_opacity').css('display', 'none');
                    $('.navbar-nav li a').each(function() {
                        //$(this).css('color', '#ffffff');
                    });

                }



            }, 200);
        },
        function() {
            var _self = this;

            clearTimeout(mouseover_tid['index']);
            mouseout_tid['index'] = setTimeout(function() {}, 100);

        }

    );



    $(".toggle_down").hover(
        function() {
            //$(this).slideDown();
        },
        function() {
            $('.toggle_down_menu_action_g').hide();



            $('.toggle_down_menu_home_g').hide()

            $('.toggle_down_menu_dash_g').each(function() {
                $(this).attr('class', 'toggle_down_menu_dash_g');
            });
			$("#houshij").hide();
			$("#goujVr").hide();
            $('.toggle_down_menu_accessories_g').each(function() {
                $(this).attr('class');
            })

            $('.toggle_down_menu_accessories_opacity').each(function() {
                $(this).css('display', 'none');
            });
            $('.toggle_down_menu_home_opacity').each(function() {
                $(this).css('display', 'none');
            });
            $('.toggle_down_menu_action_opacity').each(function() {
                $(this).css('display', 'none');
            });
		 $(this).children('.toggle_down_menu_dash_opacity').css('display', 'none');

			
			$('.header_logo_img').attr('srcset', '//publicfiles.xiaoyi.com/yi_files/icons_r2_c2@2x.png 2x');
			
            setTimeout("slide()", 0);
            setTimeout("slide_background()", 0);

        }

    );
































    /*$(".toggle_down_support").hover(
        function() {

            $('.toggle_down').slideUp(10);

            $('.container-fluid-jpx').css('background', '#787878');

            $('.header_logo_img').attr('src', Images + 'images/icons_r2_c2.png');
            $('.navbar-default').css('color', '#ffffff');
           // $('.navbar-nav li a').css('color', '#ffffff');
            $('.active a').css('color', '#ffffff');

            $('.silde-img-2 a').css('color', '#1a96d4');
           // $('.silde-img-1 a').css('color', '#1a96d4');
            $('.silde-img-3 a').css('color', '#1a96d4');
            $('.silde-img-4 a').css('color', '#1a96d4');

            $('.homecamera-top-clarity a').css('color', '#666666');
            $('.homecamera-menu-2 a').css('color', '#1a96d4');
        },
        function() {

        }
    );*/


    $('.pop-up-home-app').click(function() {

        $('#support-pop-up').css('display', 'block');
        $('#support-pop-up-home-app').css('display', 'block');

    });



    $('.pop-up-home').click(function() {
        $('#support-pop-up').css('display', 'block');
        $('#support-pop-up-home').css('display', 'block');

    });


    $('.pop-up-home-firmware').click(function() {

        $('#support-pop-up').css('display', 'block');
        $('#support-pop-up-home-firmware').css('display', 'block');

    });


    $(".pop-up3-home").click(function() {

        $('#support-pop-up').css('display', 'none');
        $('#support-pop-up-home').css('display', 'none');
        $('#support-pop-up-home-app').css('display', 'none');
        $('#support-pop-up-home-firmware').css('display', 'none');
    });











    //FAQ
    $('body').delegate('.support_md-list-faq-left-content', 'click', function() {
        faq_public($(this), 1);
    });

    $('body').delegate('.mobile-support-faq-2', 'touchend', function() {
        faq_public($(this), 2);
    });




    $('body').delegate('.support_md-list-faq-right-title_90', 'click', function() {

        var id = $(this).next('.support_md-list-faq-right-content').css('display');
        if (id == 'none') {
            $(this).next('.support_md-list-faq-right-content').css('display', 'block');
        } else {
            $(this).next('.support_md-list-faq-right-content').css('display', 'none');
        }
    });

    $('body').delegate('#myCarousel2', 'touchstart', function() {
        $('.classbutton').each(function() {
            $(this).animate({ opacity: 1 });
        });
    });
    $("#myCarousel").hover(

        function() {
            $('.classbutton').each(function() {
                $(this).animate({ opacity: 1 });
            });

        },
        function() {
            $('.classbutton').each(function() {
                $(this).animate({ opacity: 0 });
            });
        }

    );




    $(".community_content3").hover(

        function() {
            $(this).children('.community_content4').animate({ opacity: 1 });
            $(this).children('.community_content4-1').animate({ opacity: 1 });
        },
        function() {

            $(this).children('.community_content4').animate({ opacity: 0 });
            $(this).children('.community_content4-1').animate({ opacity: 0 });
        }

    );



    //faq answer
    $(".support_md-list-faq-left-content-answer-title").click(function() {
        var id = $(this).attr('id');

        var a = '.zmenu' + id;

        if ($(a).css('display') == 'none') {

            $('.zmenu').each(function() {
                var b = $(this).css('display');
                $(this).css('display', 'none');
            });

            $(a).css('display', 'block');
        }


    });
    //������
    $("#pop-up").click(function() {
        $('#support-pop-up').css('display', 'block');
        $('#support-pop-up-write').css('display', 'block');
    });
    $(".pop-up3").click(function() {
        $('#support-pop-up').css('display', 'none');
        $('#support-pop-up-write').css('display', 'none');
    });

    $("#pop-up2").click(function() {
        $('#support-pop-up').css('display', 'block');
        $('#support-pop-up-write-downloads').css('display', 'block');
    });

    $(".pop-downloads2").click(function() {
        $('#support-pop-up').css('display', 'none');
        $('#support-pop-up-write-downloads').css('display', 'none');
    });



    //accessories
    $(".aimg").click(function() {

        var src = $(this).attr('src');
        $('.aimg').parent().each(function() {
            $(this).css('border', '#cacaca solid 1px');
        })
        $(this).parent().css('border', '#cacaca solid 2px');
        $('#img').attr('src', src);

    });

    //��Ƶ����
    $(".video2").click(function() {
        var id = $(this).attr('id');

        var a = '#jquery_jplayer_' + id;


        $.post(
            Url + "/public/video_model", { id: id },
            function(data) {

                $('#dingwei').html(data);
                $(a).jPlayer({
                    ready: function() {
                        if (id == 10) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/parkour.mp4",
                                ogv: Images + "video/parkour.mp4",
                                webmv: Images + "video/parkour.mp4",
                                poster: Images + "images/community/10.jpg"
                            });
                        } else if (id == 11) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/360delayplanet.mp4",
                                ogv: Images + "video/360delayplanet.mp4",
                                webmv: Images + "video/360delayplanet.mp4",
                                poster: Images + "video/360delayplanet.jpg"
                            });
                        } else if (id == 12) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/MoalboalSardinerunPhilippines.mp4",
                                ogv: Images + "video/MoalboalSardinerunPhilippines.mp4",
                                webmv: Images + "video/MoalboalSardinerunPhilippines.mp4",
                                poster: Images + "video/MoalboalSardinerunPhilippines.jpg"
                            });
                        } else if (id == 13) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/Dashcamerainstallation.mp4",
                                ogv: Images + "video/Dashcamerainstallation.mp4",
                                webmv: Images + "video/Dashcamerainstallation.mp4",
                                poster: Images + "images/support/faq/dash/tutorial_install.jpg",
                            });
                        } else if (id == 14) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/YIDashcameraapptutorial.mp4",
                                ogv: Images + "video/YIDashcameraapptutorial.mp4",
                                webmv: Images + "video/YIDashcameraapptutorial.mp4",
                                poster: Images + "images/support/faq/dash/tutorial_install.jpg",
                            });
                        } else if (id == 15) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/YIHomeCamerasilde.mp4",
                                ogv: Images + "video/YIHomeCamerasilde.mp4",
                                webmv: Images + "video/YIHomeCamerasilde.mp4",
                                poster: Images + "images/home1.png"
                            });
                        } else if (id == 16) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/YIActionCameraOfficial.mp4",
                                ogv: Images + "video/YIActionCameraOfficial.mp4",
                                webmv: Images + "video/YIActionCameraOfficial.mp4",
                                poster: Images + "images/action1.png"
                            });
                        } else if (id == 17) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/home2.mp4",
                                ogv: Images + "video/home2.mp4",
                                webmv: Images + "video/home2.mp4",
                                poster: Images + "images/home2.png"
                            });
                        } else if (id == 18) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/silde.mp4",
                                ogv: Images + "video/silde.mp4",
                                webmv: Images + "video/silde.mp4",
                                poster: Images + "images/dash1.png"
                            });
                        } else if (id == 19) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/support-home.mp4",
                                ogv: Images + "video/support-home.mp4",
                                webmv: Images + "video/support-home.mp4",
                                poster: Images + "images/support-home1.png"
                            });
                        } else if (id == 20) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/support-home2.mp4",
                                ogv: Images + "video/support-home2.mp4",
                                webmv: Images + "video/support-home2.mp4",
                                poster: Images + "images/support-home2.png"
                            });
                        } else if (id == 21) {
                            $(this).jPlayer("setMedia", {
                                m4v: Images + "video/yi4kaction.mp4",
                                ogv: Images + "video/yi4kaction.mp4",
                                webmv: Images + "video/yi4kaction.mp4",
                                poster: Images + "images/actioncamera2/4kaction.png"
                            });
                        }
                        $(this).jPlayer("pauseOthers");
                    },
                    swfPath: "js",
                    supplied: "webmv, ogv, m4v",
                    size: {
                        width: "100%",
                        height: "340px",

                    }
                });
            });

        $('#ding').css('display', 'block');
        $('#dingwei').css('display', 'block');
    });
    $("#ding").click(function() {
        // location.reload();
        $('#ding').css('display', 'none');
        $('#dingwei').css('display', 'none');
        $(".jp-jplayer").jPlayer("stop");
        //$(".jp-jplayer").jPlayer( "clearMedia" );
        //$("#jquery_jplayer_1").html('');

    });


    $('.toggle').click(function() {
        var id = $('.toggle_down').css('display');
        if (id == 'none') {
            $('.toggle_down').fadeIn(1000);
        } else {
            $('.toggle_down').fadeOut(1000);
        }
    });



    $(".country_click").hover(

        function() {
            $('.country').css('display', 'block');
        },
        function() {

            $('.country').css('display', 'none');
        }

    );





    $('.country_son').click(function() {
        var none = $('.country').css('display');
        if (none == 'none') {
            $('.country').css('display', 'block');
        } else {
            $('.country').css('display', 'none');
        }
    });

    $('body').delegate('.phone_click', 'click', function() {
        var img = $(this).attr('data-img');
        var src = $(this).attr('data-src');

        $('.phoneBack').html('<video id="phoneVideo" controls="" autoplay="" poster="' + img + '"><source id="phoneVideo2" type="video/mp4" src="' + src + '"></video>');




    });




    $('.img1').mouseover(function() {
        $('.img1').each(function() {

            $(this).prev().css('display', 'none');

        });
        $(this).prev().css('display', 'block');

    });
    $('.rownone').mouseleave(function() {
        $('.img1').each(function() {

            $(this).prev().css('display', 'none');

        });
    });

    /*accessories*/
    $(".accessories_content2").hover(
        function() {
            if (document.body.clientWidth >= 1202) {;
                $(this).children('.accessories_content4').css('display', 'block');
            }
        },
        function() {
            if (document.body.clientWidth >= 1202) {;
                $(this).children('.accessories_content4').css('display', 'none');
            }
        }
    );











    $('.hide_ccessories').mouseleave(function() {
        $('.accessories_content4').each(function() {

            $(this).css('display', 'none');

        });
    });



    /*dealer*/
    $('body').delegate('#s7', 'keyup', function() {
        var htm = $(this).val();
        var cat = /[^\d\-+]/g;
        //var cat=/[^1-9]{0}[^0-9]/g;
        //var cat=/[^1-9]{0}[^\d\-]/g;
        $(this).val(htm.replace(cat, ''));



    });
    $('body').delegate('.submit-dealer', 'click', function() {
        var value = $(this).html();
        if (value == 'submit') {
            var s1 = $('#s1').val();
            var f1 = dealer(s1, '#s1', 'Customers id cannot be empty.');
            if (!f1) {
                return false;
            }
            var s2 = $('#s2').val();
            var f2 = dealer(s2, '#s2', 'Customers name cannot be empty.');
            if (!f2) {
                return false;
            }
            var s3 = $('#s3').val();
            var f3 = dealer(s3, '#s3', 'Company name cannot be empty.');
            if (!f3) {
                return false;
            }
            var s4 = $('#s4').val();
            var f4 = dealer(s4, '#s4', 'Country cannot be empty.');
            if (!f4) {
                return false;
            }
            var s5 = $('#s5').val();
            var f5 = dealer(s5, '#s5', 'Company address cannot be empty.');
            if (!f5) {
                return false;
            }
            var s6 = $('#s6').val();
            var f6 = dealer(s6, '#s6', 'Selling products list cannot be empty.');
            if (!f6) {
                return false;
            }




            var s7 = $('#s7').val();
            var f7 = dealer(s7, '#s7', 'Telephone cannot be empty.');
            if (!f7) {
                return false;
            }
            var s8 = $('#s8').val();
            var f8 = dealer(s8, '#s8', 'Email address cannot be empty.');
            if (!f8) {
                return false;
            }
            var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (!reg.test(s8)) {
                $('.error').html('Email address is not correct!');
                return false;
            }

            var s9 = $('#s9').val();
            var f9 = dealer(s9, '#s9', 'Target country cannot be empty.');
            if (!f9) {
                return false;
            }
            var s10 = $('#s10').val();
            var f10 = dealer(s10, '#s10', 'Annual/monthly sales quantity  cannot be empty.');
            if (!f10) {
                return false;
            }
            var s11 = $('#s11').val();
            var f11 = dealer(s11, '#s11', 'Channels cannot be empty.');
            if (!f11) {
                return false;
            }
            var s12 = $('#s12').val();
            var f12 = dealer(s12, '#s12', 'Online(which platform) cannot be empty.');
            if (!f12) {
                return false;
            }
            var s13 = $('#s13').val();
            var f13 = dealer(s13, '#s13', 'Offline(name of ships and address) cannot be empty.');
            if (!f13) {
                return false;
            }
            var s14 = $('#s14').val();
            var f14 = dealer(s14, '#s14', 'Percentage between online and offline  cannot be empty.');
            if (!f14) {
                return false;
            }
            var s15 = $('#s15').val();
            var f15 = dealer(s15, '#s15', 'Where did you know YI cannot be empty.');
            if (!f15) {
                return false;
            }
            var s16 = $('#s16').val();
            var f16 = dealer(s16, '#s16', 'Which channels are you going to sell(online or offline) cannot be empty.');
            if (!f16) {
                return false;
            }
            var s17 = $('#s17').val();
            var f17 = dealer(s17, '#s17', 'Whether do marketing for YI or not, HOW  cannot be empty.');
            if (!f17) {
                return false;
            }
            var s18 = $('#s18').val();
            var f18 = dealer(s18, '#s18', 'The quantity of first order cannot be empty.');
            if (!f18) {
                return false;
            }
            var s19 = $('#s19').val();
            var f19 = dealer(s19, '#s19', 'Estimated monthly/annual sales volume cannot be empty.');
            if (!f19) {
                return false;
            }
            var s20 = $('#s20').val();
            var s21 = $('#s21').val();
            var s22 = $('#s22').val();
            var s23 = $('#s23').val();
            $('.error').html('');
            $(this).html('submit...');
            $.post(
                Url + "/dealer/db", { s1: s1, s2: s2, s3: s3, s4: s4, s5: s5, s6: s6, s7: s7, s8: s8, s9: s9, s10: s10, s11: s11, s12: s12, s13: s13, s14: s14, s15: s15, s16: s16, s17: s17, s18: s18, s19: s19, s20: s20, s21: s21, s22: s22, s23: s23 },
                function(data) {
                    //alert(data);
                    //$('.error').html(data);
                    //return  false;

                    if (data) {
                        $('.error').html('After submitted to success, there will be staff contact you');
                        setTimeout(
                            function() {
                                location.href = Url + '/dealer/index';
                            }, 3000);

                    } else {
                        $('.error').html('Submit failure, refresh and submit again');
                        setTimeout(
                            function() {

                                location.href = Url + '/dealer/index';
                            }, 3000);
                    }

                })

        }



    });
    /*$('#bodys').show();*/

    $("#myCarousel2").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {

            if (direction == 'left') {
                $('.right').click();
            } else if (direction == 'right') {
                $('.left').click();
            } else if (direction == 'up') {
                var myDiv = $('#myCarousel2').css('height');
                myDiv = myDiv.replace("px", "");

                $(window).scrollTop(myDiv);
            } else if (direction == 'down') {}

        },
    });
});

function dealer(value, id, data) {

    if (value == '') {

        $(id).focus();
        $('.error').html(data);
        return false;
    } else {
        return true;
    }

}
