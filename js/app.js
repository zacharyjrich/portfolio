
$(document).foundation();

(function($) {
  $.fn.visible = function(partial) {
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top;
    return (viewBottom >= _top);
  };
})($);

var $primeItems = [
  '.projects h1',
  '.projects .panel',
];

for (var i = 0, l = $primeItems.length; i < l; i++) {
  var $primeItem = $($primeItems[ i ]);
  if( !$primeItem.hasClass('nofade') ) {
		$primeItem.addClass('content-primed');
  }
}

var win = $(window);
var $allMods = $('.content-primed');

$(document).ready(function() {
  // Already visible content
  $allMods.each(function(i, el) {
    $allMods = $('.content-primed');
    var $el = $(el);
    if ($el.visible(true)) {
      $el.addClass('fade-in').removeClass('content-primed');
    }
  });

  win.scroll(function(event) {
    $allMods = $('.content-primed');
    $allMods.each(function(i, el) {
      var $el = $(el);
      if ($el.visible(true)) {
        $el.addClass('fade-in').removeClass('content-primed');
      }
    });
  });
});
