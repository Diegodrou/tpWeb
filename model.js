var canvas = document.getElementById('myCanvas');
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function getMousePosition(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
        x: evt.x - rect.left,
        y: evt.x - rect.top
        };
    };

function DnD (canvas,evt){
        this.xi = 0;
        this.yi = 0;
        this.xf = 0;
        this.yf = 0;
        this.pressed = false;

    this.maFctGérantLaPression = (evt) =>{
        this.xi = getMousePosition(canvas,evt).x;
        this.yi = getMousePosition(canvas,evt).y;
        this.pressed = true;
        console.log(this.xi);
        console.log(this.yi);
        console.log(this.pressed);
    }

    this.maFctGérantLeDéplacement = (evt) => {

    }

    this.maFctGérantLeRelâchement = (evt) =>{

    }

    canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
    canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
}

let dnd = new DnD(canvas);


// console.log("hello")
