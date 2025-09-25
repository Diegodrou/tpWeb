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

function Drawing (formes){
    this.formes = formes;
    
    this.getForms = () =>{
        return this.formes;
    }
    
    this.addForm = (forme) =>{
        this.formes.push(forme);
    }
}

//
function Rectangle(couleur,epaisseur,hauteur,largeur,point_haut_gauche){//point_haut_gauche = [x,y]
    Forme.call(this,couleur,epaisseur);
    this.point_haut_gauche = point_haut_gauche;
    this.hauteur = hauteur;
    this.largeur = largeur;

    this.getInitX = () => {
        return this.point_haut_gauche[0];
    }

    this.getInitY = () =>{
        return this.point_haut_gauche[1];
    }

    this.getFinalX = () => {
        return this.point_haut_gauche[0] + largeur;
    }

    this.getFinalY = () => {
        return this.point_haut_gauche[1] + hauteur;
    }

    this.setHauteur = (h) =>{
        this.hauteur = h;
    }

    this.setLargeur = (l) =>{
        this.largeur = l;
    }
}

Rectangle.prototype = Object.create(Forme.prototype);
Rectangle.prototype.constructor = Rectangle;

function Ligne(couleur,epaisseur,p1,p2){
    Forme.call(this,couleur,epaisseur);
    this.p1 = p1;//p = [x,y]
    this.p2 = p2;

    this.getInitX = () => {
        return this.p1[0];
    }

    this.getInitY = () =>{
        return this.p1[1];
    }

    this.getFinalX = () => {
        return this.p2[0];
    }

    this.getFinalY = () => {
        return this.p2[1];
    }

}

Ligne.prototype = Object.create(Forme.prototype);
Ligne.prototype.constructor = Ligne;

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY());
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};
Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
    });
};

