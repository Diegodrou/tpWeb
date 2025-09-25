
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

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = (dnd) =>{
		if (this.currEditingMode == editingMode.rect){
			this.currentShape= new Rectangle(this.currColour,this.currLineWidth,0,0,[dnd.xi,dnd.yi]);
			
		}else{
			this.currentShape = new Ligne(this.currColour,this.currLineWidth,[dnd.xi,dnd.yi],[dnd.xf,dnd.yf]);
		}
		this.drawing.paint(this.ctx)
	}

	this.onInteractionUpdate = (dnd) =>{
		if (dnd.pressed){
			if(editingMode == editingMode.rect){
				this.currentShape.setHauteur(this.currentShape.getInitY() + dnd.yf);
			}
			else{
				this.currentShape.setLargeur(this.currentShape.getInitX() + dnd.xf);
			}
			this.drawing.paint(this.ctx)
		}

	}

	this.onInteractionEnd =  () =>{
		
	}
};


