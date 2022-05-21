var start = new Date().getTime();   

function makeShapeAppear() {

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";
    } else{
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

function makeShapeAppearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');

    var color = '#';

    for (var i = 0; i < 6; i++ ) {

    color += letters[Math.round(Math.random() * 15)];

    }

    return color;

}

makeShapeAppearAfterDelay();

document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";

    document.getElementById("shape").style.width = ((Math.random() * 200) + 100) + "px";

    document.getElementById("shape").style.height = ((Math.random() * 200) + 100) + "px";

    document.getElementById("shape").style.top = (Math.random() * 200) + "px";

    document.getElementById("shape").style.left = (Math.random() * 800) + "px";

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    var end = new Date().getTime();

    var time_taken = (end - start) / 1000;
    
    document.getElementById("tseconds").innerHTML = time_taken +"seconds";

    makeShapeAppearAfterDelay();

}
