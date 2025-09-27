
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

function updateShapeList(forme,drawing){

  const str = `${forme.constructor.name}: ${forme.couleur}, width=${forme.epaisseur}`;

  const li = document.createElement("li");
  // text
  const span = document.createElement("span");
  span.textContent = str;

  // button
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-sm btn-outline-danger";
  btn.innerHTML = '<span class="glyphicon glyphicon-remove-sign"></span>';

  btn.addEventListener("click", () => {
    li.remove();
    drawing.formes = drawing.formes.filter(f => f !== forme);
    drawing.paint(ctx);
  });
  
  li.appendChild(btn);
  li.appendChild(span);
  
  const shape_list = document.getElementById("shapeList");
  shape_list.appendChild(li);




}
