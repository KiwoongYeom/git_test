$(document).ready(function(){

	$('header .links__icon').on('click', function (){
		$(this).next().slideToggle();
	});

	if($('.wy-menu-vertical li.current>a').length){
		var sidebarScrollPosition = $('.wy-menu-vertical li.current>a').offset().top;
		$('.wy-side-scroll').scrollTop(sidebarScrollPosition-120);
	}

	$('.wy-menu-vertical .caption').on('click', function(){
		if(!$(this).next().is(":visible")) {
			$(".wy-menu-vertical > ul:visible").slideToggle();
			$(this).next().slideToggle();
		}
	});

	var centerScroll = function(position){
		setTimeout(function(){
			var centerScrollPosition = $('.wy-nav-content-wrap').scrollTop();
			$('.wy-nav-content-wrap').scrollTop(centerScrollPosition-position);
		},100);
	};

	$('.wy-menu-vertical li.current li').on('click', function(){
		centerScroll(80);
	});

	centerScroll(75);

	$('.header-menu > .menu-item').each(function(){
		$(this).find('.menu-item-tab').first().addClass('menu-item-tab-opened');
	}).mouseover(function(){
		var $this = $(this);
		var $mega_menu = $this.children('.mega-menu');
		var $mega_menu_tabs = $mega_menu.find('.menu-item-tab');
		$mega_menu.stop().fadeIn(0).mouseout(function(){
			$(this).stop().fadeOut(150);
		});
	});

	$('.menu-item-tab').mouseover(function(){
		var $this = $(this);
		$this.siblings().removeClass('menu-item-tab-opened');
		$this.addClass('menu-item-tab-opened');
	});
});