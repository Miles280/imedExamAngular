J’ai affiché tous les produits avec le design demandé, j’ai bien différencié ceux en promo avec une bordure verte et un badge en haut à droite.
J’utilise un formulaire réactif avec les 3 filtres obligatoires (titre, prix max, promo only), et le filtrage se fait en temps réel.

J’ai aussi mis le total des produits affichés, et j’ai une fonction qui calcule le prix avec remise arrondi à 2 chiffres.
J’ai eu un petit bug avec formGroup non reconnu mais j’ai réglé ça en important ReactiveFormsModule.

J'ai appris un peu sur le tas les formulaires à la maison et les filtres j'ai vu ça aujourd'hui pour la première fois. Je pense avoir compris et avoir utiliser les pratiques les plus intéressantes pour la version 18 mais voilà je suis pas sûr.

J'ai d'ailleurs un bug : Je trie en fonction du prix de base et non pas du prix après réduction, je n'ai pas le temps de rectifié.
Pour changer ça je devrais faire en sorte de dire "Si l'article à une remise, met l'article dans la liste si son prix après remise est inférieur au prix max, sinon met l'article dans la liste si son prix de base est inférieur au prix max".
