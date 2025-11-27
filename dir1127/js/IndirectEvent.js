$(document).ready(function() {
    $(body).on('click', function (event) {
        $('<h1></h1>').text($(this).text()).appendTo('body');
    });
});