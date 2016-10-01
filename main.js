var console = {};
console.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    $('#editorOutput').append(args.join(', ') + "<br />");
};
var editorSource = $('#editorJS');
function compileJS(input) {
    var source = input.text();
    //source = source.replace(/(for)/g, `<span class="conditional">for</span>`);
    eval(source);
    //console.log(input.val());
}
$(document).keydown(function (e) {
    var key = e.keyCode || e.which;
    //console.log(key, EventTarget.ctrlKey);
    if (key)
        if (key === 13 && e.ctrlKey)
            compileJS(editorSource);
});
var headerText = 'A sweet JS compiler by <span class="showGithub">knox97</span>';
var headerAlt = '<span class="showGithub">knox97</span>';
var header = $('#header');
var screenX = $(document).width();
adjustHeader(screenX, headerText, headerAlt, header, 1020);
function adjustHeader(x, text, alt, header, size) {
    if (x > size)
        header.html(text);
    else
        header.html(alt);
    $(window).resize(function () {
        x = $(document).width();
        if (x > size)
            header.html(text);
        else
            header.html(alt);
    });
}
var isShowing = false;
$('.showGithub').click(function () {
    if (isShowing) {
        //$('.wrap').css('opacity', '0');
        //$('#github').css('opacity', '0');
        //$('#github p').css('opacity', '0');
        //$('#github a').css('opacity', '0');
        $("#github").animate({
            opacity: 0
        }, 200);
        $(".wrap").animate({
            opacity: 0
        }, 200);
        setTimeout(function () { $('.wrap').css('visibility', 'hidden'); }, 200);
        setTimeout(function () { $('#github').css('visibility', 'hidden'); }, 200);
    }
    if (!isShowing) {
        $('.wrap').css('visibility', 'visible');
        $('#github').css('visibility', 'visible');
        $('.wrap').css('opacity', '1');
        $('#github').css('opacity', '1');
    }
    isShowing = !isShowing;
});
$('#compile').click(function () { return compileJS(editorSource); });
