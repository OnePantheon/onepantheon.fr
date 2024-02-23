---
title: Liste des catégories
description: La page d'accueil de la section d'articles de notre site.
---

Bienvenue sur la nouvelle fonctionnalité d'articles de notre site !

Celle-ci fonctionne grâce au framework Nuxt.JS 2.15 (très vieux mais fais son taff).  
Cet outil permet à nos membres d'écrire facilement des articles, tant que le site a été bien programmé !

Pour le moment, seulement un flux de contenu est disponible : [le blog](blog/).

On prévois aussi d'ajouter une catégorie *Cours* mais pour le moment, on priorise l'essentiel...

### Création d'articles

Cela se fait via pull request. Veuillez consulter notre [GitHub](https://github.com/onepantheon/onepantheon.fr).

Voici le code javascript pour générer l'entête de chaque article de blog :

```js
console.log(
  "---", 
  "\ntitle:", prompt("Titre ?"),
  "\ndescription:", prompt("Description ?"),
  "\ncreatedAt:", new Date().toISOString(),
  "\n---\n\n## Titre"
);
```
