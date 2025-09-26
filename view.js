
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.rect(this.getInitX(), this.getInitY(),this.getLargeur(),this.getLargeur());
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
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