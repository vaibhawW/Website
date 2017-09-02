(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-105760511-1', 'auto');
ga('send', 'pageview');


var obj = $('.animate');
var terminalText = ""
$('.animate').text(terminalText);
var clearScreen =()=> {
    obj.html('');
    $('.button').removeClass('disabled');
}

let showObjects = () => {
    clearScreen();
    let text = `
    Ok, now lets see the interface.
    `
}
var nextFunction = () =>{
    if(next) for(let i =0;i<9999;i++) window.clearInterval(i);
    console.log(next);
    next();
}
var prevFunction = () =>{
    if(prev) for(let i =0;i<9999;i++) window.clearInterval(i);
    prev();
}
var prev = undefined;

var first = () =>{
    clearScreen();
    window.next = showObjects;
    window.prev = undefined;
    $('.prev').addClass('disabled');
    let text = `
    Hi there,
    As you can see this is a typing animation. 
    Lets see how it was made.
    
    We will be using JQuery, HTML and SCSS.
    I would expect you know a little of HTML, but if you don't, you can learn it @ www.w3schools.com/
    
    and you don't need to dig into others, I will be explaining what is happening as we code.
    
    Click on NEXT to proceed.
    `;
    let l = 1;
    var typing = setInterval(function(){
        if(l<text.length){
            $('.animate .cursor').remove()
            $('.animate').html($('.animate').html()+text[l++]);
            obj.html(obj.html().replace('\n','<br>'+terminalText));
            obj.append('<div class="cursor"></div>');
        }
        else {
            clearInterval(typing);
            $('.animate .cursor').remove();
            $('.animate').append('<div class="animate-cursor" />')
        }
    },100);

}

var next = first;
next();
$('.next').click(nextFunction);
$('.prev').click(prevFunction);

