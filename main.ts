
let console: any = {};
console.log = (...args) => {
    $('#editorOutput').append(`${args.join(', ')}<br />`);
};

let editorSource: any = $('#editorJS');


function compileJS(input: any) {
    let source: string = input.text();
    //source = source.replace(/(for)/g, `<span class="conditional">for</span>`);
    eval(source);
    //console.log(input.val());
} 

$(document).keydown((e) => {
    let key: any = e.keyCode || e.which;
    //console.log(key, EventTarget.ctrlKey);
    if (key)
        if (key === 13 && e.ctrlKey)
            compileJS(editorSource)
    
});

let headerText: string = 'A sweet JS compiler by <span class="showGithub">knox97</span>';
let headerAlt: string = '<span class="showGithub">knox97</span>';
let header: any = $('#header');
let screenX: number = $(document).width();

adjustHeader(screenX, headerText, headerAlt, header, 1020);

function adjustHeader(x: number, text: string, alt: string, header: any, size: number) {
    if (x > size)
        header.html(text);
    else
        header.html(alt);
    $(window).resize(() => {
        x = $(document).width();
        if (x > size)
            header.html(text);
        else
            header.html(alt);
    });

}

let isShowing: boolean = false;

$('.showGithub').click(() => {
    if (isShowing) {
        //$('.wrap').css('opacity', '0');
        //$('#github').css('opacity', '0');
        //$('#github p').css('opacity', '0');
        //$('#github a').css('opacity', '0');
        $( "#github" ).animate({
            opacity: 0
        }, 200);
        $( ".wrap" ).animate({
            opacity: 0
        }, 200);
        setTimeout(() => {$('.wrap').css('visibility', 'hidden')}, 200);
        setTimeout(() => {$('#github').css('visibility', 'hidden')}, 200);
    } 
    if (!isShowing) {
        $('.wrap').css('visibility', 'visible');
        $('#github').css('visibility', 'visible');
        $('.wrap').css('opacity', '1');
        $('#github').css('opacity', '1');
    }
    isShowing = !isShowing;
});


$('#compile').click(() => compileJS(editorSource));

