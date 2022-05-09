$(document).ready(function() {
    console.log("ready");
});

$('.skills').on("click", "button", function() {
    const mySkills = $('input').val();
    const $newSkills = $(`<li><button>X</button>${mySkills}</li>`);
    $('input').val('');
    $('ul.listOfSkills').append($newSkills);
});

$('ul').on('click', 'li button', function() {
    $(this)
        .closest('li')
        .fadeOut(1000, function () {
            $(this).remove()
        })
});