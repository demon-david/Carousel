$(function () {
    function carousel(newIndex) {
        var newClass = '.carousel-img-' + newIndex;
        var element = $(newClass);
        var indexElement = $('#carousel-link-' + newIndex);
        $('.carousel-imgs div').each(function (index, element) {
            element.style.left = -(newIndex - 1) * 608 + 'px';
        });
        element.siblings().removeClass('active');
        element.addClass('active');
        indexElement.siblings().removeClass('on');
        indexElement.addClass('on');
    }
    $('.carousel-index').on('click', 'a', function (e) {
        e.preventDefault();
        var newIndex = $(this).attr('id').substring(14);
        carousel(newIndex);
    });
    $('.carousel-container').on('mouseenter', function () {
        $('.previous').css('display', 'block');
        $('.previous').css('opacity', '0.6');
        $('.next').css('display', 'block');
        $('.next').css('opacity', '0.6');
    });
    $('.carousel-container').on('mouseleave', function () {
        $('.previous').css({'transition':'opacity 1s','opacity':'0.1'});
        $('.next').css({ 'transition': 'opacity 1s', 'opacity': '0.1' });
        setTimeout(function () {
            $('.previous').css('display', 'block');
            $('.next').css('display', 'block');
        }, 500);
    });
    $('.previous').click(function () {
        var oldValue = $('.on').attr('id').substring(14);
        var newIndex = oldValue == 1 ? 3 : oldValue - 1;
        carousel(newIndex);
    });
    $('.next').click(function () {
        var oldValue = $('.on').attr('id').substring(14);
        var newIndex = oldValue == 3 ? 1 : parseInt(oldValue) + 1;
        carousel(newIndex);
    });
    setInterval(auto, 10000);
    function auto() {
        var oldValue = $('.on').attr('id').substring(14);
        var newIndex = oldValue == 3 ? 1 : parseInt(oldValue) + 1;
        carousel(newIndex);
    }
});