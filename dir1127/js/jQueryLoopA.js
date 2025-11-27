$(document).ready(function() {
    const $headers = $('h1');

    for (let i = 0; i < $headers.length; i++) {
       if (i % 2 == 1) {
           const domElement = $headers.get(i);
   
           $(domElement).css('backgroundColor', 'red');
       }
    }
} );