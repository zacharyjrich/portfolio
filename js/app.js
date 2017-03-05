$(document).foundation();

// Nav Scroll functionality
$(document).ready(function() {
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});

// Fade In functionality
(function($) {
    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top;

        return (viewBottom >= _top);
    };
})($);

var $primeItems = [
    '.header-bar',
    '.hero-body',
    '.projects .title', '.projects .description',
];

for (var i = 0, l = $primeItems.length; i < l; i++) {
    var $primeItem = $($primeItems[i]);
    if (!$primeItem.hasClass('nofade')) {
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
