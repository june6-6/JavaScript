$(document).ready(function() {
    $('<h1></h1>')
        .text('안녕하세요')
        .attr('data-test', 'test')
        .css({
            backgroundColor: 'red',
            color: 'white'
        })
        .appendTo('body');
})