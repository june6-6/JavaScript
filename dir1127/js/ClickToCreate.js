$(document).ready(function() {
    $('h1').on('click', function (event) {
        $('<h1></h1>').text($(this).text()).appendTo('body');
    })
})