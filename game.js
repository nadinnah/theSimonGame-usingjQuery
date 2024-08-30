var buttonColours=["red", "blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


function nextSequence(){
    level++;
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);  
    $("h1").text("level " +level);
    
}

$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    var lastColour= userClickedPattern.length -1;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    if(checkAnswer(lastColour)){
        playSound(userChosenColour);
    }else{
        playSound("wrong");
    }
    
    
   
    
    

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
        case "wrong":
            var wrongAudio= new Audio("./sounds/wrong.mp3");
            wrongAudio.play();
            break;
        
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
function checkAnswer(lastColour){
    var lastColour= userClickedPattern.length -1
    if(userClickedPattern[lastColour] !== gamePattern[lastColour]){
        playSound("wrong");

        $("#level-title").text("Game Over");
        $("body").addClass("game-over");
        var wrongAudio= new Audio("./sounds/wrong.mp3");
        wrongAudio.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
            userClickedPattern = [];
            gamePattern = [];
            level = 0;
            $("#level-title").text("Press A to start");
            }, 500);
            return false;
            }
            else{
                if(userClickedPattern.length === gamePattern.length){
                    setTimeout(function(){
                        nextSequence();
                    }, 1000);
                }
                return true;
                }
}

// function checkAnswer(lastColor) {
//     if (userClickedPattern[lastColor] === gamePattern[lastColor]) {
//       console.log("Success!");
//       if (userClickedPattern.length === gamePattern.length) {
//         setTimeOut (function() {
//           nextSequence();
//         }, 1000);
//       } else {
//         console.log("Wrong");
//       }
//     }
//   };


// function checkAnswers(currentLevel){
//     var x=0;
//     while(x<gamePattern.length){
//         if(gamePattern[x]===userClickedPattern[x]){
//             x++;
//             }
//             else{
//                 alert("Game Over");
//                 gamePattern=[];
//                 return false;
//             }
//     }
//     return true;
    // if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    //     for(var i=0;i<gamePattern.length;i++){
    //         if(userClickedPattern[i] === gamePattern[i]){
    //             continue;

    //         }
            
    //     }
    //     console.log("success");
    // }else{
    //     console.log("fail");
    // }

//}