function clickHandler(Parm1,Parm2) {
    console.log("pressed")
    let a = 0 
    var intervalID = window.setInterval(myCallback, 2000);
        function myCallback()
            {
               
                console.log(a++)
            //console.log(a);
            //console.log(b);
            }
     //console.log(intervalID)
}   