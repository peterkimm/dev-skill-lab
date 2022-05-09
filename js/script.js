$(document).ready(function() {
    console.log("ready");
});

$('.skills button').on('click', function () {
    const mySkills = $('input').val();
    const $newSkills = $(`<li><button>X</button>${mySkills}</li>`);
    $('ul.listOfSkills').append($newSkills);
    $('input').val('');
});

$('ul').on('click', 'li button', function () {
    $(this)
        .closest('li')
        .fadeOut(1000, function () {
            $(this).remove()
        })
});