$(document).ready(function() {
    $('.showLeftBar').on('click', function() {
        $('fa').hasClass('fa-arrow-left')
        $('.fa.fa-arrow-left').removeClass('fa-arrow-left').addClass('fa-arrow-right');
    });
});