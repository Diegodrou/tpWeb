# TP1 : Application Web de Dessin Vectoriel en JavaScript

## Objectif du TP

Ce premier TP de **WE** (Web Engineering) a pour but de revenir sur les bases du développement d’une application Web **sans framework**, en utilisant uniquement **HTML5**, **CSS** et **JavaScript**.
L’objectif final est de construire à la main une application suffisamment complexe pour motiver ensuite l’utilisation d’un framework comme **Angular**.

---

## Sujet

L’application réalisée est un éditeur de dessin vectoriel permettant de :

* Dessiner des rectangles et des lignes sur un canevas HTML5 (`<canvas>`),
* Modifier la couleur et l’épaisseur du trait,
* Gérer une liste des formes dessinées,
* Supprimer une forme existante,
* Et afficher en temps réel le rendu via une architecture **MVC (Modèle–Vue–Contrôleur)** côté client.

---

## Architecture du projet

Le projet est structuré en plusieurs fichiers JavaScript correspondant aux différentes couches du MVC :

| Fichier          | Rôle                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `interaction.js` | Gère les interactions utilisateur (événements souris, drag & drop).                                 |
| `model.js`       | Définit les classes du modèle : `Drawing`, `Form`, `Rectangle`, `Line`.                             |
| `view.js`        | Définit la vue : mise à jour du canvas et de la liste des formes.                                   |
| `controller.js`  | Gère la logique de dessin (crayon, création et ajout de formes).                                    |
| `canvas.html`    | Page principale contenant le canevas, les boutons, le sélecteur de couleur et l’épaisseur du trait. |
| `canvas.css`     | Feuille de style définissant la mise en forme de la page.                                           |

---

## Fonctionnalités principales

### Dessin

* Sélection du mode de dessin : rectangle ou ligne
* Choix de la couleur et de l’épaisseur du trait
* Interaction drag-n-drop pour définir la taille et la position de la forme

### Modèle (Model)

* Représentation du dessin sous forme de collection de formes (`Drawing`)
* Gestion des attributs graphiques : couleur, épaisseur, coordonnées

### Vue (View)

* Affichage des formes sur le canvas via le contexte 2D (`ctx`)
* Actualisation dynamique de la liste des formes dessinées
* Possibilité de supprimer une forme via un bouton dans la liste

### Contrôleur (Controller)

* Gestion de l’outil Pencil (crayon interactif)
* Synchronisation entre les événements utilisateur et la mise à jour du modèle
* Redessin automatique de la vue après chaque modification

---

## Installation et exécution

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/<ton-utilisateur>/<ton-depot>.git
   cd <ton-depot>
   ```

2. **Ouvrir le projet**
   Il n’y a pas besoin de serveur web ni de dépendances externes.
   Il suffit d’ouvrir le fichier `canvas.html` directement dans un navigateur web moderne (Chrome, Firefox, Edge...).

3. **Tester l’application**

   * Sélectionner le type de forme (rectangle ou ligne)
   * Choisir la couleur et l’épaisseur du trait
   * Dessiner sur le canevas à l’aide de la souris
   * Observer la liste des formes générée automatiquement

---

## Ressource utile

* [TP de référence – barais/tpWeb](https://github.com/barais/tpWeb)

---

## Ce que j’ai appris

En réalisant ce TP, j’ai appris à :

* Structurer une application web en suivant le **modèle MVC** côté client ;
* Manipuler le **DOM** et les événements en **JavaScript pur** sans framework ;
* Comprendre la logique des **interactions Drag & Drop** dans un contexte graphique ;
* Gérer dynamiquement une **liste d’objets** (formes) et leurs suppressions ;
* Écrire et mieux comprendre du **code JavaScript legacy** (ancien style, sans classes ES6) ;
* Apprécier la complexité d’une application sans framework et comprendre la valeur ajoutée d’outils comme **Angular**.
---

## Auteur

**Nom :** Diego Droulers
**TP :** WE – TP1 : BINV
**Langages utilisés :** HTML5, CSS3, JavaScript

