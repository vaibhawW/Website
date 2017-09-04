//Initializing the DOMS
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
let terminalText = '';
let index = 1;
const typingSpeed = 150;
const cursorCode = '<div class="cursor" />';
const animateCursorCode = '<div class="animate-cursor" />';
const transitionDuration = 200;

//codes
const html1   = ` <div style="background: #f0f0f0; overflow:auto;width:auto;color:black;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
<table><tr><td><pre style="margin: 0; line-height: 125%"> 1
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
</pre></td></tr></table></div>`;
const css1    = ` <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;color:black">
 <table><tr><td><pre style="margin: 0; line-height: 125%"> 1
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
</pre></td></tr></table></div>`;
const css2    = ` <div style="background: #f0f0f0; overflow:auto;width:auto;color:black;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
 <table><tr><td><pre style="margin: 0; line-height: 125%"> 1
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
19</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #0e84b5; font-weight: bold">.cursor</span> {
  <span style="color: #007020; font-weight: bold">display</span><span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">inline</span>;
  <span style="color: #007020; font-weight: bold">border-right</span><span style="color: #666666">:</span> <span style="color: #40a070">0.15em</span> <span style="color: #007020; font-weight: bold">solid</span> <span style="color: #007020">orange</span>;
}

<span style="color: #0e84b5; font-weight: bold">.animate-cursor</span> {
  <span style="color: #007020; font-weight: bold">display</span><span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">inline</span>;
  <span style="color: #007020; font-weight: bold">border-right</span><span style="color: #666666">:</span> <span style="color: #40a070">0.15em</span> <span style="color: #007020; font-weight: bold">solid</span> <span style="color: #007020">orange</span>;
  animation<span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">blink</span> <span style="color: #40a070">0.75s</span> step<span style="color: #666666">-</span>end infinite;
}

<span style="color: #007020; font-weight: bold">@keyframes</span> <span style="color: #062873; font-weight: bold">blink</span> {
  <span style="color: #062873; font-weight: bold">from</span><span style="color: #666666">,</span><span style="color: #062873; font-weight: bold">to</span> {
    <span style="color: #007020; font-weight: bold">border-color</span><span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">transparent</span>;
  }
  <span style="color: #062873; font-weight: bold">50</span><span style="color: #666666">%</span> {
    <span style="color: #007020; font-weight: bold">border-color</span><span style="color: #666666">:</span> <span style="color: #007020">orange</span>;
  }
}
</pre></td></tr></table></div>`;
const script1 = ` <div style="background: #f0f0f0; overflow:auto;width:auto;color:black;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
 <table><tr><td><pre style="margin: 0; line-height: 125%"> 1
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
19
20
21
22
23</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> terminalText <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;&gt;&gt;&quot;</span>;
<span style="color: #007020; font-weight: bold">var</span> text <span style="color: #666666">=</span> <span style="color:#03af07">\` 
Hi There !
How are you ?
\`</span>;

$(<span style="color: #4070a0">&#39;.animate&#39;</span>).text(terminalText);

<span style="color: #007020; font-weight: bold">let</span> l <span style="color: #666666">=</span> <span style="color: #40a070">1</span>;
<span style="color: #007020; font-weight: bold">var</span> typing <span style="color: #666666">=</span> setInterval(<span style="color: #007020; font-weight: bold">function</span>(){
  <span style="color: #007020; font-weight: bold">if</span>(l<span style="color: #666666">&lt;</span>text.length){
    $(<span style="color: #4070a0">&#39;.animate .cursor&#39;</span>).remove()
    $(<span style="color: #4070a0">&#39;.animate&#39;</span>).html($(<span style="color: #4070a0">&#39;.animate&#39;</span>).html()<span style="color: #666666">+</span>text[l<span style="color: #666666">++</span>]);
    <span style="color: #007020; font-weight: bold">var</span> obj <span style="color: #666666">=</span> $(<span style="color: #4070a0">&#39;.animate&#39;</span>);
    obj.html(obj.html().replace(<span style="color: #4070a0">&#39;\\n&#39;</span>,<span style="color: #4070a0">&#39;&lt;br&gt;&#39;</span><span style="color: #666666">+</span>terminalText));
    obj.append(<span style="color: #4070a0">&#39;&lt;div class=&quot;cursor&quot;&gt;&lt;/div&gt;&#39;</span>);
  }
  <span style="color: #007020; font-weight: bold">else</span> {
    clearInterval(typing);
    $(<span style="color: #4070a0">&#39;.animate .cursor&#39;</span>).remove();
    $(<span style="color: #4070a0">&#39;.animate&#39;</span>).append(<span style="color: #4070a0">&#39;&lt;div class=&quot;animate-cursor&quot; /&gt;&#39;</span>)
  }
},<span style="color: #40a070">100</span>);
</pre></td></tr></table></div>`;

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
    if (next) next();};
const prevFunction = () => {
    viewpad.animate({right: '-100vw'}, 200, 'linear');
    clearScreen();
    if (prev) prev();
};
const copyToClipboard = (element) => {
    let $temp = $("<input>");
    $("body").append(temp);
    $temp.text($(element).html()).select();
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
            if (callback) callback();
        }
    }, typingSpeed);
};
const showViewPad = (callback) =>{
    callback ? viewpad.animate({right: '1vw'}, transitionDuration, 'linear', callback) : viewpad.animate({right: '1vw'}, transitionDuration, 'linear');
};

//making screens
const screen6 = () => {
    prev = screen5;
    next = undefined;
    doButtons();
    codeHead.html('JAVASCRIPT');
    text = `
    We will store all text inside one variable, and then append 1 character each time to the division.
    You can google what setInterval and clearInterval does.`;
    typeFunction(function(){
        codeObject.html(script1).addClass('animateCode');
        showViewPad(function(){
            $('.hiddenView').show();
            const terminaltx = ">>";
            const tx = `
                Hi There!
                How are you?
                `;

            $('.an').text(terminaltx);

            let l = 1;
            const ty = setInterval(function(){
                if (l < tx.length) {
                    $('.an .cs').remove();
                    $('.an').html($('.an').html() + tx[l++]);
                    let objz = $('.an');
                    objz.html(objz.html().replace('\n', '<br>' + terminaltx));
                    objz.append('<div class="cs"></div>');
                } else {
                    clearInterval(ty);
                    $('.an .cs').remove();
                    $('.an').append('<div class="an-cs" />')
                }
            },100);
           text = `
           
           Now let's explain this code. On Line 1, We have decided a default code for terminal, that will be shown on every new line.
           On line 2, The text that we will be typing.
           On lin 7, we have selected the division on which we will be animating this stuff. The first text to appear should be terminal text.
           On line 9, we have defined a variable that is going to keep the index of letter that is to be added to the 'animation' division next time.
           On 10'th line, we started the setInterval function (see syntax of setInterval) and gave it a typing speed on line 23 = 100ms.
           On line 11,  we check if the l is still indexing within the text range. It is useless to run setInterval if all text has been typed.
           If it is still typing, i.e. l<text.length, then we remove the cursor from it's current position, add next letter and then add the cursor again.
           In this process, if we encounter a line break, then we replace that break with break tag.
           
           Now if l was indexing to more than text length, then we stop the setInterval function, remove the static cursor, and add an animated cursor to the 
           division.`;
           typeFunction();
        });
    });
};
const screen5 = () => {
    prev = screen4;
    next = screen6;
    doButtons();
    codeHead.html('CSS');
    codeObject.html(css2);
    text = ` Any typing animation generally contains a cursor, which does not blink when we are typing, and at ends, starts blinking.
    We have defined two kinds of cursor classes, .cursor and .animante-cursor for these two types of cursor properties.`;
    typeFunction(function(){
        showViewPad(function(){
            text = ` Add above code inside style. 
            
            Now lets see what various attributes do. In line 9, we have used an animation blink, that repeats for infinite time. We gave animate-cursor a 0.15em thick right border. We will change the color of this right border to give the effects of blinking. 
            As seen in blink keyframe, animation starts with transparent right border, then becomes orange, then again becomes transparent. And this cycle continues. cursor class has no animation as we dont want it to animate. 
            I can say display inline was need to make sure cursor has no other thickness other than border-right.`;
            typeFunction();
        });
    });
};
const screen4 = () => {
    prev = screen3;
    next = screen5;
    doButtons();
    codeHead.html(`CSS`);
    codeObject.html(css1);
    text = ` Ok, so this is the basic CSS of the page. It defines
    font color and background color of the page. On line 7, instead of body,
    ofcorse you could have used id or class of any division where you wanted
    these effects.`;
    typeFunction(function(){

        showViewPad(function(){
            text = ` Still no effect to html, lets see what we did.
                We defined display to be flex and "alignment" to be left.
                You can read about these on google. They are very usefull.
                
                Other than that, every thing else is full optional.
                
                Add this code inside style attribute.
                
                This will be a save point. You can click on next when finished.`;
            typeFunction();
        })
    });

};
const screen3 = () =>{
    prev = screen2;
    next = screen4;
    doButtons();
    codeHead.html('HTML');
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
};
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
