# CHANGELOG PAPANGUE

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🚀 0.4.0 - 13/07/2023

### Added

- Ajout du template EuSoft pour le front
- Ajout d'un premier jet de texte statique
- Ajout des assets (images, css, font)
- Création d'un pipemodule pour tout les pipes
- Création d'un pipe uc first
- Création d'un pipe pour parser le texte du menu
- Ajout d'un windows service pour mieuw selectionner les éléments du windows

### Changed

- Ajout des dépendances bootstrap, aos, glighbox dans le package.json
- Mise à jour des tests pour le page public component
- Augmentation de la taille du bundle pour que le build passe

### Fixed

- Pas de fixe

## 🚀 0.3.0 - 07/07/2023

### Added

- Ajout des modules et components en lazy loading front/back
- Ajout des routes front/back
- Création d'une structure pour le front/back

### Changed

- Suppression de l'ancien component home

### Fixed

- Pas de fixe

## 🔨 0.2.2 - 03/07/2023

### Added

- Aucun élément supplémentaire ajouter

### Changed

- Changement dans la procdure de récupération de tokens, on call une nouvelle url avec seulement le "code" ou le "refresh_token"
- Changement du client id
- Remise en place des méthodes login/logout de la home page

### Fixed

- Pas de fixe

## 🚀 0.2.0 - 25/06/2023

### Added

- Ajout et configuration d'eslint
- Installation de Jest comme moteur pour les tests
- Gestion de l'authentification depuis l'initializer de l'app module
- Gestion de l'expiration du token depuis l'initializer de l'authentication module
- Création d'un guard pour gérer les pages `/admin`
- Création d'un component `admin`

### Changed

- Suppression de Jasmine et Karma
- Refacto structure

### Fixed

- Pas de fixe

---

## 🚀 0.1.0 - 01/02/2023

### Added

- Initialisation du projet
- Ajout d'un système d'interceptor
- Ajout d'un système de gestion des érreurs
- Ajout d'une librairies de toast pour les notifications
- Ajout d'un système de storage
- Branchement de keycloak et de l'API sur l'APP INITIALIZER

### Changed

- Pas de changement

### Fixed

- Pas de fixe
