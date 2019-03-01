;(function($, window, undefined) {
  'use strict';

  var pluginName = 'dropdown';

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
    $('.mobile .group-link:not(.no-sub) .title').on('click.showFooter', function(e) {
      e.preventDefault();
      var group = $(this).closest('.group-link');
      var newContent = $(this).siblings('.list-links');

      if(group.hasClass('active')) {
        group.removeClass('active');
        newContent.stop().slideUp();
      }
      else {
        $('.group-link.active .list-links').slideUp();
        $('.group-link.active').removeClass('active');
        group.addClass('active');
        newContent.stop().slideDown();
      }
    });
  });
}(jQuery, window));
