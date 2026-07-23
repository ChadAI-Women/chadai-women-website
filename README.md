# ChadAI Women — Plateforme web

Site vitrine et plateforme de contenu de **ChadAI Women**, première communauté dédiée à l'autonomisation des femmes tchadiennes dans l'intelligence artificielle et les technologies numériques.

- 🌐 Site public : pages Mission, Équipe, Programmes, Événements, Blog, Ressources, Galerie, Opportunités et Contact
- 📝 CMS headless pour gérer les articles du blog et les opportunités (emplois, bourses, hackathons…)

## Architecture

Le dépôt est un **monorepo** avec deux applications indépendantes qui communiquent uniquement par API HTTP :

```
chadai-women-website/
├── web/   # Frontend — React 18 + Vite + TypeScript + Tailwind + shadcn/ui
└── cms/   # Backend — Strapi 5 (API de contenu headless)
```

Points clés :

- Le frontend **fonctionne sans le CMS** : chaque contenu dynamique (blog, opportunités) a des données de repli locales. Si Strapi est éteint ou injoignable, le site reste entièrement fonctionnel.
- Le frontend est un site **100 % statique** après build (`web/dist`) — hébergeable gratuitement.
- Strapi n'est nécessaire qu'en production pour publier du contenu réel, via `VITE_STRAPI_URL`.

## Prérequis

- **Node.js ≥ 20** (requis par Strapi 5)
- npm

## Démarrage rapide

### 1. Frontend (site public)

```bash
npm install
npm --prefix web install
npm run dev
```

Le site est disponible sur `http://localhost:8082`.

### 2. CMS (optionnel en développement)

```bash
npm --prefix cms install
cp cms/.env.example cms/.env   # puis remplacer toutes les valeurs "tobemodified"
npm run dev:cms
```

L'admin Strapi est disponible sur `http://localhost:1337/admin` (créer le compte administrateur au premier lancement).

Pour connecter le frontend au CMS local :

```bash
cp web/.env.example web/.env   # contient VITE_STRAPI_URL=http://localhost:1337
```

## Scripts (racine)

| Script | Description |
|---|---|
| `npm run dev` | Serveur de développement du site (port 8082) |
| `npm run build` | Build de production du site → `web/dist` |
| `npm run preview:web` | Prévisualisation du build |
| `npm run lint:web` | Lint du frontend |
| `npm run dev:cms` | Strapi en mode développement (port 1337) |
| `npm run build:cms` | Build de l'admin Strapi |
| `npm run cms:start` | Strapi en mode production |

Tests frontend : `npm --prefix web run test` (Vitest).

## Variables d'environnement

### `web/.env`

| Variable | Rôle | Défaut |
|---|---|---|
| `VITE_STRAPI_URL` | URL de l'API Strapi | `http://localhost:1337` |

### `cms/.env`

Copier `cms/.env.example` et **remplacer toutes les valeurs `tobemodified`** par des secrets aléatoires (`openssl rand -base64 32`). En production, ajouter la configuration PostgreSQL (voir Déploiement).

> ⚠️ **Ne jamais commiter `cms/.env`** — il contient les clés secrètes du CMS. Il est déjà exclu par `cms/.gitignore`.

## Contenu géré par le CMS

| Type | Collection API | Utilisé par |
|---|---|---|
| **Article** | `articles` | Page Blog + section Blog de l'accueil |
| **Catégorie** | `categories` | Classement éditorial des articles |
| **Opportunité** | `opportunities` | Page Opportunités (job board) |
| **Événement** | `events` | Page Événements |

Les énumérations Strapi utilisent des clés **minuscules sans accents** (`emploi`, `bourse`, `debutant`, `conference`…) ; le frontend les convertit en libellés accentués via `web/src/hooks/useStrapiOpportunities.ts` et `useStrapiArticles.ts`. Ne pas renommer ces clés sans mettre à jour les deux côtés.

### Rendre l'API publique en lecture

Dans l'admin Strapi :

1. **Content Manager** → créer et **publier** les contenus (bouton *Publish*).
2. **Settings → Users & Permissions → Roles → Public** → autoriser uniquement `find` et `findOne` sur Article, Catégorie, Opportunité et Événement.

## Déploiement

Les deux applications se déploient **séparément**.

### Frontend (statique)

Netlify, Cloudflare Pages ou Vercel :

- Commande de build : `npm run build` (racine) ou `npm run build` dans `web/`
- Dossier publié : `web/dist`
- Le fichier `web/public/_redirects` gère le routage SPA (Netlify)
- Définir `VITE_STRAPI_URL=https://cms.votre-domaine.org` **au moment du build** si le CMS est en ligne

### CMS (Strapi)

Render, Railway ou VPS — nécessite Node 20+ et PostgreSQL :

```bash
# cms/.env de production
DATABASE_CLIENT=postgres
DATABASE_URL=postgres://user:password@host:5432/chadai_cms
DATABASE_SSL=true
```

- Build : `npm run build` puis `npm run start` (dans `cms/`)
- SQLite (défaut local) ne convient pas aux hébergeurs à système de fichiers éphémère
- Prévoir un stockage persistant (ou un provider S3) pour `cms/public/uploads`
- Restreindre le CORS de production au domaine du site dans `cms/config/middlewares.ts`

## Design system

- **Couleurs** : issues du drapeau tchadien — bleu `hsl(224 89% 26%)`, or `hsl(39 97% 48%)`, rouge `hsl(355 69% 47%)`, fond crème
- **Typographies** : Playfair Display (titres) + Work Sans (texte)
- **Tokens** : définis dans `web/src/index.css` et `web/tailwind.config.ts` ; utiliser `text-secondary-ink` (or foncé) pour les petits textes or sur fonds clairs (contraste WCAG AA)
- **Signature visuelle** : composant `FlagDash` (tirets tricolores) et motif tissé `bg-weave`

## Réseaux officiels

- LinkedIn : [chadai-women](https://www.linkedin.com/company/chadai-women)
- Facebook : [chadaiwomen](https://web.facebook.com/chadaiwomen)
- Instagram : [chadai_women](https://www.instagram.com/chadai_women)
- Contact : contact@chadaiwomen.org
