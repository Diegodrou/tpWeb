
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;
	this.ctx = ctx;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);
	document.getElementById("butLine").addEventListener("click", () => {
    pencil.currEditingMode = editingMode.line;
	});

	document.getElementById("butRect").addEventListener("click", () => {
    pencil.currEditingMode = editingMode.rect;
	});

	// Color picker
	document.getElementById("colour").addEventListener("input", (e) => {
		pencil.currColour = e.target.value; 
	});

	// Line width selector
	document.getElementById("spinnerWidth").addEventListener("input", (e) => {
		pencil.currLineWidth = parseInt(e.target.value, 10);
	});


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = (dnd) =>{
		if (this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle(this.currColour,this.currLineWidth,0,0,[dnd.xi,dnd.yi]);
			
		}else{
			
			this.currentShape = new Ligne(this.currColour,this.currLineWidth,[dnd.xi,dnd.yi],[dnd.xi,dnd.yi]);
		}
		this.drawing.paint(this.ctx);
		this.currentShape.paint(this.ctx);
	}

	this.onInteractionUpdate = (dnd) =>{
		if (dnd.pressed){
			if(this.currEditingMode == editingMode.rect){
				this.currentShape.setLargeur(dnd.xf - this.currentShape.getInitX());
            	this.currentShape.setHauteur(dnd.yf - this.currentShape.getInitY());
			}
			else if(this.currEditingMode == editingMode.line){
				this.currentShape.setP2([dnd.xf, dnd.yf]);
			}
			// Redessiner
			this.drawing.paint(this.ctx);
			// Dessiner la forme en cours par-dessus (pour effet "preview")
			this.currentShape.paint(this.ctx);
		}

	}

	this.onInteractionEnd =  (dnd) =>{
		if (this.currEditingMode == editingMode.rect) {
			// Créer le rectangle définitif
			this.currentShape = new Rectangle(
				this.currColour,
				this.currLineWidth,
				dnd.yf - dnd.yi,   // hauteur
				dnd.xf - dnd.xi,   // largeur
				[dnd.xi, dnd.yi]   // coordonnées de départ
			);
		} else {
			// Créer la ligne définitive
			this.currentShape = new Ligne(
				this.currColour,
				this.currLineWidth,
				[dnd.xi, dnd.yi],
				[dnd.xf, dnd.yf]
			);
	}

	// Ajouter la forme au dessin
	this.drawing.addForm(this.currentShape);

	// Rafraîchir le canvas
	this.drawing.paint(this.ctx);

	// Reset pour la prochaine interaction
	this.currentShape = 0;
	}
};





