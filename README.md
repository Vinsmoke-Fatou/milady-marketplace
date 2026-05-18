# Milady Marketplace — Backend

Backend officiel de **Milady Marketplace**, une plateforme e-commerce conçue pour permettre aux femmes entrepreneuses au Sénégal de vendre leurs produits via un système sécurisé, structuré et évolutif.

Ce dépôt contient uniquement la **partie backend** de l’application.

---

## Aperçu du projet

Le backend gère toute la logique serveur et les fonctionnalités essentielles de la plateforme :

- Authentification et gestion des utilisateurs
- Gestion des produits et boutiques
- Communication avec la base de données
- API REST sécurisée
- Paiements
- Gestion des images
- Messagerie temps réel
- Sécurité et protection des données

---

## Stack technique

Le projet utilise :

### Backend Core
- **Node.js**
- **Express.js**
- **TypeScript**

### Base de données
- **MongoDB**
- **Mongoose**

### Authentification & Sécurité
- **JWT (JSON Web Token)**
- **bcrypt**

### Communication & API
- **REST API**
- **Axios** *(tests ou communication externe)*

### Fonctionnalités avancées
- **Cloudinary** *(stockage d’images)*
- **Socket.io** *(chat temps réel)*
- **Stripe API** *(paiement international)*
- **Orange Money / Wave API** *(paiement mobile Sénégal)*

---

## Architecture du projet

Structure prévue :

```bash
src/
│
├── config/          # Configuration (DB, env, services)
├── controllers/     # Logique métier des routes
├── routes/          # Définition API endpoints
├── models/          # Modèles Mongoose
├── middlewares/     # Auth, erreurs, sécurité
├── services/        # Services métier et APIs externes
├── sockets/         # Socket.io / temps réel
├── utils/           # Helpers et utilitaires
├── types/           # Types TypeScript
├── validations/     # Validation des données
└── server.ts        # Point d’entrée du serveur
```

---

## Installation

### 1. Cloner le projet

```bash
git clone <repo-url>
```

### 2. Aller dans le dossier backend

```bash
cd backend
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer les variables d’environnement

Créer un fichier :

```bash
.env
```

Exemple :

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_key
STRIPE_SECRET_KEY=your_stripe_key
```

### 5. Lancer le serveur

Mode développement :

```bash
npm run dev
```

Serveur accessible sur :

```bash
http://localhost:5000
```

---

## Scripts disponibles

| Commande | Description |
|---|---|
| npm run dev | Lance le serveur en développement |
| npm run build | Compile TypeScript |
| npm start | Lance la version production |
| npm run lint | Vérifie la qualité du code |

---

## API REST (MVP)

Principales routes prévues :

### Authentification
- POST `/auth/register`
- POST `/auth/login`
- GET `/auth/profile`

### Produits
- GET `/products`
- GET `/products/:id`
- POST `/products`
- PUT `/products/:id`
- DELETE `/products/:id`

### Boutiques
- GET `/shops`
- POST `/shops`

### Messages
- GET `/messages`
- POST `/messages`

### Paiements
- POST `/payments`

---

## Fonctionnalités MVP

Fonctionnalités prioritaires :

- [ ] Authentification JWT
- [ ] Gestion utilisateurs
- [ ] CRUD produits
- [ ] Upload images Cloudinary
- [ ] Recherche et filtres
- [ ] Messagerie temps réel
- [ ] Paiement sécurisé
- [ ] Avis et notation
- [ ] Gestion boutiques

---

## Sécurité

Bonnes pratiques prévues :

- Hash des mots de passe avec bcrypt
- Authentification JWT
- Validation des données
- Gestion centralisée des erreurs
- Protection des routes privées
- Variables sensibles dans `.env`

---

## Collaboration

Règles de développement :

- Architecture propre et modulaire
- Code TypeScript lisible
- Controllers et services séparés
- Commits clairs et descriptifs
- Respect des conventions API REST

---

## Statut du projet

🚧 Backend en développement — construction du MVP en cours.

---

## Équipe

Projet académique et collaboratif développé dans le cadre de **Milady Marketplace**.