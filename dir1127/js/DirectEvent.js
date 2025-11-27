$(document).ready(function() {
    $('h1').on('click', function (event) {
        const text = $(this).text();
        alert(text);
    })
})