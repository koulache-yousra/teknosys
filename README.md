# Teknosys

Un site web construit avec Next.js 16, React 19 et Tailwind CSS 4.

## Aperçu
Teknosys est une application web basée sur l'App Router de Next.js. Elle s’appuie sur un design moderne, des composants accessibles (Radix UI), et Tailwind CSS pour un développement rapide.

## Pile technique
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI et composants UI prêts à l’emploi (`components/ui/*`)

## Prérequis
- Node.js 18+ (recommandé: 20+)
- pnpm, npm ou yarn (au choix)

## Installation
Cloner le dépôt puis installer les dépendances avec votre gestionnaire préféré.

```bash
# pnpm (recommandé)
pnpm install

# ou npm
npm install

# ou yarn
yarn install
```

## Démarrer en local
```bash
# développement (hot reload)
pnpm dev
# ou
npm run dev
# ou
yarn dev
```
L’application sera disponible sur `http://localhost:3000`.

## Scripts disponibles
- `dev`: lance le serveur de développement Next.js
- `build`: construit l’application pour la production
- `start`: démarre le serveur en mode production (après `build`)
- `lint`: exécute ESLint

Exemples:
```bash
pnpm build && pnpm start
```

## Structure du projet
```
app/                 # pages et routes (App Router)
  layout.tsx         # layout racine
  page.tsx           # page d’accueil
  ...                # autres routes (about, contact, services, partners, references)
components/          # composants d’interface
  ui/                # librairie de composants (Radix UI + Tailwind)
data/                # données statiques (ex: partenaires)
hooks/               # hooks réutilisables
lib/                 # utilitaires
public/              # assets publics (images, icônes)
styles/              # styles globaux (Tailwind)
```

## Personnalisation du thème
- Tailwind CSS est configuré (v4). Les styles globaux sont dans `app/globals.css` et `styles/globals.css`.
- Les composants UI (`components/ui/*`) sont basés sur Radix UI et Tailwind, facilement personnalisables.
- Un provider de thème est disponible via `components/theme-provider.tsx`.

## Configuration Next.js
La configuration se trouve dans `next.config.mjs`. Par défaut:
- Typescript: `ignoreBuildErrors: true` (à ajuster pour la CI stricte)
- Images: `unoptimized: true` (utile en environnement non-Vercel)

## Déploiement
L’application peut être déployée sur:
- Vercel (recommandé pour Next.js)
- Toute plateforme Node.js (Docker, Render, Railway, etc.)

Étapes générales (ex. Vercel):
1. Pousser le code sur un dépôt Git (GitHub/GitLab/Bitbucket).
2. Importer le dépôt sur Vercel.
3. Laisser Vercel détecter Next.js et builder automatiquement.

## Qualité et vérifications
```bash
pnpm lint
```
Activez des règles plus strictes si nécessaire et corrigez les erreurs avant les merges.

## FAQ
- Node 18 ou 20 ?
  - Next.js 16 fonctionne très bien avec Node 18+, mais Node 20 est recommandé.
- Où ajouter de nouvelles pages ?
  - Dans `app/` en créant un dossier `ma-page/` avec un `page.tsx`.
- Où mettre de nouvelles images ?
  - Dans `public/` puis référencer via `/nom-du-fichier.ext`.

## Licence
Indiquez ici la licence du projet (par ex. MIT). Si non spécifiée, ajoutez-en une au besoin.

## Auteurs et remerciements
- UI inspirée par l’écosystème Radix UI et Tailwind CSS.
- Icônes via `lucide-react`.

---
