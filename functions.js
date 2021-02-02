let ID = 0

function clickHandler(ID) {
    console.log("pressed") 
    let a = 0
    var intervalID = window.setInterval(myCallback, 1250);
        function myCallback()
            {
                console.log(a++)
            }
     ID = intervalID       
     console.log("once",intervalID,a)
}   

function clickStopHandler(ID) {
    console.log("pressed_stopped")
    window.clearInterval(ID)
}   