
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD (canvas,interactor){
    this.xi = 0;
    this.yi = 0;
    this.xf = 0;
    this.yf = 0;
    this.pressed = false;

    this.maFctGérantLaPression = (evt) =>{
        this.xi = getMousePosition(canvas,evt).x;
        this.yi = getMousePosition(canvas,evt).y;
        this.pressed = true;
        if(interactor && interactor.onInteractionStart) interactor.onInteractionStart(this);
        console.log("xi:" + this.xi + "yi:"+this.yi);
    }

    this.maFctGérantLeDéplacement = (evt) => {
        if (this.pressed){
            this.xf = getMousePosition(canvas,evt).x;
            this.yf = getMousePosition(canvas,evt).y;
            if(interactor && interactor.onInteractionUpdate) interactor.onInteractionUpdate(this);
            console.log("xf:" + this.xf +"yf:" + this.yf);

        }
    }

    this.maFctGérantLeRelâchement = (evt) =>{
        this.pressed = false;
        this.xi = 0;
        this.yi = 0;
        this.xf = 0;
        this.yf = 0;
        if(interactor && interactor.onInteractionEnd) interactor.onInteractionEnd(this);
        console.log("Relachement");

    }

    canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
    canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



