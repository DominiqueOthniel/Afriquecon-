# Site Afrique-con

Site web moderne pour Afrique-con Plc, compagnie de transport inter-urbain en Afrique.

## Démarrage en développement

Installer les dépendances:

```bash
npm install
```

Lancer le serveur de développement:

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build de production

Pour créer un build optimisé pour la production:

```bash
npm run build
npm start
```

## Déploiement Netlify

Ce projet est optimisé pour Netlify avec configuration automatique.

### Prérequis

- Compte Netlify (gratuit: https://www.netlify.com)
- Repository Git (GitHub, GitLab ou Bitbucket)

### Configuration automatique

Le fichier `netlify.toml` configure automatiquement:
- Build avec Next.js 16 et Node 20
- Plugin @netlify/plugin-nextjs pour optimisation
- Cache des assets statiques (1 an)
- Headers de sécurité (X-Frame-Options, CSP, etc.)
- Redirections SEO

### Déploiement

**Option 1: Depuis le dashboard Netlify**

1. Connectez-vous sur https://app.netlify.com
2. Cliquez sur "Add new site" > "Import an existing project"
3. Connectez votre repository Git
4. Netlify détecte automatiquement la configuration
5. Cliquez sur "Deploy"

**Option 2: Avec Netlify CLI**

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Fonctionnalités Netlify activées

- **Formulaire de réservation**: Envoi via Netlify Forms (pas de backend requis)
- **Images Unsplash**: Configuration remotePatterns pour next/image
- **Cache optimisé**: Assets statiques avec headers Cache-Control
- **Sécurité**: Headers CSP et protection XSS

### Variables d'environnement (optionnel)

Si vous souhaitez ajouter des intégrations:

```bash
# Dans le dashboard Netlify > Site settings > Environment variables
NEXT_PUBLIC_GA_ID=votre-id-google-analytics
```

### Support

Le site est prêt à être déployé tel quel. La configuration Netlify est optimale pour Next.js 16.

Pour plus d'informations: https://docs.netlify.com/integrations/frameworks/next-js/

## Technologies

- Next.js 16.3.8 avec App Router
- React 19
- TypeScript 5
- Tailwind CSS v4
- Netlify pour hébergement et formulaires

## Structure du projet

```
afrique-con-redesign/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             # Composants React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Routes.tsx
│   ├── ComfortClasses.tsx
│   ├── Booking.tsx
│   └── Footer.tsx
├── public/                 # Assets statiques
├── netlify.toml           # Configuration Netlify
└── next.config.ts         # Configuration Next.js
```

## Licence

© 2026 Afrique-con Plc. Tous droits réservés.
