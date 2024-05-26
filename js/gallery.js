// Shows images in a fancy box
$(document).ready(function() {
    Fancybox.bind('[data-fancybox]', {
        // Uses API to get status and show/hide navbar based on it
        on: {
            loading: (fancybox, slide) => {
                document.getElementById('cs-navigation').style.display = 'none';
            },
            shouldClose: (fancybox, slide) => {
                document.getElementById('cs-navigation').style.display = 'flex';
            }
        }
    });
});
