;(function($, window, undefined) {
  'use strict';

  var pluginName = 'footer';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      that.element.slick(that.options);
    },
    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {

  };

  $(function() {

    if($('[data-left-side]')[0]) {
      $('[data-left-side]').each(function(){
        var slideNumber = Math.floor($(window).width()/$(this).find('.card').width()) - 1;
        var slideWidth = $('.slide').outerWidth();
        console.log(slideNumber)
        $(this).slick({
          // infinite: false,
          // dots: false,
          // slidesToShow: slideNumber,
          // variableWidth: true

          dots: false,
          infinite: false,
          speed: 300,
          autoplay:false,
          slidesToShow: slideNumber,
          centerMode: false,
          variableWidth: true,
          centerPadding: 0,
          slidesToScroll: 1,
        })
        
      })
    }
   
   if($('[data-slider-center]')[0] && $('[data-slider-center] .card-2').length > 3) {
    $('[data-slider-center]').each(function(){
      $(this).slick({
       centerMode: true,
       centerPadding: '60px',
       variableWidth: true,
       slidesToShow: 3,
       responsive: [
         {
           breakpoint: 991,
           settings: {
             slidesToShow: 1
           }
         },
         {
           breakpoint: 768,
          //  settings: {
          //   arrows: false
          //   }
           settings : 'unslick'
         }
       ]
     });
    })
   }

    if($('[data-text-animation]')[0]) {
      $('[data-text-animation]').each(function(){
        $(this).slick({
          infinite: false
        })
      })
    }
  });
}(jQuery, window));
