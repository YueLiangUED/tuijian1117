$(function () {
    $('.order-bar').on('touchend', 'li', function (event) {
        event.preventDefault();
        var $this = $(this),
            $li = $('.order-bar li'),
            $content = $('.order-content');
        var index = $this.index(),
            thisContent = $content[index];

        $li.removeClass('act');
        $this.addClass('act');

        $content.hide();
        $(thisContent).show();
    });

    (function () {
        var $solid = $('.modal-body .solid');
        var h = $('.modal-body-inf').height()-28;
        $solid.css('height', h + 'px');
    })();

    $('.logistics-step').on('click', function () {
        $('.modal').show();
        $('.mask').show();
    });
    $('.modal-close').on('click', function () {
        var $modal = $(this).parents('.modal');
        $modal.hide();
        $('.mask').hide();
    });
});