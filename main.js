//animate smooth scroll
$('#view-work').on('click',fuction(){
    const images = $('#images').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
        );
})