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

/**
 * MODIFIED CAUSE WE NEEDED OUR OWN MARKUP
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 *
 */
;(function($) {

  $.fn.stacktable = function(options) {
    var $tables = this,
        defaults = {id:'stacktable',hideOriginal:false},
        settings = $.extend({}, defaults, options),
        stacktable;

    return $tables.each(function() {
      var $stacktable = $('<table class="'+settings.id+'"><tbody></tbody></table>');
      if (typeof settings.myClass !== undefined) $stacktable.addClass(settings.myClass);
      var markup = '';
      $table = $(this);
      $topRow = $table.find('tr').eq(0);
      $table.find('tr').each(function(index,value) {
        var zebra = "";
        if (index % 2 === 0) {
          zebra = "even";
        } else {
          zebra = "odd";
        }
        markup += '<tr class="' + zebra + '">';
        $(this).find('td').each(function(index,value) {
          if ($(this).html() !== ''){
            markup += '<tr class="' + zebra + '">';
            if ($topRow.find('td,th').eq(index).html()){
              markup += '<td>'+$topRow.find('td,th').eq(index).html()+'</td>';
            } else {
              markup += '<td></td>';
            }
            markup += '<td>'+$(this).html()+'</td>';
            markup += '</tr>';
          }
        });
      });
      $stacktable.append($(markup));
      $table.before($stacktable);
      if (settings.hideOriginal) $table.hide();
    });
  };

}(jQuery));


}
/*
     FILE ARCHIVED ON 12:21:36 Jan 11, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:38:24 Jul 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.46
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.013
  esindex: 0.011
  cdx.remote: 5.502
  LoadShardBlock: 102.628 (3)
  PetaboxLoader3.datanode: 126.314 (5)
  load_resource: 141.93 (2)
  PetaboxLoader3.resolve: 87.349 (2)
*/