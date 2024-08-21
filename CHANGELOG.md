# CHANGELOG PAPANGUE

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🚀 0.7.0 - 21/08/2024

### Nouveautés

- Mise à jour de la version angular qui passe de la **version 15** à la **version 16**.

### Changements

- Pas de changements.

### Correctifs

- Pas de fixes.


## 🚀 0.6.0 - 21/08/2024

### Nouveautés

- Ajout d'un helper pour les relatives path des images.

### Changements

- Modification des paths avec le nouveau helper.
- Documentation des environnements

### Correctifs

- Pas de fixes.


## 🚀 0.5.1 - 15/08/2023

### Nouveautés

- Ajout d'un déclencheur ci pour les fixes

### Changements

- Modification des noms "portfolio" pour "projets"
- Modification des interfaces et adaptation des fakeDatas

### Correctifs

- Modification des propriétés en adaptation avec l'API
- Ajout de l'environnement pour récuperer l'url de l'API pour les documents


## 🚀 0.5.0 - 31/07/2023

### Nouveautés

- Installation de la PWA
- Ajout des pipes pour la transformation des données
- Ajout des pages et sections manquantes (stats, portfolio-details, blog-details)
- Ajout de la page contacts
- Création d'une interface pour les routes
- Création d'un fichier pour la gestion des animations
- Création d'un fichier fake datas pour mieux gérer les mocks

### Changements

- Changement du format des données (voir mock)
- Modification du format des routes name
- Intégration complète des pages avec le nouveau format de données

### Correctifs

- Tout les tests unitaires. Juste l'initialisation.
- Mise à jour du budget pour le style scss

## 🚀 0.4.0 - 13/07/2023

### Nouveautés

- Ajout du template EuSoft pour le front
- Ajout d'un premier jet de texte statique
- Ajout des assets (images, css, font)
- Création d'un pipemodule pour tout les pipes
- Création d'un pipe uc first
- Création d'un pipe pour parser le texte du menu
- Ajout d'un windows service pour mieuw selectionner les éléments du windows

### Changements

- Ajout des dépendances bootstrap, aos, glighbox dans le package.json
- Mise à jour des tests pour le page public component
- Augmentation de la taille du bundle pour que le build passe

### Correctifs

- Pas de fixe

## 🚀 0.3.0 - 07/07/2023

### Nouveautés

- Ajout des modules et components en lazy loading front/back
- Ajout des routes front/back
- Création d'une structure pour le front/back

### Changements

- Suppression de l'ancien component home

### Correctifs

- Pas de fixe

## 🔨 0.2.2 - 03/07/2023

### Nouveautés

- Aucun élément supplémentaire ajouter

### Changements

- Changement dans la procdure de récupération de tokens, on call une nouvelle url avec seulement le "code" ou le "refresh_token"
- Changement du client id
- Remise en place des méthodes login/logout de la home page

### Correctifs

- Pas de fixe

## 🚀 0.2.0 - 25/06/2023

### Nouveautés

- Ajout et configuration d'eslint
- Installation de Jest comme moteur pour les tests
- Gestion de l'authentification depuis l'initializer de l'app module
- Gestion de l'expiration du token depuis l'initializer de l'authentication module
- Création d'un guard pour gérer les pages `/admin`
- Création d'un component `admin`

### Changements

- Suppression de Jasmine et Karma
- Refacto structure

### Correctifs

- Pas de fixe

---

## 🚀 0.1.0 - 01/02/2023

### Nouveautés

- Initialisation du projet
- Ajout d'un système d'interceptor
- Ajout d'un système de gestion des érreurs
- Ajout d'une librairies de toast pour les notifications
- Ajout d'un système de storage
- Branchement de keycloak et de l'API sur l'APP INITIALIZER

### Changements

- Pas de changement

### Correctifs

- Pas de fixe
