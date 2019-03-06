;(function($, window, undefined) {
  'use strict';

  var pluginName = 'tab';

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
    var $tabs = $('[data-tab]');
      $tabs.responsiveTabs({
          rotate: false,
          startCollapsed: 'accordion',
          collapsible: 'accordion',
          setHash: true,
          // disabled: [3,4]
          
      });
  });
}(jQuery, window));
