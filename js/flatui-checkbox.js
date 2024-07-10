var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* =============================================================
 * flatui-checkbox.js v0.0.3
 * ============================================================ */
 
!function ($) {

 /* CHECKBOX PUBLIC CLASS DEFINITION
	* ============================== */

	var Checkbox = function (element, options) {
		this.init(element, options);
	}

	Checkbox.prototype = {
		
		constructor: Checkbox
		
	, init: function (element, options) {			 
			var $el = this.$element = $(element)
			
			this.options = $.extend({}, $.fn.checkbox.defaults, options);			 
			$el.before(this.options.template);		
			this.setState(); 
		}	 
	 
	, setState: function () {		 
			var $el = this.$element
				, $parent = $el.closest('.checkbox');
				
				$el.prop('disabled') && $parent.addClass('disabled');		
				$el.prop('checked') && $parent.addClass('checked');
		}	 
		
	, toggle: function () {		 
			var ch = 'checked'
				, $el = this.$element
				, $parent = $el.closest('.checkbox')
				, checked = $el.prop(ch)
				, e = $.Event('toggle')
			
			if ($el.prop('disabled') == false) {
				$parent.toggleClass(ch) && checked ? $el.removeAttr(ch) : $el.prop(ch, ch);
				$el.trigger(e).trigger('change'); 
			}
		}	 
		
	, setCheck: function (option) {		 
			var d = 'disabled'
				, ch = 'checked'
				, $el = this.$element
				, $parent = $el.closest('.checkbox')
				, checkAction = option == 'check' ? true : false
				, e = $.Event(option)
			
			$parent[checkAction ? 'addClass' : 'removeClass' ](ch) && checkAction ? $el.prop(ch, ch) : $el.removeAttr(ch);
			$el.trigger(e).trigger('change');				
		}	 
			
	}


 /* CHECKBOX PLUGIN DEFINITION
	* ======================== */

	var old = $.fn.checkbox

	$.fn.checkbox = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('checkbox')
				, options = $.extend({}, $.fn.checkbox.defaults, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('checkbox', (data = new Checkbox(this, options)));
			if (option == 'toggle') data.toggle()
			if (option == 'check' || option == 'uncheck') data.setCheck(option)
			else if (option) data.setState(); 
		});
	}
	
	$.fn.checkbox.defaults = {
		template: '<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>'
	}


 /* CHECKBOX NO CONFLICT
	* ================== */

	$.fn.checkbox.noConflict = function () {
		$.fn.checkbox = old;
		return this;
	}


 /* CHECKBOX DATA-API
	* =============== */

	$(document).on('click.checkbox.data-api', '[data-toggle^=checkbox], .checkbox', function (e) {
	  var $checkbox = $(e.target);
		if (e.target.tagName != "A") {			
			e && e.preventDefault() && e.stopPropagation();
			if (!$checkbox.hasClass('checkbox')) $checkbox = $checkbox.closest('.checkbox');
			$checkbox.find(':checkbox').checkbox('toggle');
		}
	});
	
	$(function () {
		$('[data-toggle="checkbox"]').each(function () {
			var $checkbox = $(this);
			$checkbox.checkbox();
		});
	});

}(window.jQuery);

}
/*
     FILE ARCHIVED ON 19:43:34 Jan 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:38:24 Jul 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.507
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.016
  esindex: 0.01
  cdx.remote: 11.096
  LoadShardBlock: 145.471 (3)
  PetaboxLoader3.datanode: 324.056 (5)
  load_resource: 1090.169 (2)
  PetaboxLoader3.resolve: 872.081 (2)
*/