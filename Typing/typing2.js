const myWords=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", 
"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections",
"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
    
];

const textContainer=document.getElementById('text-container');
var userTypeContainer=document.getElementById('usertype-container')
//let startTime,endTime;
//let charIndex=0;
const startGame =()=>{
    let randomNumber=Math.floor(Math.random()*myWords.length);
     textContainer.innerText=myWords[randomNumber];  
 }

 var refresh=document.getElementById('refresh-container');
 refresh.addEventListener("click",function Reset(){
    startGame();
   
 });
 function calculate(str1,str2,t){
    let word1=str1.split(' ');
    let word2=str2.split(' ');
    let count=0;
    let index=0;

    word1.forEach(item => {
        if(item==word2[index]){
            count++;
        }
        index++;
    });
    let errorWords=word2.length-count;

    let wpm=(count-errorWords)/t*60;
    return wpm;
 }

//  function calculate(text , t){
//     var listOfWord = text.split(' ').length;
//      console.log(listOfWord)
//     var actual_text = textContainer.innerText;
//     var listOfActualWord = actual_text.split(" ");
//     var currectW = 0;
//     var wrongW =0;
//     var number_of_char = -1;
//     var number_of_wrong_char = 0 ;
//     for(var index=0; index<listOfWord.length; index++){
//         if(listOfActualWord[index] == listOfWord[index]){
//             currectW += 1;
//             number_of_char += (listOfActualWord[index].length + 1);
//         }
//         else{
//             wrongW +=1;
//             number_of_wrong_char += listOfWord[index].length;
//             console.log(number_of_wrong_char)
//         }
//     }
    
//     return ((number_of_char/5) - wrongW)/(t/60);
//  }

 var myInterval;
 var is_started=false;
 var wpm1;
 var wpm2;
 function start_timer(){
    var time ;
    if (timeContainer.innerText=="0:10"){  
       var counter=10;  
       time = counter;
    }
     else if(timeContainer.innerText=="0:30"){ 
        var counter=30; 
        time = counter;
    }
     else if(timeContainer.innerText=="1:00"){ 
        var counter=60; 
        time = counter;
    }
    else{
        counter=10;
        time = counter;
    }
    
    myInterval=setInterval( function (){
        counter--;
            
        if(counter>=0 ){
            wpm1 = calculate(textContainer.innerText,userTypeContainer.value,time);
            document.getElementById("wpmContainer").innerHTML = wpm1;
            timeContainer.innerHTML='0:'+counter;
        }else{
            wpm2 = calculate(textContainer.innerText,userTypeContainer.value,time);
            document.getElementById("wpm").innerHTML = wpm2;
            clearInterval(myInterval);
         userTypeContainer.readonly=true;
        userTypeContainer.disabled=true;    // whenever times up userTypeContainer will disabled
        
        
    }
            
    },1000)
    
}


function loop(){
userTypeContainer.addEventListener('keypress',function(){
    if(is_started==false){
        is_started = true;
        start_timer();
        
        
        }
    
})
}
var ten=document.getElementById('ten-sec');
ten.addEventListener("click",function Ten(){
    var tenSec=timeContainer.innerHTML='0:10';
    ten.style.background='red';
    thirty.style.background='#2A2A2A';
    min.style.background='#2A2A2A';
    userTypeContainer.value="";
    userTypeContainer.disabled=false;
    is_started=false;
    loop();
     startGame();
     
    
     

    
});
var thirty=document.getElementById('thirty-sec');
thirty.addEventListener("click",function Thirty(){
    var thirtySec=timeContainer.innerText='0:30';
    thirty.style.background='red';
    ten.style.background='#2A2A2A';
    min.style.background='#2A2A2A';
    userTypeContainer.value="";
    userTypeContainer.disabled=false;
    is_started=false;
    loop();
    startGame();
    
});
var min=document.getElementById('one-min');
min.addEventListener("click",function Min(){
    var oneMin=timeContainer.innerText='1:00';
    min.style.background='red';
    thirty.style.background='#2A2A2A';
    ten.style.background='#2A2A2A';
    userTypeContainer.value="";
    userTypeContainer.disabled=false;
    is_started=false;
    loop();
    startGame();
    
});

//  show or hide wpm 
var wpmContainer=document.getElementById('wpmContainer');
var hideOPT=document.getElementById('hideOPT');
hideOPT.addEventListener("click",function hide(){
    wpmContainer.setAttribute('class','hide');
   hideOPT.style.background="red";
   showOPT.style.background='#2A2A2A';
})
var showOPT=document.getElementById('showOPT');
showOPT.addEventListener("click",function show(){
    wpmContainer.setAttribute('class','show');
    showOPT.style.background='red';
    hideOPT.style.background='#2A2A2A';
})

// show or hide timer 

var timeContainer=document.getElementById('timeContainer');
var hideOption=document.getElementById('hide-opt');
hideOption.addEventListener("click",function hideTimer(){
    timeContainer.setAttribute('class','hideTime');
    hideOption.style.background="red";
   showOption.style.background='#2A2A2A';
})
var showOption=document.getElementById('show-opt');
showOption.addEventListener("click",function showTimer(){
    timeContainer.setAttribute('class','show');
    showOption.style.background='red';
    hideOption.style.background='#2A2A2A';
})

