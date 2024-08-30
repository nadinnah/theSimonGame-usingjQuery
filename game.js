var buttonColours=["red", "blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);  
    $("h1").text("level " +level);
    level++;
}

$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    
    animatePress(userChosenColour);
    var lastColour= userClickedPattern.length -1
    checkAnswers(lastColour);
    

});

function playSound(name){
    switch(name){
        case "red":
            $("#red").fadeOut(100).fadeIn(100);
            var redAudio= new Audio("./sounds/red.mp3");
            redAudio.play();
            break;
        case "blue":
            $("#blue").fadeOut(100).fadeIn(100);
            var blueAudio= new Audio("./sounds/blue.mp3");
            blueAudio.play();
            break;
        case "green":
            $("#green").fadeOut(100).fadeIn(100);
            var greenAudio= new Audio("./sounds/green.mp3");
            greenAudio.play();
            break;
        case "yellow":
            $("#yellow").fadeOut(100).fadeIn(100);
            var yellowAudio=new Audio("./sounds/yellow.mp3");
            yellowAudio.play();
            break;
        default: console.log(randomChosenColour);
    }  

}

function animatePress(currentColour){
        $('#' + currentColour).addClass("pressed");
        setTimeout(function(){
            $('#' + currentColour).removeClass("pressed");
        }, 100);

}
$("html").on("keypress", function(){
    
    $("h1").text("press A to start");
    nextSequence();
    
})

// function checkAnswers(currentLevel){
//     if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
//         for(var i=0;i<gamePattern.length;i++){
//             if(userClickedPattern[i] === gamePattern[i]){
//                 continue;

//             }
            
//         }
//         console.log("success");
//     }else{
//         console.log("fail");
//     }

// }