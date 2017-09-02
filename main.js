//Initializing the DOMS
const obj = $('.animate');
const codeHead   = $('.code .heading');
const codeObject = $('.code .obj');
const animateObj = $('.anim');
const nextBtn = $('.next');
const prevBtn = $('.prev');
const viewpad = $('.viewPad');

//Initializing variables to be used later
let next = undefined;
let prev = undefined;
let text = '';
let typing = undefined;
let terminalText = '';
let index = 1;
const typingSpeed = 10;
const cursorCode = '<div class="cursor" />';
const animateCursorCode = '<div class="animate-cursor" />';
const transitionDuration = 200;

//codes
const html1 = `
<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;color:black;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;html&gt;</span>
  <span style="color: #062873; font-weight: bold">&lt;head&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;meta</span> <span style="color: #4070a0">charset=&#39;utf-8&#39;</span><span style="color: #062873; font-weight: bold">&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;title&gt;</span>Typing Animation<span style="color: #062873; font-weight: bold">&lt;/title&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;style&gt;</span>
      <span style="color: #666666">/* we will add css here */</span>
    <span style="color: #062873; font-weight: bold">&lt;/style&gt;</span>
  <span style="color: #062873; font-weight: bold">&lt;/head&gt;</span>
  <span style="color: #062873; font-weight: bold">&lt;body&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;div</span> <span style="color: #4070a0">class=&#39;animate&#39;</span><span style="color: #062873; font-weight: bold">&gt;</span> <span style="color: #062873; font-weight: bold">&lt;/div&gt;</span>
  <span style="color: #062873; font-weight: bold">&lt;/body&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/html&gt;</span>
</pre></td></tr></table></div>
`;


//making basic functions
const clearScreen = () => {
    codeHead.html('');
    codeObject.html('');
    animateObj.html('');
    viewpad.html('');
    clearInterval(window.typing);
    index = 1;
};
const nextFunction = () => {
    viewpad.animate({right: '-100vw'}, 200, 'linear');
    clearScreen();
    if (next) next();
};
const prevFunction = () => {
    viewpad.animate({right: '-100vw'}, 200, 'linear');
    clearScreen();
    if (prev) prev();
};
const copyToClipboard = (element) => {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.text($(element).html()).select();
    console.log($(element).text());
    document.execCommand("copy");
    $temp.remove();
};
const doButtons = () => {
    (prev==undefined)?prevBtn.addClass('disabled'):prevBtn.removeClass('disabled');
    (next==undefined)?nextBtn.addClass('disabled'):nextBtn.removeClass('disabled');
};
$(nextBtn).click(nextFunction());
$(prevBtn).click(prevFunction());
const typeFunction = (callback) => {
    index = 1;
    $('.animate-cursor').remove();
    window.typing = setInterval(function () {
        $('.cursor').remove();
        if (index < text.length) {
            animateObj.html(animateObj.html() + text[index++]);
            animateObj.html(animateObj.html().replace('\n', '<br>' + terminalText));
            animateObj.append(cursorCode);
        } else {
            clearInterval(window.typing);
            animateObj.append(animateCursorCode);
            if(callback) callback();
        }
    }, typingSpeed);
};
const showViewPad = (callback) =>{
    callback ? viewpad.animate({right: '1vw'}, transitionDuration, 'linear', callback) : viewpad.animate({right: '1vw'}, transitionDuration, 'linear');
};

//making screens
var screen5 = () => {

    clearScreen();
    prev = screen3;
    next = screen4;
    clearInterval(window.typing);
    obj.html(`<span style="color:orangered">CSS</span>
<div class="html" onclick="copyToClipboard('#html')">
<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #bb0066; font-weight: bold">.cursor</span> {
  <span style="color: #008800; font-weight: bold">display</span>: <span style="color: #008800; font-weight: bold">inline</span>;
  <span style="color: #008800; font-weight: bold">border-right</span>: <span style="color: #0000DD; font-weight: bold">0.15em</span> <span style="color: #008800; font-weight: bold">solid</span> <span style="color: #003388">orange</span>;
}

<span style="color: #bb0066; font-weight: bold">.animate-cursor</span> {
  <span style="color: #008800; font-weight: bold">display</span>: <span style="color: #008800; font-weight: bold">inline</span>;
  <span style="color: #008800; font-weight: bold">border-right</span>: <span style="color: #0000DD; font-weight: bold">0.15em</span> <span style="color: #008800; font-weight: bold">solid</span> <span style="color: #003388">orange</span>;
  animation: <span style="color: #008800; font-weight: bold">blink</span> <span style="color: #0000DD; font-weight: bold">0.75s</span> step-end infinite;
}

<span style="color: #008800; font-weight: bold">@keyframes</span> <span style="color: #bb0066; font-weight: bold">blink</span> {
  <span style="color: #bb0066; font-weight: bold">from</span>,<span style="color: #bb0066; font-weight: bold">to</span> {
    <span style="color: #008800; font-weight: bold">border-color</span>: <span style="color: #008800; font-weight: bold">transparent</span>;
  }
  <span style="color: #bb0066; font-weight: bold">50</span>% {
    <span style="color: #008800; font-weight: bold">border-color</span>: <span style="color: #003388">orange</span>;
  }
}
</pre></td></tr></table></div>

</div><br><br><span class="animaie"></span>
`);
    window.text = `Ok, so this is the basic CSS of the page. It defines
    font color and background color of the page. On line 7, instead of body,
    ofcorse you could have used id or class of any division where you wanted
    these effects. 
    `;
    let l = 0;
    window.obj = $('.animaie');
    window.typing = setInterval(function(){
        if(l<text.length){
            $('.animaie .cursor').remove()
            $('.animaie').html($('.animaie').html()+text[l++]);
            obj.html(obj.html().replace('\n','<br>'+terminalText));
            obj.append('<div class="cursor"></div>');
        }
        else {
            clearInterval(typing);
            $('.animaie .cursor').remove();
            $('.animaie').append('<div class="animate-cursor" />');
            $('.viewPad').animate({
                right:'1vw'
            },200,'linear');
            setTimeout(function(){
                window.next = screen2;
                $('.next').removeClass('disabled');
                text+=`Still no effect to html, lets see what we did.
                We defined display to be flex and "alignment" to be left.
                You can read about these on google. They are very usefull.
                
                Other than that, every thing else is full optional.
                
                Save this file with name 'style.css' in same directory as 'index.html'
                
                This will be a save point. You can click on next when finished.`;
                window.typing = setInterval(function(){
                    $('.animate-cursor').remove();
                    if(l<text.length){
                        $('.animaie .cursor').remove();
                        $('.animaie').html($('.animaie').html()+text[l++]);
                        obj.html(obj.html().replace('\n','<br>'+terminalText));
                        obj.append('<div class="cursor"></div>');
                    }
                    else{
                        clearInterval(typing);
                        $('.animaie .cursor').remove();
                        $('.animaie').append('<div class="animate-cursor" />');
                    }
                },100);
            });
        }
    },100);

}
var screen4 = () => {
    clearScreen();
    prev = showObjects;
    next = screen4;
    clearInterval(window.typing);
    obj.html(`<span style="color:orangered">CSS</span>
<div class="html" onclick="copyToClipboard('#html')">
<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;color:black"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14</pre></td><td id="html"><pre style="margin: 0; line-height: 125%"><span style="color: #bb0066; font-weight: bold">html</span>, <span style="color: #bb0066; font-weight: bold">body</span> {
  <span style="color: #008800; font-weight: bold">width</span>: <span style="color: #0000DD; font-weight: bold">100</span>%;
  <span style="color: #008800; font-weight: bold">height</span>: <span style="color: #0000DD; font-weight: bold">100</span>%;
  <span style="color: #008800; font-weight: bold">overflow</span>: <span style="color: #008800; font-weight: bold">hidden</span>;
}

<span style="color: #bb0066; font-weight: bold">body</span> {
  <span style="color: #008800; font-weight: bold">background</span>: <span style="color: #0000DD; font-weight: bold">#333</span>;
  <span style="color: #008800; font-weight: bold">color</span>: <span style="color: #0000DD; font-weight: bold">#f2f2f2</span>;
  <span style="color: #008800; font-weight: bold">padding</span>: <span style="color: #0000DD; font-weight: bold">1em</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">1em</span>;
  <span style="color: #008800; font-weight: bold">display</span>: flex;
  <span style="color: #008800; font-weight: bold">justify</span>-<span style="color: #008800; font-weight: bold">content</span>: <span style="color: #008800; font-weight: bold">left</span>;
  <span style="color: #008800; font-weight: bold">font</span>: <span style="color: #008800; font-weight: bold">bold</span>;
}
</pre></td></tr></table></div>

</div><br><br>
`);
    window.text = `Ok, so this is the basic CSS of the page. It defines
    font color and background color of the page. On line 7, instead of body,
    ofcorse you could have used id or class of any division where you wanted
    these effects. 
    `;
    let l = 0;
    window.typing = setInterval(function(){
        if(l<text.length){
            $('.animate .cursor').remove()
            $('.animate').html($('.animate').html()+text[l++]);
            obj.html(obj.html().replace('\n','<br>'+terminalText));
            obj.append('<div class="cursor"></div>');
        }
        else {
            clearInterval(typing);
            $('.animate .cursor').remove();
            $('.animate').append('<div class="animate-cursor" />');
            $('.viewPad').animate({
                right:'1vw'
            },200,'linear');
            setTimeout(function(){
                window.next = screen2;
                $('.next').removeClass('disabled');
                text+=`Still no effect to html, lets see what we did.
                We defined display to be flex and "alignment" to be left.
                You can read about these on google. They are very usefull.
                
                Other than that, every thing else is full optional.
                
                Save this file with name 'style.css' in same directory as 'index.html'
                
                This will be a save point. You can click on next when finished.`;
                window.typing = setInterval(function(){
                    $('.animate-cursor').remove();
                    if(l<text.length){
                        $('.animate .cursor').remove()
                        $('.animate').html($('.animate').html()+text[l++]);
                        obj.html(obj.html().replace('\n','<br>'+terminalText));
                        obj.append('<div class="cursor"></div>');
                    }
                    else{
                        clearInterval(typing);
                        $('.animate .cursor').remove();
                        $('.animate').append('<div class="animate-cursor" />');
                    }
                },100);
            });
        }
    },100);

}
const screen3 = () =>{
    prev = screen2;
    next = screen4;
    doButtons();
    codeHead.html('<div style="color:darkorange">HTML</div>');
    codeObject.html(html1);
    text = ` Ok, So here is the html part of code. We are not going to change this much.`;
    typeFunction(function(){
       showViewPad(function(){
           text = `Currently The Screen is empty as we have not added any code or content.
                As you can see from line 5, we are going to include a CSS file with out project.
                We have used cdn of jquery on line 10. And on line 11, we have included our 
                javascript file.
                
                Also all our animation will be done inside animation division.   
                
                Ok, now double click on the code to copy it. After you copied it, paste it
                in a file and save it by 'index.html' name.
                
                Ok, now this is a checkpoint, after you have completed above task, press NEXT :)`;
           typeFunction();
       });
    });
}
const screen2 = () => {
    prev = screen1;
    next = screen3;
    text = `
    Ok, so here are different parts of this website. On the right`;
    typeFunction(function(){
        showViewPad(function(){
            text = `
            
            On this white screen, you will see the output as we code  →


            On the bottom, there are two buttons, PREVIOUS will take you to previous save point.
            And NEXT will take you to next save point.

            I will ask you to click on next, whenever we reach a save point.
            Ok, so we have reached a save point,click on NEXT to proceed`;
            typeFunction();
        });
    });
};
const screen1 = () =>{
    next = screen2;
    prev = undefined;
    doButtons();
    text = `
    Hi there,
    As you can see this is a typing animation. 
    Lets see how it was made.
    
    We will be using JQuery, HTML and CSS.
    I would expect you know a little of HTML, but if you don't, you can learn it @ www.w3schools.com/
    
    and you don't need to dig into others, I will be explaining what is happening as we code.
    
    Click on NEXT to proceed.`;
    typeFunction(function(){console.log('Completed'); });
};
next =screen1;
next();
$('.next').click(nextFunction);
$('.prev').click(prevFunction);
