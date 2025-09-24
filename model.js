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
        console.log("xi:" + this.xi + "yi:"+this.yi);
    }

    this.maFctGérantLeDéplacement = (evt) => {
        if (this.pressed){
            this.xf = getMousePosition(canvas,evt).x;
            this.yf = getMousePosition(canvas,evt).y;
            console.log("xf:" + this.xf +"yf:" + this.yf);

        }
    }

    this.maFctGérantLeRelâchement = (evt) =>{
        this.pressed = false;
        this.xi = 0;
        this.yi = 0;
        this.xf = 0;
        this.yf = 0;
        console.log("Relachement");

    }

    canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
    canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);

}




function Forme (couleur,epaisseur){
    this.couleur = couleur || "#000000";
    this.epaisseur = epaisseur || 1;

    this.getCouleur = ()=>{
        return this.couleur;
    }

    this.getEpaisseur = ()=>{
        return this.epaisseur;
    }

    this.setCouleur = (c) =>{
        this.couleur = c;
    }

    this.setEpaisseur = (e) =>{
        this.epaisseur = e;
    }

    
}

//
function Rectangle(couleur,epaisseur,hauteur,largeur,point_haut_gauche){//point_haut_gauche = [x,y]
    Forme.call(this,couleur,epaisseur);
    this.point_haut_gauche = point_haut_gauche;
    this.hauteur = hauteur;
    this.largeur = largeur;
}

Rectangle.prototype = Object.create(Forme.prototype);
Rectangle.prototype.constructor = Rectangle;

function Ligne(couleur,epaisseur,p1,p2){
    Forme.call(this,couleur,epaisseur);
    this.p1 = p1;//p = [x,y]
    this.p2 = p2;

}

Ligne.prototype = Object.create(Forme.prototype);
Ligne.prototype.constructor = Ligne;




let dnd = new DnD(canvas);