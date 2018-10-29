$(document).ready(function() {


    $('.arrow').on('click', function() {
        if ($('.arrow.fa').hasClass('fa-arrow-right')) {
            $('.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-arrow-left');
            $('.navbar.navbarAtas').addClass('showed');
            $('.navbar.navbarKiri.notShowed').removeClass('notShowed');
            // $('.navbar.navbarKiri ul').removeClass('notShowed');
            console.log('berhasil kanan');
        } else {
            $('.fa-arrow-left').removeClass('fa-arrow-left').addClass('fa-arrow-right');
            $('.navbar.navbarAtas.showed').removeClass('showed');
            $('.navbar.navbarKiri').addClass('notShowed');
            // $('.navbar.navbarKiri ul').addClass('notShowed');
            console.log('berhasil kiri');
        }
    });

    $('li').on('click', function() {
        $('.chosen').removeClass('chosen');
        $(this).addClass('chosen');
    });

    // FOR STICKY HEADER

    var scr1 = window.pageYOffset;
    window.onscroll = function() {
        var scr2 = window.pageYOffset;
        if (scr1 > scr2) {
            $('.navbar.navbarAtas').css('top', '0px');

            $('.navbar.navbarAtas').on('mouseover', function() {
                clearInterval(inter);
            });

            var inter = setInterval(function() {
                var scr3 = window.pageYOffset;
                if (scr2 > scr3) {
                    $('.navbar.navbarAtas').css('top', '0px');
                    console.log('ganteng2');
                    clearInterval(inter);

                } else {
                    $('.navbar.navbarAtas').css('top', '-100px');
                    $('.navbar.navbarKiri').css('left', '-20%');
                    console.log('ganteng3');
                    clearInterval(inter);

                }
                scr3 = scr2;
                console.log(scr3);
                console.log('ganteng');
                clearInterval(inter);
            }, 5000);
            console.log('berhasil 1');
        } else {
            $('.navbar.navbarAtas').css('top', '-100px');
            console.log('berhasil 2');
        }
        scr1 = scr2;
    }
});