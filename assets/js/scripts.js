// dl-menu options
$(function() {
    $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
    });
});

// Need this to show animation when go back in browser
window.onunload = function() {};

// Need this to still show content even when "Back" is hit on the browser
$(window).on('pageshow', function(){
    $(".container").removeClass("fadeOut").addClass("fadeIn");
    $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
});
// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
    $(".content").fitVids();
});
async function setQuote(prev = 0){
    try{
        const response = await fetch('assets/text/quotes.txt');
        const text = await response.text();

        const quotes = text.split('\n');
        let num = 0;
        do{
            num = Math.floor(Math.random() * (quotes.length - 0)) + 0;
        } while(num == 7);
        $('.quote').html(quotes[8]);
        return num;
    } catch(error) {
        console.error('There was a problem with fetching quotes:', error);
        return null;
    }
}
// All others
$(document).ready(function() {
    console.log('console log works lol');

    $('.avatar').css('border-radius', '50%');

    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    //make avatar 360 on click
    let isSpinning = false
    $('.avatar').click(function() {
        if(!isSpinning){
            isSpinning = true;
            $('.avatarContainer').removeClass('rotateIn');
            $('.avatarContainer').addClass('rotate360');
            setTimeout(function() {
                isSpinning = false;
                $('.avatarContainer').removeClass('rotate360');
            }, 800); // 2000ms (2 seconds) matches the animation duration
        }
    });
    //random quote
    setQuote()
        .then(num => {
            if(num >= 0)
                console.log("the num is " + num);
            else
                console.log("no num")
        });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
    $('.image-popup').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        // Class that is added to body when popup is open. 
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
});
