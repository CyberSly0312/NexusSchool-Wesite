// Toutes les données ci-dessous sont fictives — utilisées uniquement à des fins
// de démonstration marketing. Aucune donnée réelle d'établissement, d'élève ou
// de client n'apparaît sur ce site vitrine.

export const nav = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La plateforme', href: '#plateforme' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pourquoi Nexus', href: '#pourquoi' },
  { label: 'À propos', href: '#apropos' },
]

export const heroStats = [
  { label: 'Élèves suivis', value: 1248, suffix: '' },
  { label: 'Enseignants actifs', value: 86, suffix: '' },
  { label: 'Taux de présence', value: 94.6, suffix: '%' },
  { label: 'Classes pilotées', value: 42, suffix: '' },
]

export const modules = [
  { key: 'academique', label: 'Académique', icon: 'GraduationCap' },
  { key: 'eleves', label: 'Élèves', icon: 'Users' },
  { key: 'enseignants', label: 'Enseignants', icon: 'Presentation' },
  { key: 'presences', label: 'Présences', icon: 'CalendarCheck' },
  { key: 'emplois', label: "Emplois du temps", icon: 'CalendarClock' },
  { key: 'finances', label: 'Suivi financier', icon: 'Wallet' },
  { key: 'communication', label: 'Communication', icon: 'MessageCircle' },
  { key: 'pilotage', label: 'Pilotage', icon: 'Gauge' },
]

export const problems = [
  {
    title: 'Informations dispersées',
    body: "Notes, présences, paiements et messages vivent chacun dans leur propre carnet, tableur ou application, sans jamais se recouper.",
    icon: 'FolderKanban',
  },
  {
    title: 'Tâches répétitives',
    body: "Bulletins, relances et rapports recommencent chaque trimestre, en grande partie à la main.",
    icon: 'Repeat',
  },
  {
    title: 'Visibilité limitée',
    body: "Savoir où en est réellement l'établissement demande souvent d'attendre le prochain conseil.",
    icon: 'EyeOff',
  },
  {
    title: 'Communication fragmentée',
    body: "Parents, enseignants et direction échangent par des canaux différents, sans historique commun.",
    icon: 'Split',
  },
]

export const audiences = [
  {
    role: 'Direction',
    line: "Une vision globale de votre établissement.",
    detail: "Suivez les indicateurs qui comptent — effectifs, résultats, finances — sans attendre le prochain rapport.",
    icon: 'Compass',
  },
  {
    role: 'Administration',
    line: "Moins de tâches répétitives, plus de temps pour l'essentiel.",
    detail: "Automatisez les démarches courantes pour vous concentrer sur ce qui a vraiment besoin de votre attention.",
    icon: 'ClipboardList',
  },
  {
    role: 'Enseignants',
    line: "Les outils nécessaires pour suivre et accompagner leurs élèves.",
    detail: "Présences, notes et communication avec les familles depuis un même espace, pensé pour la salle de classe.",
    icon: 'Presentation',
  },
  {
    role: 'Parents',
    line: "Une meilleure visibilité sur la vie scolaire.",
    detail: "Suivez la progression, les présences et les échanges avec l'établissement, où que vous soyez.",
    icon: 'Users',
  },
  {
    role: 'Élèves',
    line: "Une expérience numérique simple et accessible.",
    detail: "Un accès clair à leur emploi du temps, leurs résultats et leurs échanges avec l'établissement.",
    icon: 'Sparkles',
  },
]

export const africaPoints = [
  { label: 'Francophone', body: "Une interface pensée en français, de bout en bout — pas une traduction." },
  { label: 'FCFA natif', body: "Le suivi financier est construit autour des réalités monétaires locales." },
  { label: 'Toutes tailles', body: "D'un établissement en croissance à un réseau de plusieurs écoles." },
  { label: 'Accessibilité', body: "Conçu pour rester fluide, même avec une connexion internet modeste." },
]

export const productTabs = [
  {
    key: 'pilotage',
    label: 'Pilotage',
    heading: "Une vue d'ensemble, en un coup d'œil",
    body: "Les indicateurs clés de l'établissement — effectifs, présence, résultats — réunis sur un seul écran, actualisés en continu.",
  },
  {
    key: 'academique',
    label: 'Académique',
    heading: "Le suivi pédagogique, structuré",
    body: "De la saisie des notes à la génération des bulletins, chaque étape du suivi académique gagne en clarté.",
  },
  {
    key: 'administration',
    label: 'Administration',
    heading: "Les démarches courantes, simplifiées",
    body: "Inscriptions, dossiers et suivi financier avancent sans ressaisie ni classeur papier.",
  },
  {
    key: 'communication',
    label: 'Communication',
    heading: "Un seul fil, pour tout le monde",
    body: "Direction, enseignants, parents et élèves échangent au même endroit, avec un historique clair.",
  },
]

export const benefits = [
  { title: 'Centraliser', body: "Toutes les informations importantes au même endroit.", icon: 'Layers' },
  { title: 'Simplifier', body: "Réduire les tâches administratives répétitives.", icon: 'Wand2' },
  { title: 'Piloter', body: "Prendre de meilleures décisions grâce à une vision claire.", icon: 'Compass' },
  { title: 'Connecter', body: "Faciliter les échanges entre établissement, enseignants, élèves et parents.", icon: 'Link2' },
  { title: 'Évoluer', body: "Accompagner la croissance de l'établissement, sans rupture.", icon: 'TrendingUp' },
]

export const securityPoints = [
  { title: "Contrôle des accès", body: "Chaque personne ne voit que ce qui la concerne, selon son rôle.", icon: 'KeyRound' },
  { title: "Protection des données", body: "Les informations de votre établissement restent cloisonnées et protégées.", icon: 'ShieldCheck' },
  { title: "Espaces séparés", body: "Chaque établissement dispose de son propre espace, isolé des autres.", icon: 'Boxes' },
  { title: "Traçabilité", body: "Les actions importantes peuvent être suivies dans le temps.", icon: 'History' },
]

export const footerLinks = {
  produit: [
    { label: 'La plateforme', href: '#plateforme' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Sécurité', href: '#securite' },
  ],
  entreprise: [
    { label: 'À propos', href: '#apropos' },
    { label: 'Contact', href: '#contact' },
  ],
  ressources: [
    { label: 'Demander une démonstration', href: '#contact' },
  ],
}

export const establishmentSizes = [
  "Moins de 200 élèves",
  "200 à 600 élèves",
  "600 à 1500 élèves",
  "Plus de 1500 élèves",
  "Réseau de plusieurs établissements",
]
