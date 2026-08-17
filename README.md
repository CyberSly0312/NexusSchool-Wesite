# Nexus School — Site vitrine

Site vitrine commercial de Nexus School : présentation du produit, de sa
valeur et de son positionnement, sans exposer l'architecture interne de la
plateforme. React + Vite + Tailwind CSS, entièrement frontend.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site est servi en local (voir l'URL affichée dans le terminal, en
général `http://localhost:5173`).

## Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans `dist/`. Prévisualisez le résultat
avec :

```bash
npm run preview
```

## Structure du projet

```
src/
├── components/         # Composants réutilisables (Navbar, Footer, Button, cartes…)
├── sections/           # Une section de la landing page = un fichier
├── pages/
│   ├── Site.jsx         # Assemble les sections de la page publique
│   └── AdminPage.jsx    # Page d'administration (logo, couleurs, liens)
├── context/
│   └── SiteConfigContext.jsx  # État global logo/couleurs/liens (+ localStorage)
├── data/
│   ├── content.js       # Tous les textes et données fictives, séparés des composants
│   ├── site-config.json # Valeurs par défaut du logo/couleurs/liens (voir /admin)
│   └── socialIcons.js   # Icônes disponibles pour les liens du pied de page
├── App.jsx              # Routes ("/" et "/admin")
└── index.css            # Design tokens globaux + variables CSS de couleur
```

## Page d'administration (`/admin`)

Une page d'administration permet de gérer visuellement :

- **le logo** (import d'un fichier, avec retour au badge "N" par défaut) ;
- **les couleurs de marque** (bleu profond, bleu, bleu vif, ambre, sarcelle,
  argile) via des sélecteurs de couleur ;
- **les liens & réseaux** affichés dans le pied de page (icône, nom, URL).

Accès : `http://localhost:5173/admin` (ou `https://votredomaine.com/admin`
une fois déployé), protégé par un code d'accès simple (`nexus-admin` par
défaut, modifiable dans `src/components/AdminGate.jsx`).

**⚠️ Important — comment les changements deviennent visibles pour tout le
monde :**

Ce site n'a pas de backend ni de base de données : les modifications faites
dans `/admin` sont enregistrées dans le `localStorage` du navigateur utilisé,
donc visibles uniquement en aperçu, dans ce navigateur-là. Pour publier les
changements pour l'ensemble des visiteurs :

1. Réglez le logo, les couleurs et les liens dans `/admin`.
2. Cliquez sur **« Télécharger la configuration »** — un fichier
   `site-config.json` est téléchargé.
3. Remplacez `src/data/site-config.json` par ce fichier téléchargé.
4. Relancez `npm run build` et redéployez le site.

Le bouton **« Réinitialiser tout »** efface l'aperçu local et revient au
contenu de `src/data/site-config.json`. Le bouton **« Importer une
configuration »** permet de recharger un fichier `site-config.json`
existant pour continuer à l'éditer.

### Sécuriser `/admin` en production

Le code d'accès de `/admin` est une protection légère côté client — il
n'empêche pas un visiteur déterminé d'y accéder, puisqu'il n'y a pas de
backend pour vérifier une vraie authentification. Pour un usage en
production, ajoutez une protection au niveau de l'hébergeur, par exemple :

- Authentification HTTP basique sur la route `/admin` (Vercel, Netlify,
  Cloudflare Pages proposent toutes une option de ce type) ;
- Cloudflare Access ou équivalent si le site est derrière Cloudflare ;
- Ou, plus tard, un vrai backend avec authentification si Nexus School a
  besoin d'une administration multi-utilisateurs.

### Hébergement : redirection SPA

`/admin` est une route gérée côté client (React Router). Sur un
hébergement statique, configurez une redirection de type "SPA fallback"
pour que toutes les routes servent `index.html` (sinon `/admin` renverra
une 404 en accès direct ou après rafraîchissement) :

- **Netlify** : ajoutez un fichier `public/_redirects` avec `/* /index.html 200`
- **Vercel** : ajoutez une règle de rewrite `{ "source": "/(.*)", "destination": "/index.html" }`
  dans `vercel.json`

## Modifier les textes

Tous les textes marketing (titres, paragraphes, cartes, données fictives des
tableaux de bord) sont centralisés dans `src/data/content.js`. Modifiez ce
fichier plutôt que le JSX des sections : c'est la seule source de vérité
pour le contenu.

Les données chiffrées affichées dans les aperçus produit (`heroStats`,
`mockRows` dans `ProductExperience.jsx`, etc.) sont **fictives** — à but de
démonstration uniquement.

## Modifier les couleurs

Les 6 couleurs de marque (`blue-deep`, `blue`, `blue-bright`, `amber`,
`teal`, `clay`) se modifient désormais **depuis la page `/admin`** (voir
plus haut) — c'est la méthode recommandée. Techniquement, elles sont
définies comme variables CSS dans `src/index.css` (`:root`) et lues par
`tailwind.config.js`, ce qui permet de les changer à l'exécution.

Les autres tokens (polices, ombres, rayons, teintes neutres `ink` / `paper`,
variantes `soft` / `mist` très claires) restent statiques dans
`tailwind.config.js` sous `theme.extend` :

- `ink` / `paper` — texte et fonds neutres
- `fontFamily.display` (Space Grotesk) / `fontFamily.body` (Inter) /
  `fontFamily.mono` (JetBrains Mono, utilisé pour les labels et données)

## Formulaire de contact

Le formulaire (`src/sections/Contact.jsx`) fonctionne en frontend
uniquement pour cette première version. La fonction `submitDemoRequest`
est le point d'intégration prévu pour brancher plus tard une API, un
service comme Formspree ou Resend, ou le backend Nexus School.

## Bonnes pratiques respectées

- `prefers-reduced-motion` est respecté globalement (voir `src/index.css`)
- Contraste, focus visible au clavier et HTML sémantique
- Aucune donnée réelle d'établissement, d'élève ou de client — tout est fictif
- Aucun secret ni clé d'API dans le code frontend
