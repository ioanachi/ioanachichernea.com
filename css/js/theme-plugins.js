//======================================//
//========== 1. Easing Plugin ==========//
//======================================//
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});


//======================================//
//============= 2. MixItUp =============//
//======================================//
/**!
 * MixItUp v2.1.11
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function($, undf){
  'use strict';

  /**
   * MixItUp Constructor Function
   * @constructor
   * @extends jQuery
   */

  $.MixItUp = function(){
    var self = this;

    self._execAction('_constructor', 0);

    $.extend(self, {

      /* Public Properties
      ---------------------------------------------------------------------- */

      selectors: {
        target: '.mix',
        filter: '.filter',
        sort: '.sort'
      },

      animation: {
        enable: true,
        effects: 'fade scale',
        duration: 600,
        easing: 'ease',
        perspectiveDistance: '3000',
        perspectiveOrigin: '50% 50%',
        queue: true,
        queueLimit: 1,
        animateChangeLayout: false,
        animateResizeContainer: true,
        animateResizeTargets: false,
        staggerSequence: false,
        reverseOut: false
      },

      callbacks: {
        onMixLoad: false,
        onMixStart: false,
        onMixBusy: false,
        onMixEnd: false,
        onMixFail: false,
        _user: false
      },

      controls: {
        enable: true,
        live: false,
        toggleFilterButtons: false,
        toggleLogic: 'or',
        activeClass: 'active'
      },

      layout: {
        display: 'inline-block',
        containerClass: '',
        containerClassFail: 'fail'
      },

      load: {
        filter: 'all',
        sort: false
      },

      /* Private Properties
      ---------------------------------------------------------------------- */

      _$body: null,
      _$container: null,
      _$targets: null,
      _$parent: null,
      _$sortButtons: null,
      _$filterButtons: null,

      _suckMode: false,
      _mixing: false,
      _sorting: false,
      _clicking: false,
      _loading: true,
      _changingLayout: false,
      _changingClass: false,
      _changingDisplay: false,

      _origOrder: [],
      _startOrder: [],
      _newOrder: [],
      _activeFilter: null,
      _toggleArray: [],
      _toggleString: '',
      _activeSort: 'default:asc',
      _newSort: null,
      _startHeight: null,
      _newHeight: null,
      _incPadding: true,
      _newDisplay: null,
      _newClass: null,
      _targetsBound: 0,
      _targetsDone: 0,
      _queue: [],

      _$show: $(),
      _$hide: $()
    });

    self._execAction('_constructor', 1);
  };

  /**
   * MixItUp Prototype
   * @override
   */

  $.MixItUp.prototype = {
    constructor: $.MixItUp,

    /* Static Properties
    ---------------------------------------------------------------------- */

    _instances: {},
    _handled: {
      _filter: {},
      _sort: {}
    },
    _bound: {
      _filter: {},
      _sort: {}
    },
    _actions: {},
    _filters: {},

    /* Static Methods
    ---------------------------------------------------------------------- */

    /**
     * Extend
     * @since 2.1.0
     * @param {object} new properties/methods
     * @extends {object} prototype
     */

    extend: function(extension){
      for(var key in extension){
        $.MixItUp.prototype[key] = extension[key];
      }
    },

    /**
     * Add Action
     * @since 2.1.0
     * @param {string} hook name
     * @param {string} namespace
     * @param {function} function to execute
     * @param {number} priority
     * @extends {object} $.MixItUp.prototype._actions
     */

    addAction: function(hook, name, func, priority){
      $.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
    },

    /**
     * Add Filter
     * @since 2.1.0
     * @param {string} hook name
     * @param {string} namespace
     * @param {function} function to execute
     * @param {number} priority
     * @extends {object} $.MixItUp.prototype._filters
     */

    addFilter: function(hook, name, func, priority){
      $.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
    },

    /**
     * Add Hook
     * @since 2.1.0
     * @param {string} type of hook
     * @param {string} hook name
     * @param {function} function to execute
     * @param {number} priority
     * @extends {object} $.MixItUp.prototype._filters
     */

    _addHook: function(type, hook, name, func, priority){
      var collection = $.MixItUp.prototype[type],
        obj = {};

      priority = (priority === 1 || priority === 'post') ? 'post' : 'pre';

      obj[hook] = {};
      obj[hook][priority] = {};
      obj[hook][priority][name] = func;

      $.extend(true, collection, obj);
    },


    /* Private Methods
    ---------------------------------------------------------------------- */

    /**
     * Initialise
     * @since 2.0.0
     * @param {object} domNode
     * @param {object} config
     */

    _init: function(domNode, config){
      var self = this;

      self._execAction('_init', 0, arguments);

      config && $.extend(true, self, config);

      self._$body = $('body');
      self._domNode = domNode;
      self._$container = $(domNode);
      self._$container.addClass(self.layout.containerClass);
      self._id = domNode.id;

      self._platformDetect();

      self._brake = self._getPrefixedCSS('transition', 'none');

      self._refresh(true);

      self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;

      if(self.load.sort){
        self._newSort = self._parseSort(self.load.sort);
        self._newSortString = self.load.sort;
        self._activeSort = self.load.sort;
        self._sort();
        self._printSort();
      }

      self._activeFilter = self.load.filter === 'all' ?
        self.selectors.target :
        self.load.filter === 'none' ?
          '' :
          self.load.filter;

      self.controls.enable && self._bindHandlers();

      if(self.controls.toggleFilterButtons){
        self._buildToggleArray();

        for(var i = 0; i < self._toggleArray.length; i++){
          self._updateControls({filter: self._toggleArray[i], sort: self._activeSort}, true);
        };
      } else if(self.controls.enable){
        self._updateControls({filter: self._activeFilter, sort: self._activeSort});
      }

      self._filter();

      self._init = true;

      self._$container.data('mixItUp',self);

      self._execAction('_init', 1, arguments);

      self._buildState();

      self._$targets.css(self._brake);

      self._goMix(self.animation.enable);
    },

    /**
     * Platform Detect
     * @since 2.0.0
     */

    _platformDetect: function(){
      var self = this,
        vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
        vendorsRAF = ['webkit', 'moz'],
        chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
        ff = typeof InstallTrigger !== 'undefined',
        prefix = function(el){
          for (var i = 0; i < vendorsTrans.length; i++){
            if (vendorsTrans[i] + 'Transition' in el.style){
              return {
                prefix: '-'+vendorsTrans[i].toLowerCase()+'-',
                vendor: vendorsTrans[i]
              };
            };
          };
          return 'transition' in el.style ? '' : false;
        },
        transPrefix = prefix(self._domNode);

      self._execAction('_platformDetect', 0);

      self._chrome = chrome ? parseInt(chrome[1], 10) : false;
      self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
      self._prefix = transPrefix.prefix;
      self._vendor = transPrefix.vendor;
      self._suckMode = window.atob && self._prefix ? false : true;

      self._suckMode && (self.animation.enable = false);
      (self._ff && self._ff <= 4) && (self.animation.enable = false);

      /* Polyfills
      ---------------------------------------------------------------------- */

      /**
       * window.requestAnimationFrame
       */

      for(var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++){
        window.requestAnimationFrame = window[vendorsRAF[x]+'RequestAnimationFrame'];
      }

      /**
       * Object.getPrototypeOf
       */

      if(typeof Object.getPrototypeOf !== 'function'){
        if(typeof 'test'.__proto__ === 'object'){
          Object.getPrototypeOf = function(object){
            return object.__proto__;
          };
        } else {
          Object.getPrototypeOf = function(object){
            return object.constructor.prototype;
          };
        }
      }

      /**
       * Element.nextElementSibling
       */

      if(self._domNode.nextElementSibling === undf){
        Object.defineProperty(Element.prototype, 'nextElementSibling',{
          get: function(){
            var el = this.nextSibling;

            while(el){
              if(el.nodeType ===1){
                return el;
              }
              el = el.nextSibling;
            }
            return null;
          }
        });
      }

      self._execAction('_platformDetect', 1);
    },

    /**
     * Refresh
     * @since 2.0.0
     * @param {boolean} init
     * @param {boolean} force
     */

    _refresh: function(init, force){
      var self = this;

      self._execAction('_refresh', 0, arguments);

      self._$targets = self._$container.find(self.selectors.target);

      for(var i = 0; i < self._$targets.length; i++){
        var target = self._$targets[i];

        if(target.dataset === undf || force){

          target.dataset = {};

          for(var j = 0; j < target.attributes.length; j++){

            var attr = target.attributes[j],
              name = attr.name,
              val = attr.value;

            if(name.indexOf('data-') > -1){
              var dataName = self._helpers._camelCase(name.substring(5,name.length));
              target.dataset[dataName] = val;
            }
          }
        }

        if(target.mixParent === undf){
          target.mixParent = self._id;
        }
      }

      if(
        (self._$targets.length && init) ||
        (!self._origOrder.length && self._$targets.length)
      ){
        self._origOrder = [];

        for(var i = 0; i < self._$targets.length; i++){
          var target = self._$targets[i];

          self._origOrder.push(target);
        }
      }

      self._execAction('_refresh', 1, arguments);
    },

    /**
     * Bind Handlers
     * @since 2.0.0
     */

    _bindHandlers: function(){
      var self = this,
        filters = $.MixItUp.prototype._bound._filter,
        sorts = $.MixItUp.prototype._bound._sort;

      self._execAction('_bindHandlers', 0);

      if(self.controls.live){
        self._$body
          .on('click.mixItUp.'+self._id, self.selectors.sort, function(){
            self._processClick($(this), 'sort');
          })
          .on('click.mixItUp.'+self._id, self.selectors.filter, function(){
            self._processClick($(this), 'filter');
          });
      } else {
        self._$sortButtons = $(self.selectors.sort);
        self._$filterButtons = $(self.selectors.filter);

        self._$sortButtons.on('click.mixItUp.'+self._id, function(){
          self._processClick($(this), 'sort');
        });

        self._$filterButtons.on('click.mixItUp.'+self._id, function(){
          self._processClick($(this), 'filter');
        });
      }

      filters[self.selectors.filter] = (filters[self.selectors.filter] === undf) ? 1 : filters[self.selectors.filter] + 1;
      sorts[self.selectors.sort] = (sorts[self.selectors.sort] === undf) ? 1 : sorts[self.selectors.sort] + 1;

      self._execAction('_bindHandlers', 1);
    },

    /**
     * Process Click
     * @since 2.0.0
     * @param {object} $button
     * @param {string} type
     */

    _processClick: function($button, type){
      var self = this,
        trackClick = function($button, type, off){
          var proto = $.MixItUp.prototype;

          proto._handled['_'+type][self.selectors[type]] = (proto._handled['_'+type][self.selectors[type]] === undf) ?
            1 :
            proto._handled['_'+type][self.selectors[type]] + 1;

          if(proto._handled['_'+type][self.selectors[type]] === proto._bound['_'+type][self.selectors[type]]){
            $button[(off ? 'remove' : 'add')+'Class'](self.controls.activeClass);
            delete proto._handled['_'+type][self.selectors[type]];
          }
        };

      self._execAction('_processClick', 0, arguments);

      if(!self._mixing || (self.animation.queue && self._queue.length < self.animation.queueLimit)){
        self._clicking = true;

        if(type === 'sort'){
          var sort = $button.attr('data-sort');

          if(!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1){
            $(self.selectors.sort).removeClass(self.controls.activeClass);
            trackClick($button, type);
            self.sort(sort);
          }
        }

        if(type === 'filter') {
          var filter = $button.attr('data-filter'),
            ndx,
            seperator = self.controls.toggleLogic === 'or' ? ',' : '';

          if(!self.controls.toggleFilterButtons){
            if(!$button.hasClass(self.controls.activeClass)){
              $(self.selectors.filter).removeClass(self.controls.activeClass);
              trackClick($button, type);
              self.filter(filter);
            }
          } else {
            self._buildToggleArray();

            if(!$button.hasClass(self.controls.activeClass)){
              trackClick($button, type);

              self._toggleArray.push(filter);
            } else {
              trackClick($button, type, true);
              ndx = self._toggleArray.indexOf(filter);
              self._toggleArray.splice(ndx, 1);
            }

            self._toggleArray = $.grep(self._toggleArray,function(n){return(n);});

            self._toggleString = self._toggleArray.join(seperator);

            self.filter(self._toggleString);
          }
        }

        self._execAction('_processClick', 1, arguments);
      } else {
        if(typeof self.callbacks.onMixBusy === 'function'){
          self.callbacks.onMixBusy.call(self._domNode, self._state, self);
        }
        self._execAction('_processClickBusy', 1, arguments);
      }
    },

    /**
     * Build Toggle Array
     * @since 2.0.0
     */

    _buildToggleArray: function(){
      var self = this,
        activeFilter = self._activeFilter.replace(/\s/g, '');

      self._execAction('_buildToggleArray', 0, arguments);

      if(self.controls.toggleLogic === 'or'){
        self._toggleArray = activeFilter.split(',');
      } else {
        self._toggleArray = activeFilter.split('.');

        !self._toggleArray[0] && self._toggleArray.shift();

        for(var i = 0, filter; filter = self._toggleArray[i]; i++){
          self._toggleArray[i] = '.'+filter;
        }
      }

      self._execAction('_buildToggleArray', 1, arguments);
    },

    /**
     * Update Controls
     * @since 2.0.0
     * @param {object} command
     * @param {boolean} multi
     */

    _updateControls: function(command, multi){
      var self = this,
        output = {
          filter: command.filter,
          sort: command.sort
        },
        update = function($el, filter){
          try {
            (multi && type === 'filter' && !(output.filter === 'none' || output.filter === '')) ?
                $el.filter(filter).addClass(self.controls.activeClass) :
                $el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
          } catch(e) {}
        },
        type = 'filter',
        $el = null;

      self._execAction('_updateControls', 0, arguments);

      (command.filter === undf) && (output.filter = self._activeFilter);
      (command.sort === undf) && (output.sort = self._activeSort);
      (output.filter === self.selectors.target) && (output.filter = 'all');

      for(var i = 0; i < 2; i++){
        $el = self.controls.live ? $(self.selectors[type]) : self['_$'+type+'Buttons'];
        $el && update($el, '[data-'+type+'="'+output[type]+'"]');
        type = 'sort';
      }

      self._execAction('_updateControls', 1, arguments);
    },

    /**
     * Filter (private)
     * @since 2.0.0
     */

    _filter: function(){
      var self = this;

      self._execAction('_filter', 0);

      for(var i = 0; i < self._$targets.length; i++){
        var $target = $(self._$targets[i]);

        if($target.is(self._activeFilter)){
          self._$show = self._$show.add($target);
        } else {
          self._$hide = self._$hide.add($target);
        }
      }

      self._execAction('_filter', 1);
    },

    /**
     * Sort (private)
     * @since 2.0.0
     */

    _sort: function(){
      var self = this,
        arrayShuffle = function(oldArray){
          var newArray = oldArray.slice(),
            len = newArray.length,
            i = len;

          while(i--){
            var p = parseInt(Math.random()*len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
          };
          return newArray;
        };

      self._execAction('_sort', 0);

      self._startOrder = [];

      for(var i = 0; i < self._$targets.length; i++){
        var target = self._$targets[i];

        self._startOrder.push(target);
      }

      switch(self._newSort[0].sortBy){
        case 'default':
          self._newOrder = self._origOrder;
          break;
        case 'random':
          self._newOrder = arrayShuffle(self._startOrder);
          break;
        case 'custom':
          self._newOrder = self._newSort[0].order;
          break;
        default:
          self._newOrder = self._startOrder.concat().sort(function(a, b){
            return self._compare(a, b);
          });
      }

      self._execAction('_sort', 1);
    },

    /**
     * Compare Algorithm
     * @since 2.0.0
     * @param {string|number} a
     * @param {string|number} b
     * @param {number} depth (recursion)
     * @return {number}
     */

    _compare: function(a, b, depth){
      depth = depth ? depth : 0;

      var self = this,
        order = self._newSort[depth].order,
        getData = function(el){
          return el.dataset[self._newSort[depth].sortBy] || 0;
        },
        attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
        attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;

      if(attrA < attrB)
        return order === 'asc' ? -1 : 1;
      if(attrA > attrB)
        return order === 'asc' ? 1 : -1;
      if(attrA === attrB && self._newSort.length > depth+1)
        return self._compare(a, b, depth+1);

      return 0;
    },

    /**
     * Print Sort
     * @since 2.0.0
     * @param {boolean} reset
     */

    _printSort: function(reset){
      var self = this,
        order = reset ? self._startOrder : self._newOrder,
        targets = self._$parent[0].querySelectorAll(self.selectors.target),
        nextSibling = targets.length ? targets[targets.length -1].nextElementSibling : null,
        frag = document.createDocumentFragment();

      self._execAction('_printSort', 0, arguments);

      for(var i = 0; i < targets.length; i++){
        var target = targets[i],
          whiteSpace = target.nextSibling;

        if(target.style.position === 'absolute') continue;

        if(whiteSpace && whiteSpace.nodeName === '#text'){
          self._$parent[0].removeChild(whiteSpace);
        }

        self._$parent[0].removeChild(target);
      }

      for(var i = 0; i < order.length; i++){
        var el = order[i];

        if(self._newSort[0].sortBy === 'default' && self._newSort[0].order === 'desc' && !reset){
          var firstChild = frag.firstChild;
          frag.insertBefore(el, firstChild);
          frag.insertBefore(document.createTextNode(' '), el);
        } else {
          frag.appendChild(el);
          frag.appendChild(document.createTextNode(' '));
        }
      }

      nextSibling ?
        self._$parent[0].insertBefore(frag, nextSibling) :
        self._$parent[0].appendChild(frag);

      self._execAction('_printSort', 1, arguments);
    },

    /**
     * Parse Sort
     * @since 2.0.0
     * @param {string} sortString
     * @return {array} newSort
     */

    _parseSort: function(sortString){
      var self = this,
        rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
        newSort = [];

      for(var i = 0; i < rules.length; i++){
        var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
          ruleObj = {
            sortBy: self._helpers._camelCase(rule[0]),
            order: rule[1] || 'asc'
          };

        newSort.push(ruleObj);

        if(ruleObj.sortBy === 'default' || ruleObj.sortBy === 'random') break;
      }

      return self._execFilter('_parseSort', newSort, arguments);
    },

    /**
     * Parse Effects
     * @since 2.0.0
     * @return {object} effects
     */

    _parseEffects: function(){
      var self = this,
        effects = {
          opacity: '',
          transformIn: '',
          transformOut: '',
          filter: ''
        },
        parse = function(effect, extract, reverse){
          if(self.animation.effects.indexOf(effect) > -1){
            if(extract){
              var propIndex = self.animation.effects.indexOf(effect+'(');
              if(propIndex > -1){
                var str = self.animation.effects.substring(propIndex),
                  match = /\(([^)]+)\)/.exec(str),
                  val = match[1];

                  return {val: val};
              }
            }
            return true;
          } else {
            return false;
          }
        },
        negate = function(value, invert){
          if(invert){
            return value.charAt(0) === '-' ? value.substr(1, value.length) : '-'+value;
          } else {
            return value;
          }
        },
        buildTransform = function(key, invert){
          var transforms = [
            ['scale', '.01'],
            ['translateX', '20px'],
            ['translateY', '20px'],
            ['translateZ', '20px'],
            ['rotateX', '90deg'],
            ['rotateY', '90deg'],
            ['rotateZ', '180deg'],
          ];

          for(var i = 0; i < transforms.length; i++){
            var prop = transforms[i][0],
              def = transforms[i][1],
              inverted = invert && prop !== 'scale';

            effects[key] += parse(prop) ? prop+'('+negate(parse(prop, true).val || def, inverted)+') ' : '';
          }
        };

      effects.opacity = parse('fade') ? parse('fade',true).val || '0' : '1';

      buildTransform('transformIn');

      self.animation.reverseOut ? buildTransform('transformOut', true) : (effects.transformOut = effects.transformIn);

      effects.transition = {};

      effects.transition = self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+', opacity '+self.animation.duration+'ms linear');

      self.animation.stagger = parse('stagger') ? true : false;
      self.animation.staggerDuration = parseInt(parse('stagger') ? (parse('stagger',true).val ? parse('stagger',true).val : 100) : 100);

      return self._execFilter('_parseEffects', effects);
    },

    /**
     * Build State
     * @since 2.0.0
     * @param {boolean} future
     * @return {object} futureState
     */

    _buildState: function(future){
      var self = this,
        state = {};

      self._execAction('_buildState', 0);

      state = {
        activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
        activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
        fail: !self._$show.length && self._activeFilter !== '',
        $targets: self._$targets,
        $show: self._$show,
        $hide: self._$hide,
        totalTargets: self._$targets.length,
        totalShow: self._$show.length,
        totalHide: self._$hide.length,
        display: future && self._newDisplay ? self._newDisplay : self.layout.display
      };

      if(future){
        return self._execFilter('_buildState', state);
      } else {
        self._state = state;

        self._execAction('_buildState', 1);
      }
    },

    /**
     * Go Mix
     * @since 2.0.0
     * @param {boolean} animate
     */

    _goMix: function(animate){
      var self = this,
        phase1 = function(){
          if(self._chrome && (self._chrome === 31)){
            chromeFix(self._$parent[0]);
          }

          self._setInter();

          phase2();
        },
        phase2 = function(){
          var scrollTop = window.pageYOffset,
            scrollLeft = window.pageXOffset,
            docHeight = document.documentElement.scrollHeight;

          self._getInterMixData();

          self._setFinal();

          self._getFinalMixData();

          (window.pageYOffset !== scrollTop) && window.scrollTo(scrollLeft, scrollTop);

          self._prepTargets();

          if(window.requestAnimationFrame){
            requestAnimationFrame(phase3);
          } else {
            setTimeout(function(){
              phase3();
            },20);
          }
        },
        phase3 = function(){
          self._animateTargets();

          if(self._targetsBound === 0){
            self._cleanUp();
          }
        },
        chromeFix = function(grid){
          var parent = grid.parentElement,
            placeholder = document.createElement('div'),
            frag = document.createDocumentFragment();

          parent.insertBefore(placeholder, grid);
          frag.appendChild(grid);
          parent.replaceChild(grid, placeholder);
        },
        futureState = self._buildState(true);

      self._execAction('_goMix', 0, arguments);

      !self.animation.duration && (animate = false);

      self._mixing = true;

      self._$container.removeClass(self.layout.containerClassFail);

      if(typeof self.callbacks.onMixStart === 'function'){
        self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
      }

      self._$container.trigger('mixStart', [self._state, futureState, self]);

      self._getOrigMixData();

      if(animate && !self._suckMode){

        window.requestAnimationFrame ?
          requestAnimationFrame(phase1) :
          phase1();

      } else {
        self._cleanUp();
      }

      self._execAction('_goMix', 1, arguments);
    },

    /**
     * Get Target Data
     * @since 2.0.0
     */

    _getTargetData: function(el, stage){
      var self = this,
        elStyle;

      el.dataset[stage+'PosX'] = el.offsetLeft;
      el.dataset[stage+'PosY'] = el.offsetTop;

      if(self.animation.animateResizeTargets){
        elStyle = !self._suckMode ?
          window.getComputedStyle(el) :
          {
            marginBottom: '',
            marginRight: ''
          };

        el.dataset[stage+'MarginBottom'] = parseInt(elStyle.marginBottom);
        el.dataset[stage+'MarginRight'] = parseInt(elStyle.marginRight);
        el.dataset[stage+'Width'] = el.offsetWidth;
        el.dataset[stage+'Height'] = el.offsetHeight;
      }
    },

    /**
     * Get Original Mix Data
     * @since 2.0.0
     */

    _getOrigMixData: function(){
      var self = this,
        parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : {boxSizing: ''},
        parentBS = parentStyle.boxSizing || parentStyle[self._vendor+'BoxSizing'];

      self._incPadding = (parentBS === 'border-box');

      self._execAction('_getOrigMixData', 0);

      !self._suckMode && (self.effects = self._parseEffects());

      self._$toHide = self._$hide.filter(':visible');
      self._$toShow = self._$show.filter(':hidden');
      self._$pre = self._$targets.filter(':visible');

      self._startHeight = self._incPadding ?
        self._$parent.outerHeight() :
        self._$parent.height();

      for(var i = 0; i < self._$pre.length; i++){
        var el = self._$pre[i];

        self._getTargetData(el, 'orig');
      }

      self._execAction('_getOrigMixData', 1);
    },

    /**
     * Set Intermediate Positions
     * @since 2.0.0
     */

    _setInter: function(){
      var self = this;

      self._execAction('_setInter', 0);

      if(self._changingLayout && self.animation.animateChangeLayout){
        self._$toShow.css('display',self._newDisplay);

        if(self._changingClass){
          self._$container
            .removeClass(self.layout.containerClass)
            .addClass(self._newClass);
        }
      } else {
        self._$toShow.css('display', self.layout.display);
      }

      self._execAction('_setInter', 1);
    },

    /**
     * Get Intermediate Mix Data
     * @since 2.0.0
     */

    _getInterMixData: function(){
      var self = this;

      self._execAction('_getInterMixData', 0);

      for(var i = 0; i < self._$toShow.length; i++){
        var el = self._$toShow[i];

        self._getTargetData(el, 'inter');
      }

      for(var i = 0; i < self._$pre.length; i++){
        var el = self._$pre[i];

        self._getTargetData(el, 'inter');
      }

      self._execAction('_getInterMixData', 1);
    },

    /**
     * Set Final Positions
     * @since 2.0.0
     */

    _setFinal: function(){
      var self = this;

      self._execAction('_setFinal', 0);

      self._sorting && self._printSort();

      self._$toHide.removeStyle('display');

      if(self._changingLayout && self.animation.animateChangeLayout){
        self._$pre.css('display',self._newDisplay);
      }

      self._execAction('_setFinal', 1);
    },

    /**
     * Get Final Mix Data
     * @since 2.0.0
     */

    _getFinalMixData: function(){
      var self = this;

      self._execAction('_getFinalMixData', 0);

      for(var i = 0; i < self._$toShow.length; i++){
        var el = self._$toShow[i];

        self._getTargetData(el, 'final');
      }

      for(var i = 0; i < self._$pre.length; i++){
        var el = self._$pre[i];

        self._getTargetData(el, 'final');
      }

      self._newHeight = self._incPadding ?
        self._$parent.outerHeight() :
        self._$parent.height();

      self._sorting && self._printSort(true);

      self._$toShow.removeStyle('display');

      self._$pre.css('display',self.layout.display);

      if(self._changingClass && self.animation.animateChangeLayout){
        self._$container
          .removeClass(self._newClass)
          .addClass(self.layout.containerClass);
      }

      self._execAction('_getFinalMixData', 1);
    },

    /**
     * Prepare Targets
     * @since 2.0.0
     */

    _prepTargets: function(){
      var self = this,
        transformCSS = {
          _in: self._getPrefixedCSS('transform', self.effects.transformIn),
          _out: self._getPrefixedCSS('transform', self.effects.transformOut)
        };

      self._execAction('_prepTargets', 0);

      if(self.animation.animateResizeContainer){
        self._$parent.css('height',self._startHeight+'px');
      }

      for(var i = 0; i < self._$toShow.length; i++){
        var el = self._$toShow[i],
          $el = $(el);

        el.style.opacity = self.effects.opacity;
        el.style.display = (self._changingLayout && self.animation.animateChangeLayout) ?
          self._newDisplay :
          self.layout.display;

        $el.css(transformCSS._in);

        if(self.animation.animateResizeTargets){
          el.style.width = el.dataset.finalWidth+'px';
          el.style.height = el.dataset.finalHeight+'px';
          el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + (el.dataset.finalMarginRight * 1)+'px';
          el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + (el.dataset.finalMarginBottom * 1)+'px';
        }
      }

      for(var i = 0; i < self._$pre.length; i++){
        var el = self._$pre[i],
          $el = $(el),
          translate = {
            x: el.dataset.origPosX - el.dataset.interPosX,
            y: el.dataset.origPosY - el.dataset.interPosY
          },
          transformCSS = self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)');

        $el.css(transformCSS);

        if(self.animation.animateResizeTargets){
          el.style.width = el.dataset.origWidth+'px';
          el.style.height = el.dataset.origHeight+'px';

          if(el.dataset.origWidth - el.dataset.finalWidth){
            el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + (el.dataset.origMarginRight * 1)+'px';
          }

          if(el.dataset.origHeight - el.dataset.finalHeight){
            el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + (el.dataset.origMarginBottom * 1) +'px';
          }
        }
      }

      self._execAction('_prepTargets', 1);
    },

    /**
     * Animate Targets
     * @since 2.0.0
     */

    _animateTargets: function(){
      var self = this;

      self._execAction('_animateTargets', 0);

      self._targetsDone = 0;
      self._targetsBound = 0;

      self._$parent
        .css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance+'px'))
        .css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));

      if(self.animation.animateResizeContainer){
        self._$parent
          .css(self._getPrefixedCSS('transition','height '+self.animation.duration+'ms ease'))
          .css('height',self._newHeight+'px');
      }

      for(var i = 0; i < self._$toShow.length; i++){
        var el = self._$toShow[i],
          $el = $(el),
          translate = {
            x: el.dataset.finalPosX - el.dataset.interPosX,
            y: el.dataset.finalPosY - el.dataset.interPosY
          },
          delay = self._getDelay(i),
          toShowCSS = {};

        el.style.opacity = '';

        for(var j = 0; j < 2; j++){
          var a = j === 0 ? a = self._prefix : '';

          if(self._ff && self._ff <= 20){
            toShowCSS[a+'transition-property'] = 'all';
            toShowCSS[a+'transition-timing-function'] = self.animation.easing+'ms';
            toShowCSS[a+'transition-duration'] = self.animation.duration+'ms';
          }

          toShowCSS[a+'transition-delay'] = delay+'ms';
          toShowCSS[a+'transform'] = 'translate('+translate.x+'px,'+translate.y+'px)';
        }

        if(self.effects.transform || self.effects.opacity){
          self._bindTargetDone($el);
        }

        (self._ff && self._ff <= 20) ?
          $el.css(toShowCSS) :
          $el.css(self.effects.transition).css(toShowCSS);
      }

      for(var i = 0; i < self._$pre.length; i++){
        var el = self._$pre[i],
          $el = $(el),
          translate = {
            x: el.dataset.finalPosX - el.dataset.interPosX,
            y: el.dataset.finalPosY - el.dataset.interPosY
          },
          delay = self._getDelay(i);

        if(!(
          el.dataset.finalPosX === el.dataset.origPosX &&
          el.dataset.finalPosY === el.dataset.origPosY
        )){
          self._bindTargetDone($el);
        }

        $el.css(self._getPrefixedCSS('transition', 'all '+self.animation.duration+'ms '+self.animation.easing+' '+delay+'ms'));
        $el.css(self._getPrefixedCSS('transform', 'translate('+translate.x+'px,'+translate.y+'px)'));

        if(self.animation.animateResizeTargets){
          if(el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1){
            el.style.width = el.dataset.finalWidth+'px';
            el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth)+(el.dataset.finalMarginRight * 1)+'px';
          }

          if(el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1){
            el.style.height = el.dataset.finalHeight+'px';
            el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight)+(el.dataset.finalMarginBottom * 1) +'px';
          }
        }
      }

      if(self._changingClass){
        self._$container
          .removeClass(self.layout.containerClass)
          .addClass(self._newClass);
      }

      for(var i = 0; i < self._$toHide.length; i++){
        var el = self._$toHide[i],
          $el = $(el),
          delay = self._getDelay(i),
          toHideCSS = {};

        for(var j = 0; j<2; j++){
          var a = j === 0 ? a = self._prefix : '';

          toHideCSS[a+'transition-delay'] = delay+'ms';
          toHideCSS[a+'transform'] = self.effects.transformOut;
          toHideCSS.opacity = self.effects.opacity;
        }

        $el.css(self.effects.transition).css(toHideCSS);

        if(self.effects.transform || self.effects.opacity){
          self._bindTargetDone($el);
        };
      }

      self._execAction('_animateTargets', 1);

    },

    /**
     * Bind Targets TransitionEnd
     * @since 2.0.0
     * @param {object} $el
     */

    _bindTargetDone: function($el){
      var self = this,
        el = $el[0];

      self._execAction('_bindTargetDone', 0, arguments);

      if(!el.dataset.bound){

        el.dataset.bound = true;
        self._targetsBound++;

        $el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp',function(e){
          if(
            (e.originalEvent.propertyName.indexOf('transform') > -1 ||
            e.originalEvent.propertyName.indexOf('opacity') > -1) &&
            $(e.originalEvent.target).is(self.selectors.target)
          ){
            $el.off('.mixItUp');
            el.dataset.bound = '';
            self._targetDone();
          }
        });
      }

      self._execAction('_bindTargetDone', 1, arguments);
    },

    /**
     * Target Done
     * @since 2.0.0
     */

    _targetDone: function(){
      var self = this;

      self._execAction('_targetDone', 0);

      self._targetsDone++;

      (self._targetsDone === self._targetsBound) && self._cleanUp();

      self._execAction('_targetDone', 1);
    },

    /**
     * Clean Up
     * @since 2.0.0
     */

    _cleanUp: function(){
      var self = this,
        targetStyles = self.animation.animateResizeTargets ?
          'transform opacity width height margin-bottom margin-right' :
          'transform opacity',
        unBrake = function(){
          self._$targets.removeStyle('transition', self._prefix);
        };

      self._execAction('_cleanUp', 0);

      !self._changingLayout ?
        self._$show.css('display',self.layout.display) :
        self._$show.css('display',self._newDisplay);

      self._$targets.css(self._brake);

      self._$targets
        .removeStyle(targetStyles, self._prefix)
        .removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');

      self._$hide.removeStyle('display');

      self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);

      if(self._sorting){
        self._printSort();
        self._activeSort = self._newSortString;
        self._sorting = false;
      }

      if(self._changingLayout){
        if(self._changingDisplay){
          self.layout.display = self._newDisplay;
          self._changingDisplay = false;
        }

        if(self._changingClass){
          self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);
          self.layout.containerClass = self._newClass;
          self._changingClass = false;
        }

        self._changingLayout = false;
      }

      self._refresh();

      self._buildState();

      if(self._state.fail){
        self._$container.addClass(self.layout.containerClassFail);
      }

      self._$show = $();
      self._$hide = $();

      if(window.requestAnimationFrame){
        requestAnimationFrame(unBrake);
      }

      self._mixing = false;

      if(typeof self.callbacks._user === 'function'){
        self.callbacks._user.call(self._domNode, self._state, self);
      }

      if(typeof self.callbacks.onMixEnd === 'function'){
        self.callbacks.onMixEnd.call(self._domNode, self._state, self);
      }

      self._$container.trigger('mixEnd', [self._state, self]);

      if(self._state.fail){
        (typeof self.callbacks.onMixFail === 'function') && self.callbacks.onMixFail.call(self._domNode, self._state, self);
        self._$container.trigger('mixFail', [self._state, self]);
      }

      if(self._loading){
        (typeof self.callbacks.onMixLoad === 'function') && self.callbacks.onMixLoad.call(self._domNode, self._state, self);
        self._$container.trigger('mixLoad', [self._state, self]);
      }

      if(self._queue.length){
        self._execAction('_queue', 0);

        self.multiMix(self._queue[0][0],self._queue[0][1],self._queue[0][2]);
        self._queue.splice(0, 1);
      }

      self._execAction('_cleanUp', 1);

      self._loading = false;
    },

    /**
     * Get Prefixed CSS
     * @since 2.0.0
     * @param {string} property
     * @param {string} value
     * @param {boolean} prefixValue
     * @return {object} styles
     */

    _getPrefixedCSS: function(property, value, prefixValue){
      var self = this,
        styles = {},
        prefix = '',
        i = -1;

      for(i = 0; i < 2; i++){
        prefix = i === 0 ? self._prefix : '';
        prefixValue ? styles[prefix+property] = prefix+value : styles[prefix+property] = value;
      }

      return self._execFilter('_getPrefixedCSS', styles, arguments);
    },

    /**
     * Get Delay
     * @since 2.0.0
     * @param {number} i
     * @return {number} delay
     */

    _getDelay: function(i){
      var self = this,
        n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
        delay = self.animation.stagger ? n * self.animation.staggerDuration : 0;

      return self._execFilter('_getDelay', delay, arguments);
    },

    /**
     * Parse MultiMix Arguments
     * @since 2.0.0
     * @param {array} args
     * @return {object} output
     */

    _parseMultiMixArgs: function(args){
      var self = this,
        output = {
          command: null,
          animate: self.animation.enable,
          callback: null
        };

      for(var i = 0; i < args.length; i++){
        var arg = args[i];

        if(arg !== null){
          if(typeof arg === 'object' || typeof arg === 'string'){
            output.command = arg;
          } else if(typeof arg === 'boolean'){
            output.animate = arg;
          } else if(typeof arg === 'function'){
            output.callback = arg;
          }
        }
      }

      return self._execFilter('_parseMultiMixArgs', output, arguments);
    },

    /**
     * Parse Insert Arguments
     * @since 2.0.0
     * @param {array} args
     * @return {object} output
     */

    _parseInsertArgs: function(args){
      var self = this,
        output = {
          index: 0,
          $object: $(),
          multiMix: {filter: self._state.activeFilter},
          callback: null
        };

      for(var i = 0; i < args.length; i++){
        var arg = args[i];

        if(typeof arg === 'number'){
          output.index = arg;
        } else if(typeof arg === 'object' && arg instanceof $){
          output.$object = arg;
        } else if(typeof arg === 'object' && self._helpers._isElement(arg)){
          output.$object = $(arg);
        } else if(typeof arg === 'object' && arg !== null){
          output.multiMix = arg;
        } else if(typeof arg === 'boolean' && !arg){
          output.multiMix = false;
        } else if(typeof arg === 'function'){
          output.callback = arg;
        }
      }

      return self._execFilter('_parseInsertArgs', output, arguments);
    },

    /**
     * Execute Action
     * @since 2.0.0
     * @param {string} methodName
     * @param {boolean} isPost
     * @param {array} args
     */

    _execAction: function(methodName, isPost, args){
      var self = this,
        context = isPost ? 'post' : 'pre';

      if(!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)){
        for(var key in self._actions[methodName][context]){
          self._actions[methodName][context][key].call(self, args);
        }
      }
    },

    /**
     * Execute Filter
     * @since 2.0.0
     * @param {string} methodName
     * @param {mixed} value
     * @return {mixed} value
     */

    _execFilter: function(methodName, value, args){
      var self = this;

      if(!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)){
        for(var key in self._filters[methodName]){
          return self._filters[methodName][key].call(self, args);
        }
      } else {
        return value;
      }
    },

    /* Helpers
    ---------------------------------------------------------------------- */

    _helpers: {

      /**
       * CamelCase
       * @since 2.0.0
       * @param {string}
       * @return {string}
       */

      _camelCase: function(string){
        return string.replace(/-([a-z])/g, function(g){
            return g[1].toUpperCase();
        });
      },

      /**
       * Is Element
       * @since 2.1.3
       * @param {object} element to test
       * @return {boolean}
       */

      _isElement: function(el){
        if(window.HTMLElement){
          return el instanceof HTMLElement;
        } else {
          return (
            el !== null &&
            el.nodeType === 1 &&
            el.nodeName === 'string'
          );
        }
      }
    },

    /* Public Methods
    ---------------------------------------------------------------------- */

    /**
     * Is Mixing
     * @since 2.0.0
     * @return {boolean}
     */

    isMixing: function(){
      var self = this;

      return self._execFilter('isMixing', self._mixing);
    },

    /**
     * Filter (public)
     * @since 2.0.0
     * @param {array} arguments
     */

    filter: function(){
      var self = this,
        args = self._parseMultiMixArgs(arguments);

      self._clicking && (self._toggleString = '');

      self.multiMix({filter: args.command}, args.animate, args.callback);
    },

    /**
     * Sort (public)
     * @since 2.0.0
     * @param {array} arguments
     */

    sort: function(){
      var self = this,
        args = self._parseMultiMixArgs(arguments);

      self.multiMix({sort: args.command}, args.animate, args.callback);
    },

    /**
     * Change Layout (public)
     * @since 2.0.0
     * @param {array} arguments
     */

    changeLayout: function(){
      var self = this,
        args = self._parseMultiMixArgs(arguments);

      self.multiMix({changeLayout: args.command}, args.animate, args.callback);
    },

    /**
     * MultiMix
     * @since 2.0.0
     * @param {array} arguments
     */

    multiMix: function(){
      var self = this,
        args = self._parseMultiMixArgs(arguments);

      self._execAction('multiMix', 0, arguments);

      if(!self._mixing){
        if(self.controls.enable && !self._clicking){
          self.controls.toggleFilterButtons && self._buildToggleArray();
          self._updateControls(args.command, self.controls.toggleFilterButtons);
        }

        (self._queue.length < 2) && (self._clicking = false);

        delete self.callbacks._user;
        if(args.callback) self.callbacks._user = args.callback;

        var sort = args.command.sort,
          filter = args.command.filter,
          changeLayout = args.command.changeLayout;

        self._refresh();

        if(sort){
          self._newSort = self._parseSort(sort);
          self._newSortString = sort;

          self._sorting = true;
          self._sort();
        }

        if(filter !== undf){
          filter = (filter === 'all') ? self.selectors.target : filter;

          self._activeFilter = filter;
        }

        self._filter();

        if(changeLayout){
          self._newDisplay = (typeof changeLayout === 'string') ? changeLayout : changeLayout.display || self.layout.display;
          self._newClass = changeLayout.containerClass || '';

          if(
            self._newDisplay !== self.layout.display ||
            self._newClass !== self.layout.containerClass
          ){
            self._changingLayout = true;

            self._changingClass = (self._newClass !== self.layout.containerClass);
            self._changingDisplay = (self._newDisplay !== self.layout.display);
          }
        }

        self._$targets.css(self._brake);

        self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);

        self._execAction('multiMix', 1, arguments);

      } else {
        if(self.animation.queue && self._queue.length < self.animation.queueLimit){
          self._queue.push(arguments);

          (self.controls.enable && !self._clicking) && self._updateControls(args.command);

          self._execAction('multiMixQueue', 1, arguments);

        } else {
          if(typeof self.callbacks.onMixBusy === 'function'){
            self.callbacks.onMixBusy.call(self._domNode, self._state, self);
          }
          self._$container.trigger('mixBusy', [self._state, self]);

          self._execAction('multiMixBusy', 1, arguments);
        }
      }
    },

    /**
     * Insert
     * @since 2.0.0
     * @param {array} arguments
     */

    insert: function(){
      var self = this,
        args = self._parseInsertArgs(arguments),
        callback = (typeof args.callback === 'function') ? args.callback : null,
        frag = document.createDocumentFragment(),
        target = (function(){
          self._refresh();

          if(self._$targets.length){
            return (args.index < self._$targets.length || !self._$targets.length) ?
              self._$targets[args.index] :
              self._$targets[self._$targets.length-1].nextElementSibling;
          } else {
            return self._$parent[0].children[0];
          }
        })();

      self._execAction('insert', 0, arguments);

      if(args.$object){
        for(var i = 0; i < args.$object.length; i++){
          var el = args.$object[i];

          frag.appendChild(el);
          frag.appendChild(document.createTextNode(' '));
        }

        self._$parent[0].insertBefore(frag, target);
      }

      self._execAction('insert', 1, arguments);

      if(typeof args.multiMix === 'object'){
        self.multiMix(args.multiMix, callback);
      }
    },

    /**
     * Prepend
     * @since 2.0.0
     * @param {array} arguments
     */

    prepend: function(){
      var self = this,
        args = self._parseInsertArgs(arguments);

      self.insert(0, args.$object, args.multiMix, args.callback);
    },

    /**
     * Append
     * @since 2.0.0
     * @param {array} arguments
     */

    append: function(){
      var self = this,
        args = self._parseInsertArgs(arguments);

      self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
    },

    /**
     * Get Option
     * @since 2.0.0
     * @param {string} string
     * @return {mixed} value
     */

    getOption: function(string){
      var self = this,
        getProperty = function(obj, prop){
          var parts = prop.split('.'),
            last = parts.pop(),
            l = parts.length,
            i = 1,
            current = parts[0] || prop;

          while((obj = obj[current]) && i < l){
            current = parts[i];
            i++;
          }

          if(obj !== undf){
            return obj[last] !== undf ? obj[last] : obj;
          }
        };

      return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
    },

    /**
     * Set Options
     * @since 2.0.0
     * @param {object} config
     */

    setOptions: function(config){
      var self = this;

      self._execAction('setOptions', 0, arguments);

      typeof config === 'object' && $.extend(true, self, config);

      self._execAction('setOptions', 1, arguments);
    },

    /**
     * Get State
     * @since 2.0.0
     * @return {object} state
     */

    getState: function(){
      var self = this;

      return self._execFilter('getState', self._state, self);
    },

    /**
     * Force Refresh
     * @since 2.1.2
     */

    forceRefresh: function(){
      var self = this;

      self._refresh(false, true);
    },

    /**
     * Destroy
     * @since 2.0.0
     * @param {boolean} hideAll
     */

    destroy: function(hideAll){
      var self = this,
        filters = $.MixItUp.prototype._bound._filter,
        sorts = $.MixItUp.prototype._bound._sort;

      self._execAction('destroy', 0, arguments);

      self._$body
        .add($(self.selectors.sort))
        .add($(self.selectors.filter))
        .off('.mixItUp');

      for(var i = 0; i < self._$targets.length; i++){
        var target = self._$targets[i];

        hideAll && (target.style.display = '');

        delete target.mixParent;
      }

      self._execAction('destroy', 1, arguments);

      if(filters[self.selectors.filter] && filters[self.selectors.filter] > 1) {
        filters[self.selectors.filter]--;
      } else if(filters[self.selectors.filter] === 1) {
        delete filters[self.selectors.filter];
      }

      if(sorts[self.selectors.sort] && sorts[self.selectors.sort] > 1) {
        sorts[self.selectors.sort]--;
      } else if(sorts[self.selectors.sort] === 1) {
        delete sorts[self.selectors.sort];
      }

      delete $.MixItUp.prototype._instances[self._id];
    }

  };

  /* jQuery Methods
  ---------------------------------------------------------------------- */

  /**
   * jQuery .mixItUp() method
   * @since 2.0.0
   * @extends $.fn
   */

  $.fn.mixItUp = function(){
    var args = arguments,
      dataReturn = [],
      eachReturn,
      _instantiate = function(domNode, settings){
        var instance = new $.MixItUp(),
          rand = function(){
            return ('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6).toUpperCase();
          };

        instance._execAction('_instantiate', 0, arguments);

        domNode.id = !domNode.id ? 'MixItUp'+rand() : domNode.id;

        if(!instance._instances[domNode.id]){
          instance._instances[domNode.id] = instance;
          instance._init(domNode, settings);
        }

        instance._execAction('_instantiate', 1, arguments);
      };

    eachReturn = this.each(function(){
      if(args && typeof args[0] === 'string'){
        var instance = $.MixItUp.prototype._instances[this.id];
        if(args[0] === 'isLoaded'){
          dataReturn.push(instance ? true : false);
        } else {
          var data = instance[args[0]](args[1], args[2], args[3]);
          if(data !== undf)dataReturn.push(data);
        }
      } else {
        _instantiate(this, args[0]);
      }
    });

    if(dataReturn.length){
      return dataReturn.length > 1 ? dataReturn : dataReturn[0];
    } else {
      return eachReturn;
    }
  };

  /**
   * jQuery .removeStyle() method
   * @since 2.0.0
   * @extends $.fn
   */

  $.fn.removeStyle = function(style, prefix){
    prefix = prefix ? prefix : '';

    return this.each(function(){
      var el = this,
        styles = style.split(' ');

      for(var i = 0; i < styles.length; i++){
        for(var j = 0; j < 4; j++){
          switch (j) {
            case 0:
              var prop = styles[i];
              break;
            case 1:
              var prop = $.MixItUp.prototype._helpers._camelCase(prop);
              break;
            case 2:
              var prop = prefix+styles[i];
              break;
            case 3:
              var prop = $.MixItUp.prototype._helpers._camelCase(prefix+styles[i]);
          }

          if(
            el.style[prop] !== undf &&
            typeof el.style[prop] !== 'unknown' &&
            el.style[prop].length > 0
          ){
            el.style[prop] = '';
          }

          if(!prefix && j === 1)break;
        }
      }

      if(el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === ''){
        el.attributes.removeNamedItem('style');
      }
    });
  };

})(jQuery);


//===========================================//
//============= 3. Owl Carousel =============//
//===========================================//
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

  var drag, state, e;

  /**
   * Template for status information about drag and touch events.
   * @private
   */
  drag = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null
  };

  /**
   * Template for some status informations.
   * @private
   */
  state = {
    isTouch: false,
    isScrolling: false,
    isSwiping: false,
    direction: false,
    inMotion: false
  };

  /**
   * Event functions references.
   * @private
   */
  e = {
    _onDragStart: null,
    _onDragMove: null,
    _onDragEnd: null,
    _transitionEnd: null,
    _resizer: null,
    _responsiveCall: null,
    _goToLoop: null,
    _checkVisibile: null
  };

  /**
   * Creates a carousel.
   * @class The Owl Carousel.
   * @public
   * @param {HTMLElement|jQuery} element - The element to create the carousel for.
   * @param {Object} [options] - The options
   */
  function Owl(element, options) {

    /**
     * Current settings for the carousel.
     * @public
     */
    this.settings = null;

    /**
     * Current options set by the caller including defaults.
     * @public
     */
    this.options = $.extend({}, Owl.Defaults, options);

    /**
     * Plugin element.
     * @public
     */
    this.$element = $(element);

    /**
     * Caches informations about drag and touch events.
     */
    this.drag = $.extend({}, drag);

    /**
     * Caches some status informations.
     * @protected
     */
    this.state = $.extend({}, state);

    /**
     * @protected
     * @todo Must be documented
     */
    this.e = $.extend({}, e);

    /**
     * References to the running plugins of this carousel.
     * @protected
     */
    this._plugins = {};

    /**
     * Currently suppressed events to prevent them from beeing retriggered.
     * @protected
     */
    this._supress = {};

    /**
     * Absolute current position.
     * @protected
     */
    this._current = null;

    /**
     * Animation speed in milliseconds.
     * @protected
     */
    this._speed = null;

    /**
     * Coordinates of all items in pixel.
     * @todo The name of this member is missleading.
     * @protected
     */
    this._coordinates = [];

    /**
     * Current breakpoint.
     * @todo Real media queries would be nice.
     * @protected
     */
    this._breakpoint = null;

    /**
     * Current width of the plugin element.
     */
    this._width = null;

    /**
     * All real items.
     * @protected
     */
    this._items = [];

    /**
     * All cloned items.
     * @protected
     */
    this._clones = [];

    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     * @protected
     */
    this._mergers = [];

    /**
     * Invalidated parts within the update process.
     * @protected
     */
    this._invalidated = {};

    /**
     * Ordered list of workers for the update process.
     * @protected
     */
    this._pipe = [];

    $.each(Owl.Plugins, $.proxy(function(key, plugin) {
      this._plugins[key[0].toLowerCase() + key.slice(1)]
        = new plugin(this);
    }, this));

    $.each(Owl.Pipe, $.proxy(function(priority, worker) {
      this._pipe.push({
        'filter': worker.filter,
        'run': $.proxy(worker.run, this)
      });
    }, this));

    this.setup();
    this.initialize();
  }

  /**
   * Default options for the carousel.
   * @public
   */
  Owl.Defaults = {
    items: 3,
    loop: false,
    center: false,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,

    margin: 0,
    stagePadding: 0,

    merge: false,
    mergeFit: true,
    autoWidth: false,

    startPosition: 0,
    rtl: false,

    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,

    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    responsiveClass: false,

    fallbackEasing: 'swing',

    info: false,

    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',

    // Classes and Names
    themeClass: 'owl-theme',
    baseClass: 'owl-carousel',
    itemClass: 'owl-item',
    centerClass: 'center',
    activeClass: 'active'
  };

  /**
   * Enumeration for width.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer'
  };

  /**
   * Contains all registered plugins.
   * @public
   */
  Owl.Plugins = {};

  /**
   * Update pipe.
   */
  Owl.Pipe = [ {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      cache.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: [ 'items', 'settings' ],
    run: function() {
      var cached = this._clones,
        clones = this.$stage.children('.cloned');

      if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
        this.$stage.children('.cloned').remove();
        this._clones = [];
      }
    }
  }, {
    filter: [ 'items', 'settings' ],
    run: function() {
      var i, n,
        clones = this._clones,
        items = this._items,
        delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

      for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
        if (delta > 0) {
          this.$stage.children().eq(items.length + clones.length - 1).remove();
          clones.pop();
          this.$stage.children().eq(0).remove();
          clones.pop();
        } else {
          clones.push(clones.length / 2);
          this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
          clones.push(items.length - 1 - (clones.length - 1) / 2);
          this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
        }
      }
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function() {
      var rtl = (this.settings.rtl ? 1 : -1),
        width = (this.width() / this.settings.items).toFixed(3),
        coordinate = 0, merge, i, n;

      this._coordinates = [];
      for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
        merge = this._mergers[this.relative(i)];
        merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
        coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

        this._coordinates.push(coordinate);
      }
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function() {
      var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
        'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
        'padding-left': this.settings.stagePadding || '',
        'padding-right': this.settings.stagePadding || ''
      };

      this.$stage.css(css);

      css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
      css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

      if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
        for (i = 0, n = this._coordinates.length; i < n; i++) {
          css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
          this.$stage.children().eq(i).css(css);
        }
      } else {
        this.$stage.children().css(css);
      }
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      cache.current && this.reset(this.$stage.children().index(cache.current));
    }
  }, {
    filter: [ 'position' ],
    run: function() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: [ 'width', 'position', 'items', 'settings' ],
    run: function() {
      var rtl = this.settings.rtl ? 1 : -1,
        padding = this.settings.stagePadding * 2,
        begin = this.coordinates(this.current()) + padding,
        end = begin + this.width() * rtl,
        inner, outer, matches = [], i, n;

      for (i = 0, n = this._coordinates.length; i < n; i++) {
        inner = this._coordinates[i - 1] || 0;
        outer = Math.abs(this._coordinates[i]) + padding * rtl;

        if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
          || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
          matches.push(i);
        }
      }

      this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
      this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

      if (this.settings.center) {
        this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
        this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
      }
    }
  } ];

  /**
   * Initializes the carousel.
   * @protected
   */
  Owl.prototype.initialize = function() {
    this.trigger('initialize');

    this.$element
      .addClass(this.settings.baseClass)
      .addClass(this.settings.themeClass)
      .toggleClass('owl-rtl', this.settings.rtl);

    // check support
    this.browserSupport();

    if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
      var imgs, nestedSelector, width;
      imgs = this.$element.find('img');
      nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
      width = this.$element.children(nestedSelector).width();

      if (imgs.length && width <= 0) {
        this.preloadAutoWidthImages(imgs);
        return false;
      }
    }

    this.$element.addClass('owl-loading');

    // create stage
    this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
      .wrap('<div class="owl-stage-outer">');

    // append stage
    this.$element.append(this.$stage.parent());

    // append content
    this.replace(this.$element.children().not(this.$stage.parent()));

    // set view width
    this._width = this.$element.width();

    // update view
    this.refresh();

    this.$element.removeClass('owl-loading').addClass('owl-loaded');

    // attach generic events
    this.eventsCall();

    // attach generic events
    this.internalEvents();

    // attach custom control events
    this.addTriggerableEvents();

    this.trigger('initialized');
  };

  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @public
   */
  Owl.prototype.setup = function() {
    var viewport = this.viewport(),
      overwrites = this.options.responsive,
      match = -1,
      settings = null;

    if (!overwrites) {
      settings = $.extend({}, this.options);
    } else {
      $.each(overwrites, function(breakpoint) {
        if (breakpoint <= viewport && breakpoint > match) {
          match = Number(breakpoint);
        }
      });

      settings = $.extend({}, this.options, overwrites[match]);
      delete settings.responsive;

      // responsive class
      if (settings.responsiveClass) {
        this.$element.attr('class', function(i, c) {
          return c.replace(/\b owl-responsive-\S+/g, '');
        }).addClass('owl-responsive-' + match);
      }
    }

    if (this.settings === null || this._breakpoint !== match) {
      this.trigger('change', { property: { name: 'settings', value: settings } });
      this._breakpoint = match;
      this.settings = settings;
      this.invalidate('settings');
      this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    }
  };

  /**
   * Updates option logic if necessery.
   * @protected
   */
  Owl.prototype.optionsLogic = function() {
    // Toggle Center class
    this.$element.toggleClass('owl-center', this.settings.center);

    // if items number is less than in body
    if (this.settings.loop && this._items.length < this.settings.items) {
      this.settings.loop = false;
    }

    if (this.settings.autoWidth) {
      this.settings.stagePadding = false;
      this.settings.merge = false;
    }
  };

  /**
   * Prepares an item before add.
   * @todo Rename event parameter `content` to `item`.
   * @protected
   * @returns {jQuery|HTMLElement} - The item container.
   */
  Owl.prototype.prepare = function(item) {
    var event = this.trigger('prepare', { content: item });

    if (!event.data) {
      event.data = $('<' + this.settings.itemElement + '/>')
        .addClass(this.settings.itemClass).append(item)
    }

    this.trigger('prepared', { content: event.data });

    return event.data;
  };

  /**
   * Updates the view.
   * @public
   */
  Owl.prototype.update = function() {
    var i = 0,
      n = this._pipe.length,
      filter = $.proxy(function(p) { return this[p] }, this._invalidated),
      cache = {};

    while (i < n) {
      if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }

    this._invalidated = {};
  };

  /**
   * Gets the width of the view.
   * @public
   * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
   * @returns {Number} - The width of the view in pixel.
   */
  Owl.prototype.width = function(dimension) {
    dimension = dimension || Owl.Width.Default;
    switch (dimension) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  };

  /**
   * Refreshes the carousel primarily for adaptive purposes.
   * @public
   */
  Owl.prototype.refresh = function() {
    if (this._items.length === 0) {
      return false;
    }

    var start = new Date().getTime();

    this.trigger('refresh');

    this.setup();

    this.optionsLogic();

    // hide and show methods helps here to set a proper widths,
    // this prevents scrollbar to be calculated in stage width
    this.$stage.addClass('owl-refresh');

    this.update();

    this.$stage.removeClass('owl-refresh');

    this.state.orientation = window.orientation;

    this.watchVisibility();

    this.trigger('refreshed');
  };

  /**
   * Save internal event references and add event based functions.
   * @protected
   */
  Owl.prototype.eventsCall = function() {
    // Save events references
    this.e._onDragStart = $.proxy(function(e) {
      this.onDragStart(e);
    }, this);
    this.e._onDragMove = $.proxy(function(e) {
      this.onDragMove(e);
    }, this);
    this.e._onDragEnd = $.proxy(function(e) {
      this.onDragEnd(e);
    }, this);
    this.e._onResize = $.proxy(function(e) {
      this.onResize(e);
    }, this);
    this.e._transitionEnd = $.proxy(function(e) {
      this.transitionEnd(e);
    }, this);
    this.e._preventClick = $.proxy(function(e) {
      this.preventClick(e);
    }, this);
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onThrottledResize = function() {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onResize = function() {
    if (!this._items.length) {
      return false;
    }

    if (this._width === this.$element.width()) {
      return false;
    }

    if (this.trigger('resize').isDefaultPrevented()) {
      return false;
    }

    this._width = this.$element.width();

    this.invalidate('width');

    this.refresh();

    this.trigger('resized');
  };

  /**
   * Checks for touch/mouse drag event type and add run event handlers.
   * @protected
   */
  Owl.prototype.eventsRouter = function(event) {
    var type = event.type;

    if (type === "mousedown" || type === "touchstart") {
      this.onDragStart(event);
    } else if (type === "mousemove" || type === "touchmove") {
      this.onDragMove(event);
    } else if (type === "mouseup" || type === "touchend") {
      this.onDragEnd(event);
    } else if (type === "touchcancel") {
      this.onDragEnd(event);
    }
  };

  /**
   * Checks for touch/mouse drag options and add necessery event handlers.
   * @protected
   */
  Owl.prototype.internalEvents = function() {
    var isTouch = isTouchSupport(),
      isTouchIE = isTouchSupportIE();

    if (this.settings.mouseDrag){
      this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
      this.$stage.on('dragstart', function() { return false });
      this.$stage.get(0).onselectstart = function() { return false };
    } else {
      this.$element.addClass('owl-text-select-on');
    }

    if (this.settings.touchDrag && !isTouchIE){
      this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
    }

    // catch transitionEnd event
    if (this.transitionEndVendor) {
      this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
    }

    // responsive
    if (this.settings.responsive !== false) {
      this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
    }
  };

  /**
   * Handles touchstart/mousedown event.
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragStart = function(event) {
    var ev, isTouchEvent, pageX, pageY, animatedPos;

    ev = event.originalEvent || event || window.event;

    // prevent right click
    if (ev.which === 3 || this.state.isTouch) {
      return false;
    }

    if (ev.type === 'mousedown') {
      this.$stage.addClass('owl-grab');
    }

    this.trigger('drag');
    this.drag.startTime = new Date().getTime();
    this.speed(0);
    this.state.isTouch = true;
    this.state.isScrolling = false;
    this.state.isSwiping = false;
    this.drag.distance = 0;

    pageX = getTouches(ev).x;
    pageY = getTouches(ev).y;

    // get stage position left
    this.drag.offsetX = this.$stage.position().left;
    this.drag.offsetY = this.$stage.position().top;

    if (this.settings.rtl) {
      this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
        + this.settings.margin;
    }

    // catch position // ie to fix
    if (this.state.inMotion && this.support3d) {
      animatedPos = this.getTransformProperty();
      this.drag.offsetX = animatedPos;
      this.animate(animatedPos);
      this.state.inMotion = true;
    } else if (this.state.inMotion && !this.support3d) {
      this.state.inMotion = false;
      return false;
    }

    this.drag.startX = pageX - this.drag.offsetX;
    this.drag.startY = pageY - this.drag.offsetY;

    this.drag.start = pageX - this.drag.startX;
    this.drag.targetEl = ev.target || ev.srcElement;
    this.drag.updatedX = this.drag.start;

    // to do/check
    // prevent links and images dragging;
    if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
      this.drag.targetEl.draggable = false;
    }

    $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
  };

  /**
   * Handles the touchmove/mousemove events.
   * @todo Simplify
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragMove = function(event) {
    var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

    if (!this.state.isTouch) {
      return;
    }

    if (this.state.isScrolling) {
      return;
    }

    ev = event.originalEvent || event || window.event;

    pageX = getTouches(ev).x;
    pageY = getTouches(ev).y;

    // Drag Direction
    this.drag.currentX = pageX - this.drag.startX;
    this.drag.currentY = pageY - this.drag.startY;
    this.drag.distance = this.drag.currentX - this.drag.offsetX;

    // Check move direction
    if (this.drag.distance < 0) {
      this.state.direction = this.settings.rtl ? 'right' : 'left';
    } else if (this.drag.distance > 0) {
      this.state.direction = this.settings.rtl ? 'left' : 'right';
    }
    // Loop
    if (this.settings.loop) {
      if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
        this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
      } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
        this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
      }
    } else {
      // pull
      minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
      this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
    }

    // Lock browser if swiping horizontal

    if ((this.drag.distance > 8 || this.drag.distance < -8)) {
      if (ev.preventDefault !== undefined) {
        ev.preventDefault();
      } else {
        ev.returnValue = false;
      }
      this.state.isSwiping = true;
    }

    this.drag.updatedX = this.drag.currentX;

    // Lock Owl if scrolling
    if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
      this.state.isScrolling = true;
      this.drag.updatedX = this.drag.start;
    }

    this.animate(this.drag.updatedX);
  };

  /**
   * Handles the touchend/mouseup events.
   * @protected
   */
  Owl.prototype.onDragEnd = function(event) {
    var compareTimes, distanceAbs, closest;

    if (!this.state.isTouch) {
      return;
    }

    if (event.type === 'mouseup') {
      this.$stage.removeClass('owl-grab');
    }

    this.trigger('dragged');

    // prevent links and images dragging;
    this.drag.targetEl.removeAttribute("draggable");

    // remove drag event listeners

    this.state.isTouch = false;
    this.state.isScrolling = false;
    this.state.isSwiping = false;

    // to check
    if (this.drag.distance === 0 && this.state.inMotion !== true) {
      this.state.inMotion = false;
      return false;
    }

    // prevent clicks while scrolling

    this.drag.endTime = new Date().getTime();
    compareTimes = this.drag.endTime - this.drag.startTime;
    distanceAbs = Math.abs(this.drag.distance);

    // to test
    if (distanceAbs > 3 || compareTimes > 300) {
      this.removeClick(this.drag.targetEl);
    }

    closest = this.closest(this.drag.updatedX);

    this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
    this.current(closest);
    this.invalidate('position');
    this.update();

    // if pullDrag is off then fire transitionEnd event manually when stick
    // to border
    if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
      this.transitionEnd();
    }

    this.drag.distance = 0;

    $(document).off('.owl.dragEvents');
  };

  /**
   * Attaches `preventClick` to disable link while swipping.
   * @protected
   * @param {HTMLElement} [target] - The target of the `click` event.
   */
  Owl.prototype.removeClick = function(target) {
    this.drag.targetEl = target;
    $(target).on('click.preventClick', this.e._preventClick);
    // to make sure click is removed:
    window.setTimeout(function() {
      $(target).off('click.preventClick');
    }, 300);
  };

  /**
   * Suppresses click event.
   * @protected
   * @param {Event} ev - The event arguments.
   */
  Owl.prototype.preventClick = function(ev) {
    if (ev.preventDefault) {
      ev.preventDefault();
    } else {
      ev.returnValue = false;
    }
    if (ev.stopPropagation) {
      ev.stopPropagation();
    }
    $(ev.target).off('click.preventClick');
  };

  /**
   * Catches stage position while animate (only CSS3).
   * @protected
   * @returns
   */
  Owl.prototype.getTransformProperty = function() {
    var transform, matrix3d;

    transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
    // var transform = this.$stage.css(this.vendorName + 'transform')
    transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
    matrix3d = transform.length === 16;

    return matrix3d !== true ? transform[4] : transform[12];
  };

  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @protected
   * @param {Number} coordinate - The coordinate in pixel.
   * @return {Number} - The absolute position of the closest item.
   */
  Owl.prototype.closest = function(coordinate) {
    var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

    if (!this.settings.freeDrag) {
      // check closest item
      $.each(coordinates, $.proxy(function(index, value) {
        if (coordinate > value - pull && coordinate < value + pull) {
          position = index;
        } else if (this.op(coordinate, '<', value)
          && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
          position = this.state.direction === 'left' ? index + 1 : index;
        }
        return position === -1;
      }, this));
    }

    if (!this.settings.loop) {
      // non loop boundries
      if (this.op(coordinate, '>', coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }

    return position;
  };

  /**
   * Animates the stage.
   * @public
   * @param {Number} coordinate - The coordinate in pixels.
   */
  Owl.prototype.animate = function(coordinate) {
    this.trigger('translate');
    this.state.inMotion = this.speed() > 0;

    if (this.support3d) {
      this.$stage.css({
        transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
        transition: (this.speed() / 1000) + 's'
      });
    } else if (this.state.isTouch) {
      this.$stage.css({
        left: coordinate + 'px'
      });
    } else {
      this.$stage.animate({
        left: coordinate
      }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
        if (this.state.inMotion) {
          this.transitionEnd();
        }
      }, this));
    }
  };

  /**
   * Sets the absolute position of the current item.
   * @public
   * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
   * @returns {Number} - The absolute position of the current item.
   */
  Owl.prototype.current = function(position) {
    if (position === undefined) {
      return this._current;
    }

    if (this._items.length === 0) {
      return undefined;
    }

    position = this.normalize(position);

    if (this._current !== position) {
      var event = this.trigger('change', { property: { name: 'position', value: position } });

      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }

      this._current = position;

      this.invalidate('position');

      this.trigger('changed', { property: { name: 'position', value: this._current } });
    }

    return this._current;
  };

  /**
   * Invalidates the given part of the update routine.
   * @param {String} part - The part to invalidate.
   */
  Owl.prototype.invalidate = function(part) {
    this._invalidated[part] = true;
  }

  /**
   * Resets the absolute position of the current item.
   * @public
   * @param {Number} position - The absolute position of the new item.
   */
  Owl.prototype.reset = function(position) {
    position = this.normalize(position);

    if (position === undefined) {
      return;
    }

    this._speed = 0;
    this._current = position;

    this.suppress([ 'translate', 'translated' ]);

    this.animate(this.coordinates(position));

    this.release([ 'translate', 'translated' ]);
  };

  /**
   * Normalizes an absolute or a relative position for an item.
   * @public
   * @param {Number} position - The absolute or relative position to normalize.
   * @param {Boolean} [relative=false] - Whether the given position is relative or not.
   * @returns {Number} - The normalized position.
   */
  Owl.prototype.normalize = function(position, relative) {
    var n = (relative ? this._items.length : this._items.length + this._clones.length);

    if (!$.isNumeric(position) || n < 1) {
      return undefined;
    }

    if (this._clones.length) {
      position = ((position % n) + n) % n;
    } else {
      position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
    }

    return position;
  };

  /**
   * Converts an absolute position for an item into a relative position.
   * @public
   * @param {Number} position - The absolute position to convert.
   * @returns {Number} - The converted position.
   */
  Owl.prototype.relative = function(position) {
    position = this.normalize(position);
    position = position - this._clones.length / 2;
    return this.normalize(position, true);
  };

  /**
   * Gets the maximum position for an item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.maximum = function(relative) {
    var maximum, width, i = 0, coordinate,
      settings = this.settings;

    if (relative) {
      return this._items.length - 1;
    }

    if (!settings.loop && settings.center) {
      maximum = this._items.length - 1;
    } else if (!settings.loop && !settings.center) {
      maximum = this._items.length - settings.items;
    } else if (settings.loop || settings.center) {
      maximum = this._items.length + settings.items;
    } else if (settings.autoWidth || settings.merge) {
      revert = settings.rtl ? 1 : -1;
      width = this.$stage.width() - this.$element.width();
      while (coordinate = this.coordinates(i)) {
        if (coordinate * revert >= width) {
          break;
        }
        maximum = ++i;
      }
    } else {
      throw 'Can not detect maximum absolute position.'
    }

    return maximum;
  };

  /**
   * Gets the minimum position for an item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.minimum = function(relative) {
    if (relative) {
      return 0;
    }

    return this._clones.length / 2;
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.items = function(position) {
    if (position === undefined) {
      return this._items.slice();
    }

    position = this.normalize(position, true);
    return this._items[position];
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.mergers = function(position) {
    if (position === undefined) {
      return this._mergers.slice();
    }

    position = this.normalize(position, true);
    return this._mergers[position];
  };

  /**
   * Gets the absolute positions of clones for an item.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
   */
  Owl.prototype.clones = function(position) {
    var odd = this._clones.length / 2,
      even = odd + this._items.length,
      map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

    if (position === undefined) {
      return $.map(this._clones, function(v, i) { return map(i) });
    }

    return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
  };

  /**
   * Sets the current animation speed.
   * @public
   * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns {Number} - The current animation speed in milliseconds.
   */
  Owl.prototype.speed = function(speed) {
    if (speed !== undefined) {
      this._speed = speed;
    }

    return this._speed;
  };

  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @public
   * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
   * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
   */
  Owl.prototype.coordinates = function(position) {
    var coordinate = null;

    if (position === undefined) {
      return $.map(this._coordinates, $.proxy(function(coordinate, index) {
        return this.coordinates(index);
      }, this));
    }

    if (this.settings.center) {
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
    } else {
      coordinate = this._coordinates[position - 1] || 0;
    }

    return coordinate;
  };

  /**
   * Calculates the speed for a translation.
   * @protected
   * @param {Number} from - The absolute position of the start item.
   * @param {Number} to - The absolute position of the target item.
   * @param {Number} [factor=undefined] - The time factor in milliseconds.
   * @returns {Number} - The time in milliseconds for the translation.
   */
  Owl.prototype.duration = function(from, to, factor) {
    return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
  };

  /**
   * Slides to the specified item.
   * @public
   * @param {Number} position - The position of the item.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.to = function(position, speed) {
    if (this.settings.loop) {
      var distance = position - this.relative(this.current()),
        revert = this.current(),
        before = this.current(),
        after = this.current() + distance,
        direction = before - after < 0 ? true : false,
        items = this._clones.length + this._items.length;

      if (after < this.settings.items && direction === false) {
        revert = before + this._items.length;
        this.reset(revert);
      } else if (after >= items - this.settings.items && direction === true) {
        revert = before - this._items.length;
        this.reset(revert);
      }
      window.clearTimeout(this.e._goToLoop);
      this.e._goToLoop = window.setTimeout($.proxy(function() {
        this.speed(this.duration(this.current(), revert + distance, speed));
        this.current(revert + distance);
        this.update();
      }, this), 30);
    } else {
      this.speed(this.duration(this.current(), position, speed));
      this.current(position);
      this.update();
    }
  };

  /**
   * Slides to the next item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.next = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  };

  /**
   * Slides to the previous item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.prev = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };

  /**
   * Handles the end of an animation.
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.transitionEnd = function(event) {

    // if css2 animation then event object is undefined
    if (event !== undefined) {
      event.stopPropagation();

      // Catch only owl-stage transitionEnd event
      if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
        return false;
      }
    }

    this.state.inMotion = false;
    this.trigger('translated');
  };

  /**
   * Gets viewport width.
   * @protected
   * @return {Number} - The width in pixel.
   */
  Owl.prototype.viewport = function() {
    var width;
    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      throw 'Can not detect viewport width.';
    }
    return width;
  };

  /**
   * Replaces the current content.
   * @public
   * @param {HTMLElement|jQuery|String} content - The new content.
   */
  Owl.prototype.replace = function(content) {
    this.$stage.empty();
    this._items = [];

    if (content) {
      content = (content instanceof jQuery) ? content : $(content);
    }

    if (this.settings.nestedItemSelector) {
      content = content.find('.' + this.settings.nestedItemSelector);
    }

    content.filter(function() {
      return this.nodeType === 1;
    }).each($.proxy(function(index, item) {
      item = this.prepare(item);
      this.$stage.append(item);
      this._items.push(item);
      this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
    }, this));

    this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

    this.invalidate('items');
  };

  /**
   * Adds an item.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {HTMLElement|jQuery|String} content - The item content to add.
   * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
   */
  Owl.prototype.add = function(content, position) {
    position = position === undefined ? this._items.length : this.normalize(position, true);

    this.trigger('add', { content: content, position: position });

    if (this._items.length === 0 || position === this._items.length) {
      this.$stage.append(content);
      this._items.push(content);
      this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
    } else {
      this._items[position].before(content);
      this._items.splice(position, 0, content);
      this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
    }

    this.invalidate('items');

    this.trigger('added', { content: content, position: position });
  };

  /**
   * Removes an item by its position.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {Number} position - The relative position of the item to remove.
   */
  Owl.prototype.remove = function(position) {
    position = this.normalize(position, true);

    if (position === undefined) {
      return;
    }

    this.trigger('remove', { content: this._items[position], position: position });

    this._items[position].remove();
    this._items.splice(position, 1);
    this._mergers.splice(position, 1);

    this.invalidate('items');

    this.trigger('removed', { content: null, position: position });
  };

  /**
   * Adds triggerable events.
   * @protected
   */
  Owl.prototype.addTriggerableEvents = function() {
    var handler = $.proxy(function(callback, event) {
      return $.proxy(function(e) {
        if (e.relatedTarget !== this) {
          this.suppress([ event ]);
          callback.apply(this, [].slice.call(arguments, 1));
          this.release([ event ]);
        }
      }, this);
    }, this);

    $.each({
      'next': this.next,
      'prev': this.prev,
      'to': this.to,
      'destroy': this.destroy,
      'refresh': this.refresh,
      'replace': this.replace,
      'add': this.add,
      'remove': this.remove
    }, $.proxy(function(event, callback) {
      this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
    }, this));

  };

  /**
   * Watches the visibility of the carousel element.
   * @protected
   */
  Owl.prototype.watchVisibility = function() {

    // test on zepto
    if (!isElVisible(this.$element.get(0))) {
      this.$element.addClass('owl-hidden');
      window.clearInterval(this.e._checkVisibile);
      this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
    }

    function isElVisible(el) {
      return el.offsetWidth > 0 && el.offsetHeight > 0;
    }

    function checkVisible() {
      if (isElVisible(this.$element.get(0))) {
        this.$element.removeClass('owl-hidden');
        this.refresh();
        window.clearInterval(this.e._checkVisibile);
      }
    }
  };

  /**
   * Preloads images with auto width.
   * @protected
   * @todo Still to test
   */
  Owl.prototype.preloadAutoWidthImages = function(imgs) {
    var loaded, that, $el, img;

    loaded = 0;
    that = this;
    imgs.each(function(i, el) {
      $el = $(el);
      img = new Image();

      img.onload = function() {
        loaded++;
        $el.attr('src', img.src);
        $el.css('opacity', 1);
        if (loaded >= imgs.length) {
          that.state.imagesLoaded = true;
          that.initialize();
        }
      };

      img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
    });
  };

  /**
   * Destroys the carousel.
   * @public
   */
  Owl.prototype.destroy = function() {

    if (this.$element.hasClass(this.settings.themeClass)) {
      this.$element.removeClass(this.settings.themeClass);
    }

    if (this.settings.responsive !== false) {
      $(window).off('resize.owl.carousel');
    }

    if (this.transitionEndVendor) {
      this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
    }

    for ( var i in this._plugins) {
      this._plugins[i].destroy();
    }

    if (this.settings.mouseDrag || this.settings.touchDrag) {
      this.$stage.off('mousedown touchstart touchcancel');
      $(document).off('.owl.dragEvents');
      this.$stage.get(0).onselectstart = function() {};
      this.$stage.off('dragstart', function() { return false });
    }

    // remove event handlers in the ".owl.carousel" namespace
    this.$element.off('.owl');

    this.$stage.children('.cloned').remove();
    this.e = null;
    this.$element.removeData('owlCarousel');

    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.unwrap();
  };

  /**
   * Operators to calculate right-to-left and left-to-right.
   * @protected
   * @param {Number} [a] - The left side operand.
   * @param {String} [o] - The operator.
   * @param {Number} [b] - The right side operand.
   */
  Owl.prototype.op = function(a, o, b) {
    var rtl = this.settings.rtl;
    switch (o) {
      case '<':
        return rtl ? a > b : a < b;
      case '>':
        return rtl ? a < b : a > b;
      case '>=':
        return rtl ? a <= b : a >= b;
      case '<=':
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  };

  /**
   * Attaches to an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The event handler to attach.
   * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
   */
  Owl.prototype.on = function(element, event, listener, capture) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, capture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    }
  };

  /**
   * Detaches from an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The attached event handler to detach.
   * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
   */
  Owl.prototype.off = function(element, event, listener, capture) {
    if (element.removeEventListener) {
      element.removeEventListener(event, listener, capture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, listener);
    }
  };

  /**
   * Triggers an public event.
   * @protected
   * @param {String} name - The event name.
   * @param {*} [data=null] - The event data.
   * @param {String} [namespace=.owl.carousel] - The event namespace.
   * @returns {Event} - The event arguments.
   */
  Owl.prototype.trigger = function(name, data, namespace) {
    var status = {
      item: { count: this._items.length, index: this.current() }
    }, handler = $.camelCase(
      $.grep([ 'on', name, namespace ], function(v) { return v })
        .join('-').toLowerCase()
    ), event = $.Event(
      [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
      $.extend({ relatedTarget: this }, status, data)
    );

    if (!this._supress[name]) {
      $.each(this._plugins, function(name, plugin) {
        if (plugin.onTrigger) {
          plugin.onTrigger(event);
        }
      });

      this.$element.trigger(event);

      if (this.settings && typeof this.settings[handler] === 'function') {
        this.settings[handler].apply(this, event);
      }
    }

    return event;
  };

  /**
   * Suppresses events.
   * @protected
   * @param {Array.<String>} events - The events to suppress.
   */
  Owl.prototype.suppress = function(events) {
    $.each(events, $.proxy(function(index, event) {
      this._supress[event] = true;
    }, this));
  }

  /**
   * Releases suppressed events.
   * @protected
   * @param {Array.<String>} events - The events to release.
   */
  Owl.prototype.release = function(events) {
    $.each(events, $.proxy(function(index, event) {
      delete this._supress[event];
    }, this));
  }

  /**
   * Checks the availability of some browser features.
   * @protected
   */
  Owl.prototype.browserSupport = function() {
    this.support3d = isPerspective();

    if (this.support3d) {
      this.transformVendor = isTransform();

      // take transitionend event name by detecting transition
      var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
      this.transitionEndVendor = endVendors[isTransition()];

      // take vendor name from transform name
      this.vendorName = this.transformVendor.replace(/Transform/i, '');
      this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
    }

    this.state.orientation = window.orientation;
  };

  /**
   * Get touch/drag coordinats.
   * @private
   * @param {event} - mousedown/touchstart event
   * @returns {object} - Contains X and Y of current mouse/touch position
   */

  function getTouches(event) {
    if (event.touches !== undefined) {
      return {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      };
    }

    if (event.touches === undefined) {
      if (event.pageX !== undefined) {
        return {
          x: event.pageX,
          y: event.pageY
        };
      }

    if (event.pageX === undefined) {
      return {
          x: event.clientX,
          y: event.clientY
        };
      }
    }
  }

  /**
   * Checks for CSS support.
   * @private
   * @param {Array} array - The CSS properties to check for.
   * @returns {Array} - Contains the supported CSS property name and its index or `false`.
   */
  function isStyleSupported(array) {
    var p, s, fake = document.createElement('div'), list = array;
    for (p in list) {
      s = list[p];
      if (typeof fake.style[s] !== 'undefined') {
        fake = null;
        return [ s, p ];
      }
    }
    return [ false ];
  }

  /**
   * Checks for CSS transition support.
   * @private
   * @todo Realy bad design
   * @returns {Number}
   */
  function isTransition() {
    return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
  }

  /**
   * Checks for CSS transform support.
   * @private
   * @returns {String} The supported property name or false.
   */
  function isTransform() {
    return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
  }

  /**
   * Checks for CSS perspective support.
   * @private
   * @returns {String} The supported property name or false.
   */
  function isPerspective() {
    return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
  }

  /**
   * Checks wether touch is supported or not.
   * @private
   * @returns {Boolean}
   */
  function isTouchSupport() {
    return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
  }

  /**
   * Checks wether touch is supported or not for IE.
   * @private
   * @returns {Boolean}
   */
  function isTouchSupportIE() {
    return window.navigator.msPointerEnabled;
  }

  /**
   * The jQuery Plugin for the Owl Carousel
   * @public
   */
  $.fn.owlCarousel = function(options) {
    return this.each(function() {
      if (!$(this).data('owlCarousel')) {
        $(this).data('owlCarousel', new Owl(this, options));
      }
    });
  };

  /**
   * The constructor for the jQuery Plugin
   * @public
   */
  $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the lazy plugin.
   * @class The Lazy Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Lazy = function(carousel) {

    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Already loaded items.
     * @protected
     * @type {Array.<jQuery>}
     */
    this._loaded = [];

    /**
     * Event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
        if (!e.namespace) {
          return;
        }

        if (!this._core.settings || !this._core.settings.lazyLoad) {
          return;
        }

        if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
          var settings = this._core.settings,
            n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
            i = ((settings.center && n * -1) || 0),
            position = ((e.property && e.property.value) || this._core.current()) + i,
            clones = this._core.clones().length,
            load = $.proxy(function(i, v) { this.load(v) }, this);

          while (i++ < n) {
            this.load(clones / 2 + this._core.relative(position));
            clones && $.each(this._core.clones(this._core.relative(position++)), load);
          }
        }
      }, this)
    };

    // set the default options
    this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    // register event handler
    this._core.$element.on(this._handlers);
  }

  /**
   * Default options.
   * @public
   */
  Lazy.Defaults = {
    lazyLoad: false
  }

  /**
   * Loads all resources of an item at the specified position.
   * @param {Number} position - The absolute position of the item.
   * @protected
   */
  Lazy.prototype.load = function(position) {
    var $item = this._core.$stage.children().eq(position),
      $elements = $item && $item.find('.owl-lazy');

    if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
      return;
    }

    $elements.each($.proxy(function(index, element) {
      var $element = $(element), image,
        url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

      this._core.trigger('load', { element: $element, url: url }, 'lazy');

      if ($element.is('img')) {
        $element.one('load.owl.lazy', $.proxy(function() {
          $element.css('opacity', 1);
          this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
        }, this)).attr('src', url);
      } else {
        image = new Image();
        image.onload = $.proxy(function() {
          $element.css({
            'background-image': 'url(' + url + ')',
            'opacity': '1'
          });
          this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
        }, this);
        image.src = url;
      }
    }, this));

    this._loaded.push($item.get(0));
  }

  /**
   * Destroys the plugin.
   * @public
   */
  Lazy.prototype.destroy = function() {
    var handler, property;

    for (handler in this.handlers) {
      this._core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  }

  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the auto height plugin.
   * @class The Auto Height Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoHeight = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function() {
        if (this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (this._core.settings.autoHeight && e.property.name == 'position'){
          this.update();
        }
      }, this),
      'loaded.owl.lazy': $.proxy(function(e) {
        if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
          === this._core.$stage.children().eq(this._core.current())) {
          this.update();
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  AutoHeight.Defaults = {
    autoHeight: false,
    autoHeightClass: 'owl-height'
  };

  /**
   * Updates the view.
   */
  AutoHeight.prototype.update = function() {
    this._core.$stage.parent()
      .height(this._core.$stage.children().eq(this._core.current()).height())
      .addClass(this._core.settings.autoHeightClass);
  };

  AutoHeight.prototype.destroy = function() {
    var handler, property;

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the video plugin.
   * @class The Video Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Video = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Cache all video URLs.
     * @protected
     * @type {Object}
     */
    this._videos = {};

    /**
     * Current playing item.
     * @protected
     * @type {jQuery}
     */
    this._playing = null;

    /**
     * Whether this is in fullscreen or not.
     * @protected
     * @type {Boolean}
     */
    this._fullscreen = false;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'resize.owl.carousel': $.proxy(function(e) {
        if (this._core.settings.video && !this.isInFullScreen()) {
          e.preventDefault();
        }
      }, this),
      'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
        if (this._playing) {
          this.stop();
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function(e) {
        var $element = $(e.content).find('.owl-video');
        if ($element.length) {
          $element.css('display', 'none');
          this.fetch($element, $(e.content));
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Video.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);

    this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
      this.play(e);
    }, this));
  };

  /**
   * Default options.
   * @public
   */
  Video.Defaults = {
    video: false,
    videoHeight: false,
    videoWidth: false
  };

  /**
   * Gets the video ID and the type (YouTube/Vimeo only).
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {jQuery} item - The item containing the video.
   */
  Video.prototype.fetch = function(target, item) {

    var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
      id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
      width = target.attr('data-width') || this._core.settings.videoWidth,
      height = target.attr('data-height') || this._core.settings.videoHeight,
      url = target.attr('href');

    if (url) {
      id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

      if (id[3].indexOf('youtu') > -1) {
        type = 'youtube';
      } else if (id[3].indexOf('vimeo') > -1) {
        type = 'vimeo';
      } else {
        throw new Error('Video URL not supported.');
      }
      id = id[6];
    } else {
      throw new Error('Missing video URL.');
    }

    this._videos[url] = {
      type: type,
      id: id,
      width: width,
      height: height
    };

    item.attr('data-video', url);

    this.thumbnail(target, this._videos[url]);
  };

  /**
   * Creates video thumbnail.
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {Object} info - The video info object.
   * @see `fetch`
   */
  Video.prototype.thumbnail = function(target, video) {

    var tnLink,
      icon,
      path,
      dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
      customTn = target.find('img'),
      srcType = 'src',
      lazyClass = '',
      settings = this._core.settings,
      create = function(path) {
        icon = '<div class="owl-video-play-icon"></div>';

        if (settings.lazyLoad) {
          tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
        } else {
          tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
        }
        target.after(tnLink);
        target.after(icon);
      };

    // wrap video content into owl-video-wrapper div
    target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

    if (this._core.settings.lazyLoad) {
      srcType = 'data-src';
      lazyClass = 'owl-lazy';
    }

    // custom thumbnail
    if (customTn.length) {
      create(customTn.attr(srcType));
      customTn.remove();
      return false;
    }

    if (video.type === 'youtube') {
      path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
      create(path);
    } else if (video.type === 'vimeo') {
      $.ajax({
        type: 'GET',
        url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data) {
          path = data[0].thumbnail_large;
          create(path);
        }
      });
    }
  };

  /**
   * Stops the current video.
   * @public
   */
  Video.prototype.stop = function() {
    this._core.trigger('stop', null, 'video');
    this._playing.find('.owl-video-frame').remove();
    this._playing.removeClass('owl-video-playing');
    this._playing = null;
  };

  /**
   * Starts the current video.
   * @public
   * @param {Event} ev - The event arguments.
   */
  Video.prototype.play = function(ev) {
    this._core.trigger('play', null, 'video');

    if (this._playing) {
      this.stop();
    }

    var target = $(ev.target || ev.srcElement),
      item = target.closest('.' + this._core.settings.itemClass),
      video = this._videos[item.attr('data-video')],
      width = video.width || '100%',
      height = video.height || this._core.$stage.height(),
      html, wrap;

    if (video.type === 'youtube') {
      html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
        + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
    } else if (video.type === 'vimeo') {
      html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
        + '" height="' + height
        + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }

    item.addClass('owl-video-playing');
    this._playing = item;

    wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
      + html + '</div>');
    target.after(wrap);
  };

  /**
   * Checks whether an video is currently in full screen mode or not.
   * @todo Bad style because looks like a readonly method but changes members.
   * @protected
   * @returns {Boolean}
   */
  Video.prototype.isInFullScreen = function() {

    // if Vimeo Fullscreen mode
    var element = document.fullscreenElement || document.mozFullScreenElement
      || document.webkitFullscreenElement;

    if (element && $(element).parent().hasClass('owl-video-frame')) {
      this._core.speed(0);
      this._fullscreen = true;
    }

    if (element && this._fullscreen && this._playing) {
      return false;
    }

    // comming back from fullscreen
    if (this._fullscreen) {
      this._fullscreen = false;
      return false;
    }

    // check full screen mode and window orientation
    if (this._playing) {
      if (this._core.state.orientation !== window.orientation) {
        this._core.state.orientation = window.orientation;
        return false;
      }
    }

    return true;
  };

  /**
   * Destroys the plugin.
   */
  Video.prototype.destroy = function() {
    var handler, property;

    this._core.$element.off('click.owl.video');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the animate plugin.
   * @class The Navigation Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Animate = function(scope) {
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    this.swapping = true;
    this.previous = undefined;
    this.next = undefined;

    this.handlers = {
      'change.owl.carousel': $.proxy(function(e) {
        if (e.property.name == 'position') {
          this.previous = this.core.current();
          this.next = e.property.value;
        }
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
        this.swapping = e.type == 'translated';
      }, this),
      'translate.owl.carousel': $.proxy(function(e) {
        if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
          this.swap();
        }
      }, this)
    };

    this.core.$element.on(this.handlers);
  };

  /**
   * Default options.
   * @public
   */
  Animate.Defaults = {
    animateOut: false,
    animateIn: false
  };

  /**
   * Toggles the animation classes whenever an translations starts.
   * @protected
   * @returns {Boolean|undefined}
   */
  Animate.prototype.swap = function() {

    if (this.core.settings.items !== 1 || !this.core.support3d) {
      return;
    }

    this.core.speed(0);

    var left,
      clear = $.proxy(this.clear, this),
      previous = this.core.$stage.children().eq(this.previous),
      next = this.core.$stage.children().eq(this.next),
      incoming = this.core.settings.animateIn,
      outgoing = this.core.settings.animateOut;

    if (this.core.current() === this.previous) {
      return;
    }

    if (outgoing) {
      left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
      previous.css( { 'left': left + 'px' } )
        .addClass('animated owl-animated-out')
        .addClass(outgoing)
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
    }

    if (incoming) {
      next.addClass('animated owl-animated-in')
        .addClass(incoming)
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
    }
  };

  Animate.prototype.clear = function(e) {
    $(e.target).css( { 'left': '' } )
      .removeClass('animated owl-animated-out owl-animated-in')
      .removeClass(this.core.settings.animateIn)
      .removeClass(this.core.settings.animateOut);
    this.core.transitionEnd();
  }

  /**
   * Destroys the plugin.
   * @public
   */
  Animate.prototype.destroy = function() {
    var handler, property;

    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the autoplay plugin.
   * @class The Autoplay Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Autoplay = function(scope) {
    this.core = scope;
    this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

    this.handlers = {
      'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
        this.autoplay();
      }, this),
      'play.owl.autoplay': $.proxy(function(e, t, s) {
        this.play(t, s);
      }, this),
      'stop.owl.autoplay': $.proxy(function() {
        this.stop();
      }, this),
      'mouseover.owl.autoplay': $.proxy(function() {
        if (this.core.settings.autoplayHoverPause) {
          this.pause();
        }
      }, this),
      'mouseleave.owl.autoplay': $.proxy(function() {
        if (this.core.settings.autoplayHoverPause) {
          this.autoplay();
        }
      }, this)
    };

    this.core.$element.on(this.handlers);
  };

  /**
   * Default options.
   * @public
   */
  Autoplay.Defaults = {
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: false
  };

  /**
   * @protected
   * @todo Must be documented.
   */
  Autoplay.prototype.autoplay = function() {
    if (this.core.settings.autoplay && !this.core.state.videoPlay) {
      window.clearInterval(this.interval);

      this.interval = window.setInterval($.proxy(function() {
        this.play();
      }, this), this.core.settings.autoplayTimeout);
    } else {
      window.clearInterval(this.interval);
    }
  };

  /**
   * Starts the autoplay.
   * @public
   * @param {Number} [timeout] - ...
   * @param {Number} [speed] - ...
   * @returns {Boolean|undefined} - ...
   * @todo Must be documented.
   */
  Autoplay.prototype.play = function(timeout, speed) {
    // if tab is inactive - doesnt work in <IE10
    if (document.hidden === true) {
      return;
    }

    if (this.core.state.isTouch || this.core.state.isScrolling
      || this.core.state.isSwiping || this.core.state.inMotion) {
      return;
    }

    if (this.core.settings.autoplay === false) {
      window.clearInterval(this.interval);
      return;
    }

    this.core.next(this.core.settings.autoplaySpeed);
  };

  /**
   * Stops the autoplay.
   * @public
   */
  Autoplay.prototype.stop = function() {
    window.clearInterval(this.interval);
  };

  /**
   * Pauses the autoplay.
   * @public
   */
  Autoplay.prototype.pause = function() {
    window.clearInterval(this.interval);
  };

  /**
   * Destroys the plugin.
   */
  Autoplay.prototype.destroy = function() {
    var handler, property;

    window.clearInterval(this.interval);

    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
  'use strict';

  /**
   * Creates the navigation plugin.
   * @class The Navigation Plugin
   * @param {Owl} carousel - The Owl Carousel.
   */
  var Navigation = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Indicates whether the plugin is initialized or not.
     * @protected
     * @type {Boolean}
     */
    this._initialized = false;

    /**
     * The current paging indexes.
     * @protected
     * @type {Array}
     */
    this._pages = [];

    /**
     * All DOM elements of the user interface.
     * @protected
     * @type {Object}
     */
    this._controls = {};

    /**
     * Markup for an indicator.
     * @protected
     * @type {Array.<String>}
     */
    this._templates = [];

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * Overridden methods of the carousel.
     * @protected
     * @type {Object}
     */
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    };

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'prepared.owl.carousel': $.proxy(function(e) {
        if (this._core.settings.dotsData) {
          this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
        }
      }, this),
      'add.owl.carousel': $.proxy(function(e) {
        if (this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
        }
      }, this),
      'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
        if (this._core.settings.dotsData) {
          this._templates.splice(e.position, 1);
        }
      }, this),
      'change.owl.carousel': $.proxy(function(e) {
        if (e.property.name == 'position') {
          if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
            var current = this._core.current(),
              maximum = this._core.maximum(),
              minimum = this._core.minimum();
            e.data = e.property.value > maximum
              ? current >= maximum ? minimum : maximum
              : e.property.value < minimum ? maximum : e.property.value;
          }
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.property.name == 'position') {
          this.draw();
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function() {
        if (!this._initialized) {
          this.initialize();
          this._initialized = true;
        }
        this._core.trigger('refresh', null, 'navigation');
        this.update();
        this.draw();
        this._core.trigger('refreshed', null, 'navigation');
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    // register event handlers
    this.$element.on(this._handlers);
  }

  /**
   * Default options.
   * @public
   * @todo Rename `slideBy` to `navBy`
   */
  Navigation.Defaults = {
    nav: false,
    navRewind: true,
    navText: [ 'prev', 'next' ],
    navSpeed: false,
    navElement: 'div',
    navContainer: false,
    navContainerClass: 'owl-nav',
    navClass: [ 'owl-prev', 'owl-next' ],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: true,
    dotsEach: false,
    dotData: false,
    dotsSpeed: false,
    dotsContainer: false,
    controlsClass: 'owl-controls'
  }

  /**
   * Initializes the layout of the plugin and extends the carousel.
   * @protected
   */
  Navigation.prototype.initialize = function() {
    var $container, override,
      options = this._core.settings;

    // create the indicator template
    if (!options.dotsData) {
      this._templates = [ $('<div>')
        .addClass(options.dotClass)
        .append($('<span>'))
        .prop('outerHTML') ];
    }

    // create controls container if needed
    if (!options.navContainer || !options.dotsContainer) {
      this._controls.$container = $('<div>')
        .addClass(options.controlsClass)
        .appendTo(this.$element);
    }

    // create DOM structure for absolute navigation
    this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
      : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

    this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
      var index = $(e.target).parent().is(this._controls.$indicators)
        ? $(e.target).index() : $(e.target).parent().index();

      e.preventDefault();

      this.to(index, options.dotsSpeed);
    }, this));

    // create DOM structure for relative navigation
    $container = options.navContainer ? $(options.navContainer)
      : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

    this._controls.$next = $('<' + options.navElement + '>');
    this._controls.$previous = this._controls.$next.clone();

    this._controls.$previous
      .addClass(options.navClass[0])
      .html(options.navText[0])
      .hide()
      .prependTo($container)
      .on('click', $.proxy(function(e) {
        this.prev(options.navSpeed);
      }, this));
    this._controls.$next
      .addClass(options.navClass[1])
      .html(options.navText[1])
      .hide()
      .appendTo($container)
      .on('click', $.proxy(function(e) {
        this.next(options.navSpeed);
      }, this));

    // override public methods of the carousel
    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  }

  /**
   * Destroys the plugin.
   * @protected
   */
  Navigation.prototype.destroy = function() {
    var handler, control, property, override;

    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (control in this._controls) {
      this._controls[control].remove();
    }
    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  }

  /**
   * Updates the internal state.
   * @protected
   */
  Navigation.prototype.update = function() {
    var i, j, k,
      options = this._core.settings,
      lower = this._core.clones().length / 2,
      upper = lower + this._core.items().length,
      size = options.center || options.autoWidth || options.dotData
        ? 1 : options.dotsEach || options.items;

    if (options.slideBy !== 'page') {
      options.slideBy = Math.min(options.slideBy, options.items);
    }

    if (options.dots || options.slideBy == 'page') {
      this._pages = [];

      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          this._pages.push({
            start: i - lower,
            end: i - lower + size - 1
          });
          j = 0, ++k;
        }
        j += this._core.mergers(this._core.relative(i));
      }
    }
  }

  /**
   * Draws the user interface.
   * @todo The option `dotData` wont work.
   * @protected
   */
  Navigation.prototype.draw = function() {
    var difference, i, html = '',
      options = this._core.settings,
      $items = this._core.$stage.children(),
      index = this._core.relative(this._core.current());

    if (options.nav && !options.loop && !options.navRewind) {
      this._controls.$previous.toggleClass('disabled', index <= 0);
      this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
    }

    this._controls.$previous.toggle(options.nav);
    this._controls.$next.toggle(options.nav);

    if (options.dots) {
      difference = this._pages.length - this._controls.$indicators.children().length;

      if (options.dotData && difference !== 0) {
        for (i = 0; i < this._controls.$indicators.children().length; i++) {
          html += this._templates[this._core.relative(i)];
        }
        this._controls.$indicators.html(html);
      } else if (difference > 0) {
        html = new Array(difference + 1).join(this._templates[0]);
        this._controls.$indicators.append(html);
      } else if (difference < 0) {
        this._controls.$indicators.children().slice(difference).remove();
      }

      this._controls.$indicators.find('.active').removeClass('active');
      this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    }

    this._controls.$indicators.toggle(options.dots);
  }

  /**
   * Extends event data.
   * @protected
   * @param {Event} event - The event object which gets thrown.
   */
  Navigation.prototype.onTrigger = function(event) {
    var settings = this._core.settings;

    event.page = {
      index: $.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: settings && (settings.center || settings.autoWidth || settings.dotData
        ? 1 : settings.dotsEach || settings.items)
    };
  }

  /**
   * Gets the current page position of the carousel.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.current = function() {
    var index = this._core.relative(this._core.current());
    return $.grep(this._pages, function(o) {
      return o.start <= index && o.end >= index;
    }).pop();
  }

  /**
   * Gets the current succesor/predecessor position.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.getPosition = function(successor) {
    var position, length,
      options = this._core.settings;

    if (options.slideBy == 'page') {
      position = $.inArray(this.current(), this._pages);
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[((position % length) + length) % length].start;
    } else {
      position = this._core.relative(this._core.current());
      length = this._core.items().length;
      successor ? position += options.slideBy : position -= options.slideBy;
    }
    return position;
  }

  /**
   * Slides to the next item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.next = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
  }

  /**
   * Slides to the previous item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.prev = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  }

  /**
   * Slides to the specified item or page.
   * @public
   * @param {Number} position - The position of the item or page.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
   */
  Navigation.prototype.to = function(position, speed, standard) {
    var length;

    if (!standard) {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
    } else {
      $.proxy(this._overrides.to, this._core)(position, speed);
    }
  }

  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
  'use strict';

  /**
   * Creates the hash plugin.
   * @class The Hash Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Hash = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Hash table for the hashes.
     * @protected
     * @type {Object}
     */
    this._hashes = {};

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function() {
        if (this._core.settings.startPosition == 'URLHash') {
          $(window).trigger('hashchange.owl.navigation');
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function(e) {
        var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
        this._hashes[hash] = e.content;
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    // register the event handlers
    this.$element.on(this._handlers);

    // register event listener for hash navigation
    $(window).on('hashchange.owl.navigation', $.proxy(function() {
      var hash = window.location.hash.substring(1),
        items = this._core.$stage.children(),
        position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

      if (!hash) {
        return false;
      }

      this._core.to(position, false, true);
    }, this));
  }

  /**
   * Default options.
   * @public
   */
  Hash.Defaults = {
    URLhashListener: false
  }

  /**
   * Destroys the plugin.
   * @public
   */
  Hash.prototype.destroy = function() {
    var handler, property;

    $(window).off('hashchange.owl.navigation');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  }

  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

//==============================//
//========== 4. GMaps ==========//
//==============================//
(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define('GMaps', [], factory);
  }

  root.GMaps = factory();

}(this, function() {

/*!
 * GMaps.js v0.4.17
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2015, Gustavo Leon
 * Released under the MIT License.
 */

if (!(typeof window.google === 'object' && window.google.maps)) {
  throw 'Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.'
}

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    obj[name] = new_obj[name];
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in this && context) {
    element = $('#' + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  "use strict";

  var doc = document;

  var GMaps = function(options) {
    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var self = this,
        i,
        events_that_hide_context_menu = [
          'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
          'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
          'resize', 'tilesloaded', 'zoom_changed'
        ],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        container_id = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = options.zoomControl || true,
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = options.panControl || true,
        mapTypeControl = options.mapTypeControl || true,
        scaleControl = options.scaleControl || true,
        streetViewControl = options.streetViewControl || true,
        overviewMapControl = overviewMapControl || true,
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

    if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
      this.el = getElementById(container_id, options.context);
    } else {
      this.el = container_id;
    }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    this.controls = [];
    this.overlays = [];
    this.layers = []; // array with kml/georss and fusiontables layers, can be as many
    this.singleLayers = {}; // object with the other layers, only one per layer
    this.markers = [];
    this.polylines = [];
    this.routes = [];
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');
      
      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);
        
        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();
          
          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }
    };

    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      doc.body.appendChild(ul);

      var context_menu_element = getElementById('gmaps_context_menu')

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;

      for(i = 0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    this.getElement = function() {
      return this.el;
    };

    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i = 0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';
  
  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    if (typeof options.content === 'string') {
      control.innerHTML = options.content;
    }
    else if (options.content instanceof HTMLElement) {
      control.appendChild(options.content);
    }
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);
  
  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

GMaps.prototype.removeControl = function(control) {
  var position = null,
      i;

  for (i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position];

      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);

        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }
          
          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);
    }
    
    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      var index = this.markers.indexOf(collection[i]);

      if (index > -1) {
        var marker = this.markers[index];
        marker.setMap(null);

        if(this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }

        GMaps.fire('marker_removed', marker, this);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      if (marker.getMap() != null) {
        new_markers.push(marker);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.el);
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i = 0, latlng; latlng = points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          self.routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(self.routes);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes = [];
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    callback: function(e) {
      if (e.length > 0) {
        var polyline_options = {
          path: e[e.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        
        if (options.callback) {
          options.callback(e[e.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;
  
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              var polyline_options = {
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              };

              if (options.hasOwnProperty("icons")) {
                polyline_options.icons = options.icons;
              }

              self.drawPolyline(polyline_options);
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        var polyline_options = {
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  var polyline_options = {
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  };

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  this.polyline = this.map.drawPolyline(polyline_options).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i = 0; data = markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

//==========================
// Polygon containsLatLng
// https://github.com/tparkin/Google-Maps-Point-in-Polygon
// Poygon getBounds extension - google-maps-extensions
// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
if (!google.maps.Polygon.prototype.getBounds) {
  google.maps.Polygon.prototype.getBounds = function(latLng) {
    var bounds = new google.maps.LatLngBounds();
    var paths = this.getPaths();
    var path;

    for (var p = 0; p < paths.getLength(); p++) {
      path = paths.getAt(p);
      for (var i = 0; i < path.getLength(); i++) {
        bounds.extend(path.getAt(i));
      }
    }

    return bounds;
  };
}

if (!google.maps.Polygon.prototype.containsLatLng) {
  // Polygon containsLatLng - method to determine if a latLng is within a polygon
  google.maps.Polygon.prototype.containsLatLng = function(latLng) {
    // Exclude points outside of bounds as there is no way they are in the poly
    var bounds = this.getBounds();

    if (bounds !== null && !bounds.contains(latLng)) {
      return false;
    }

    // Raycast point in polygon method
    var inPoly = false;

    var numPaths = this.getPaths().getLength();
    for (var p = 0; p < numPaths; p++) {
      var path = this.getPaths().getAt(p);
      var numPoints = path.getLength();
      var j = numPoints - 1;

      for (var i = 0; i < numPoints; i++) {
        var vertex1 = path.getAt(i);
        var vertex2 = path.getAt(j);

        if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
          if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
            inPoly = !inPoly;
          }
        }

        j = i;
      }
    }

    return inPoly;
  };
}

if (!google.maps.Circle.prototype.containsLatLng) {
  google.maps.Circle.prototype.containsLatLng = function(latLng) {
    if (google.maps.geometry) {
      return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
    }
    else {
      return true;
    }
  };
}

google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
  return this.contains(latLng);
};

google.maps.Marker.prototype.setFences = function(fences) {
  this.fences = fences;
};

google.maps.Marker.prototype.addFence = function(fence) {
  this.fences.push(fence);
};

google.maps.Marker.prototype.getId = function() {
  return this['__gm_id'];
};

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}
  
return GMaps;
}));