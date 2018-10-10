"use strict";

(function() {
	$(function() {



		/*AOS*/
		AOS.init({
			offset: 100,
			once: true,
			duration: 1100,
			delay: 150
		});
		setTimeout(function() { AOS.refresh(); }, 1);


		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				// ajax: {
				//   url: 'https://api.github.com/search/repositories',
				//   dataType: 'json'
				//   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
				// },
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});


		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		smoothScroll.init({
			easing: 'easeInOutCubic',
			offset: 85
		});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});


		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"pagedim-black", // wrapper-bg black
				"theme-white",
				//"theme-white",
				//"fullscreen",
				//"listview-50",
				//"fx-panels-slide-up",
				//"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});









		/*FLIKITY*/
		function flickityPrevNext(className, classPrevNext) {
			var carouselWrapper = $(className);
			for (var i = 0; i < carouselWrapper.length; i++) {
				var crs = $(carouselWrapper[i]);
				var carousel = crs.find(".carousel-items");
				var carouselPrevNext = $(classPrevNext).length ? $(classPrevNext) : crs.find(".carousel-prev-next");
				var btnNext = carouselPrevNext.find(".next");
				var btnPrev = carouselPrevNext.find(".prev");
				var flkty = carousel.data("flickity");
				var selected;
				var that = this;
				btnNext.on("click", carousel, function(e) {
					e.data.flickity("next", true);
				});

				btnPrev.on("click", carousel, function(e) {
					e.data.flickity("previous", true);
				});
				// carousel.on("select.flickity-"+i, function() {
				//   console.log(this);
				//   selected = $(flkty.selectedElement);
				//   selected
				//     .siblings()
				//     .addBack()
				//     .removeClass("is-next is-prev");
				//   selected.next().addClass("is-next");
				//   selected.prev().addClass("is-prev");
				// });
			}
			return carousel;
		}
		function flickityCounter( carouselСounterСontent, counterElements ){
			try{
				counterElements =         $(counterElements);
				carouselСounterСontent =  $(carouselСounterСontent);
				var currentIndex = counterElements.siblings(".is-selected").index()+1;
				var total = counterElements.length;
				carouselСounterСontent.find(".carousel-counter-total").text( total );
				carouselСounterСontent.find(".carousel-counter-current").text( currentIndex );
			}catch(e){
				console.error(e);
			}
		}
		
		$('.button-carousel-nav').on('click', 'li', function() {
			var that = $(this);
			var selector = that.attr('data-selector');
			that.addClass("is-selected");
			that.siblings().removeClass("is-selected");
		});




		var arrowStyle = { 
		  x0: 10,
		  x1: 70, y1: 50,
		  x2: 70, y2: 40,
		  x3: 70
		}

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items figure").length ){
			window.bnrCarousel = $(".bnr-carousel").children(".carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 4500,
				pauseAutoPlayOnHover: true,
				arrowShape: "M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z",
				initialIndex: 0,
				friction: 1,
				selectedAttraction: 1,
				prevNextButtons: !checkSm(),
				draggable: false,
				wrapAround: true,
				pageDots: checkSm(),
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			bnrCarousel.data("flickity");
			//arrows
			//flickityPrevNext(".bnr-carousel");
			//dots
			for( var i = 0; i < $(bnrCarousel).find("figure").length; i++){
				bnrCarousel.siblings().find(".button-carousel-nav ul").append('<li role="button" class="button"></li>');
			}
			bnrCarousel.on( 'select.flickity', function( event, index ) {
				var index = $(this).find("figure.is-selected").index();
			  $(this).siblings()
			  			.find(".button-carousel-nav ul .button")
			  			.eq(index)
			  			.addClass("is-selected")
			  			.siblings()
			  			.removeClass("is-selected");
			});
	    $('.bnr-carousel .button-carousel-nav').on( 'click', 'li', function() {
	      var index = $(this).index();
	      bnrCarousel.flickity( 'select', index );
	    });
		}
		$(".bnr-carousel .carousel-items").append("<div class='container container-arrows'></div>").find(".container-arrows").append($(".bnr-carousel .carousel-items .flickity-prev-next-button"))
		


		if( $('.productions-carousel .carousel-items figure').length > 6 )
	  	$('.productions-carousel .carousel-items').flickity({
	      imagesLoaded: true,
	      autoPlay: 3000,
	      freeScroll: false,
	      pauseAutoPlayOnHover: true,
	      arrowShape: "M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z",
	      initialIndex: Math.floor($('.productions-carousel .carousel-items figure').length/2),
	      prevNextButtons: true,
	      pageDots: false,
	      percentPosition: true,
	      draggable: false,
	      adaptiveHeight: true, 
	      wrapAround: false,
	      contain: false,
	      cellAlign: 'center'
	    });
  	if($('.short-trip-carousel .carousel-items figure').length > 4)
			$('.short-trip-carousel .carousel-items').flickity({
	      imagesLoaded: true,
	      autoPlay: 3000,
	      freeScroll: false,
	      pauseAutoPlayOnHover: true,
	      arrowShape: "M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z",
	      initialIndex: 0,
	      prevNextButtons: true,
	      draggable: false,
	      adaptiveHeight: true, 
	      wrapAround: true,
	      pageDots: false,
	      contain: false,
	      percentPosition: true,
	      cellAlign: 'center'
	    });

    $('.galleryvideo-carousel .carousel-items').map(function(i, el) {
      var fct = $(el).flickity({
        imagesLoaded: true,
        autoPlay: false,
        pauseAutoPlayOnHover: true,
        lazyLoad: true,
        arrowShape: arrowStyle,
        setGallerySize: true,
        initialIndex: 1,
        prevNextButtons: true,
        draggable: false,
        resize: false,
        wrapAround: false,
        pageDots: false,
        contain: false,
        percentPosition: true,
        cellAlign: 'center'
      })
    })

      $('.short-reviews-carousel .carousel-items').flickity({
        imagesLoaded: true,
        autoPlay: 3000,
        freeScroll: false,
        pauseAutoPlayOnHover: true,
        arrowShape: arrowStyle,
        initialIndex: 0,
        prevNextButtons: false,
        draggable: false,
        adaptiveHeight: true, 
        wrapAround: false,
        pageDots: true,
        contain: true,
        percentPosition: true,
        cellAlign: 'center'
      });


    //short-partners-carousel
    if ($(".short-partners-carousel .carousel-items figure").length > 8 || checkSm())
      $('.short-partners-carousel .carousel-items').flickity({
        imagesLoaded: true,
        autoPlay: 3000,
        freeScroll: false,
        pauseAutoPlayOnHover: true,
        arrowShape: arrowStyle,
        initialIndex: 0,
        prevNextButtons: checkSm(),
        draggable: true,
        adaptiveHeight: true, 
        wrapAround: true,
        pageDots: false,
        contain: true,
        percentPosition: true,
        cellAlign: 'center'
      });


    	





		window.carouselArticle = function() {
			if ($(".carousel-article").length >= 0) {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: false,
							cellAlign: "center",
							bgLazyLoad: 1,
							//friction: 1,
							//selectedAttraction: 1,
							initialIndex: 1,
							draggable: false,
							contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 1,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: true,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						adaptiveHeight: true,
						//contain: true,
						pageDots: false
					});
          $("[data-fancybox]").fancybox({
            afterShow: function(instance, current) {
              this.$content.find(".carousel-main").flickity("resize");
              this.$content.find(".carousel-nav").flickity("resize");
            }
          });
				}
			}
		};
		carouselArticle();
		
		/*parallax*/
		!function(r,a,n,l){function p(t,i){var e=this;"object"==typeof i&&(delete i.refresh,delete i.render,r.extend(this,i)),this.$element=r(t),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var s=(this.position+"").toLowerCase().match(/\S+/g)||[];if(s.length<1&&s.push("center"),1==s.length&&s.push(s[0]),"top"!=s[0]&&"bottom"!=s[0]&&"left"!=s[1]&&"right"!=s[1]||(s=[s[1],s[0]]),this.positionX!==l&&(s[0]=this.positionX.toLowerCase()),this.positionY!==l&&(s[1]=this.positionY.toLowerCase()),e.positionX=s[0],e.positionY=s[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=r("<div />").prependTo(this.mirrorContainer);var o=this.$element.find(">.parallax-slider"),h=!1;0==o.length?this.$slider=r("<img />").prependTo(this.$mirror):(this.$slider=o.prependTo(this.$mirror),h=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){e.naturalHeight&&e.naturalWidth||(e.naturalHeight=this.naturalHeight||this.height||1,e.naturalWidth=this.naturalWidth||this.width||1),e.aspectRatio=e.naturalWidth/e.naturalHeight,p.isSetup||p.setup(),p.sliders.push(e),p.isFresh=!1,p.requestRender()}),h||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||0<o.length)&&this.$slider.trigger("load")}!function(){for(var o=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!a.requestAnimationFrame;++i)a.requestAnimationFrame=a[t[i]+"RequestAnimationFrame"],a.cancelAnimationFrame=a[t[i]+"CancelAnimationFrame"]||a[t[i]+"CancelRequestAnimationFrame"];a.requestAnimationFrame||(a.requestAnimationFrame=function(t){var i=(new Date).getTime(),e=Math.max(0,16-(i-o)),s=a.setTimeout(function(){t(i+e)},e);return o=i+e,s}),a.cancelAnimationFrame||(a.cancelAnimationFrame=function(t){clearTimeout(t)})}(),r.extend(p.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,mirrorContainer:"body",refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t,i=p.winHeight,e=p.docHeight,s=Math.min(this.boxOffsetTop,e-i),o=Math.max(this.boxOffsetTop+this.boxHeight-i,0),h=this.boxHeight+(s-o)*(1-this.speed)|0,r=(this.boxOffsetTop-s)*(1-this.speed)|0;h*this.aspectRatio>=this.boxWidth?(this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r,t=this.imageWidth-this.boxWidth,"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-t:isNaN(this.positionX)?this.offsetLeft=-t/2|0:this.offsetLeft=Math.max(this.positionX,-t)):(this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0,t=this.imageHeight-h,"top"==this.positionY?this.offsetBaseTop=r:"bottom"==this.positionY?this.offsetBaseTop=r-t:isNaN(this.positionY)?this.offsetBaseTop=r-t/2|0:this.offsetBaseTop=r+Math.max(this.positionY,-t))},render:function(){var t=p.scrollTop,i=p.scrollLeft,e=this.overScrollFix?p.overScroll:0,s=t+p.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d("+this.mirrorLeft+"px, "+(this.mirrorTop-e)+"px, 0px)",visibility:this.visibility,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d("+this.offsetLeft+"px, "+this.offsetTop+"px, 0px)",position:"absolute",height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),r.extend(p,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var i=this,t=r(n),s=r(a),e=function(){p.winHeight=s.height(),p.winWidth=s.width(),p.docHeight=t.height(),p.docWidth=t.width()},o=function(){var t=s.scrollTop(),i=p.docHeight-p.winHeight,e=p.docWidth-p.winWidth;p.scrollTop=Math.max(0,Math.min(i,t)),p.scrollLeft=Math.max(0,Math.min(e,s.scrollLeft())),p.overScroll=Math.max(t-i,Math.min(t,0))};s.on("resize.px.parallax load.px.parallax",function(){e(),i.refresh(),p.isFresh=!1,p.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){o(),p.requestRender()}),e(),o(),this.isReady=!0;var h=-1;!function t(){if(h==a.pageYOffset)return a.requestAnimationFrame(t),!1;h=a.pageYOffset,i.render(),a.requestAnimationFrame(t)}()}},configure:function(t){"object"==typeof t&&(delete t.refresh,delete t.render,r.extend(this.prototype,t))},refresh:function(){r.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),r.each(this.sliders,function(){this.render()})},requestRender:function(){this.render(),this.isBusy=!1},destroy:function(t){var i,e=r(t).data("px.parallax");for(e.$mirror.remove(),i=0;i<this.sliders.length;i+=1)this.sliders[i]==e&&this.sliders.splice(i,1);r(t).data("px.parallax",!1),0===this.sliders.length&&(r(a).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,p.isSetup=!1)}});var t=r.fn.parallax;r.fn.parallax=function(e){return this.each(function(){var t=r(this),i="object"==typeof e&&e;this==a||this==n||t.is("body")?p.configure(i):t.data("px.parallax")?"object"==typeof e&&r.extend(t.data("px.parallax"),i):(i=r.extend({},t.data(),i),t.data("px.parallax",new p(this,i))),"string"==typeof e&&("destroy"==e?p.destroy(this):p[e]())})},r.fn.parallax.Constructor=p,r.fn.parallax.noConflict=function(){return r.fn.parallax=t,this},r(function(){r('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);

    // Прибавление-убавление значении
    (function(){
      var form = $("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(document).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        cntInput.val( cntVal ).attr("value", cntVal)
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )

    })();




		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
			}

		}





		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 150 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled").addClass("down");

			} else if ($(window).scrollTop() < 275 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta


			if( scrolledDiv($(".staff-progress")) && !staffProgressStatus ){
				staffProgress();
				staffProgressStatus = !staffProgressStatus;
			}
		});


		$(window).on("mousewheel", function(event) {
			if (!headerRange) return;
			if (event.originalEvent.wheelDelta >= 0) {
				minMenu.removeClass("up");
			} else {
				minMenu.addClass("up");
			}
		});












		//Preloader
		window.preLoader = {

			preImg: function(img) {
				var images = img || document.images,
					imagesTotalCount = images.length,
					imagesLoadedCount = 0,
					preloadPercent = $(".percent").text("0 %");

				if (imagesTotalCount == 0) {
					preOnload();
					$(preloadPercent).text("100 %");
				}

				for (var i = 0; i < imagesTotalCount; i++) {
					var image_clone = new Image();
					image_clone.onload = image_loaded;
					image_clone.onerror = image_loaded;
					image_clone.src = images[i].src;
				}

				function preOnload() {
					onLoaded();
				}

				function image_loaded() {
					imagesLoadedCount++;
					var per = (100 / imagesTotalCount * imagesLoadedCount) << 0;

					setTimeout(function() {
						//console.log(per);
						$(preloadPercent).text(per + "%");
					}, 1);

					if (imagesLoadedCount >= imagesTotalCount) preOnload();
				}
			}
		};
		preLoader.preImg();



















	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);

// COMMON FUNCTION

setTimeout(function() {
	//jQuery FUNCITON
	$.fn.onResized = function() {
		onResized(function() {
			this;
		});
		return this;
	};
}, 10);




function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}

function intSpace( int, replaceType ){
		var cnt = 0;
		var newInt = "";
		int = int*1;
		replaceType = replaceType || " ";
		if( typeof int === NaN )
			return;
		var arrInt = (int+"").match(/([0-9])/gim).reverse();
		for (var i = 0; i < arrInt.length; i++) {
			cnt++;
			newInt = arrInt[i]+newInt
			if(cnt === 3){
				newInt = replaceType+newInt;
				cnt = 0;
			}
		}
		return newInt;
}