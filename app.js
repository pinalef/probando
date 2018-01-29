$(document).ready(function () {
    var thumbs = $("ul li img");

    for (var i = 0; i < thumbs.length; i++) {
        if (thumbs[i].alt && thumbs[i].alt.length > 0) {
            var imgAlt = thumbs[i].alt;
            $(thumbs[i]).wrap('<div class="wrapper wrapper' + i + '" />').
                wrap('<figure class="">').
                after('<figcaption class="hide overlay">' + imgAlt +
                '</figcaption></figure></div>');
        }
        console.log(thumbs[i].alt);
    }

    /*   for (var i = 0; i < $('.wrapper').length; i++) {
        $('.wrapper').hover(
            function () {
                $(this).find('figcaption').removeClass('hide');
            },
            function () {
                $(this).find('figcaption').addClass('text');
            }
        )
    }   */

 $('.container').on('mouseenter', (event) => {
        $('figcaption').removeClass('hide');
        $('figcaption').addClass('text');
      }).on('mouseleave', event => {
        $('figcaption').removeClass('text');
        $('figcaption').addClass('hide');
      })

/* 
    $('.container').on('mouseenter', (event) => {
        $('figcaption').removeClass('hide');
        $('figcaption').addClass('text');
      }).on('mouseleave', event => {
        $('figcaption').removeClass('text');
        $('figcaption').addClass('hide');
      }) */



    //     $('.wrapper0').hover(
    //     function(){
    //         $(this).find('img').animate({opacity: ".6"}, 300);
    //         $(this).find('.caption').animate({top:"-85px"}, 300);
    //     },
    //     function(){
    //         $(this).find('img').animate({opacity: "1.0"}, 300);
    //         $(this).find('.caption').animate({top:"85px"}, 100);
    //     }
    // );
    // $('.wrapper1').hover(
    //     function(){
    //         $(this).find('img').animate({opacity: ".3"}, 400);
    //         $(this).find('.caption').animate({top:"-170px"}, 0);
    //     },
    //     function(){
    //         $(this).find('img').animate({opacity: "1.0"}, 400);
    //         $(this).find('.caption').animate({top:"85px"}, 0);
    //     }
    // );
    // $('.wrapper2').hover(
    //     function(){
    //         $(this).find('img').animate({opacity: ".6"}, 300);
    //         $(this).find('.caption').animate({top:"-247px"}, 300);
    //     },
    //     function(){
    //         $(this).find('img').animate({opacity: "1.0"}, 300);
    //         $(this).find('.caption').animate({top:"-370px"}, 100);
    //     }
    // );

})