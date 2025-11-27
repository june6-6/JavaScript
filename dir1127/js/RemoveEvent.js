$(document).ready(function() {
    const handler = function (event) {
        $('<h1></h1>')
            .text($(this).text())
            .click(handler)
            .appendTo('body');

        $(this).off();
    };
    $('h1').on('click',handler);
})