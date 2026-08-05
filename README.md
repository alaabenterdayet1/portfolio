# Portfolio — Ben Terdayet Alaa

Portfolio personnel, construit avec Angular. Présente le profil, l'expérience professionnelle,
les compétences techniques et la formation d'un étudiant ingénieur en informatique spécialisé
en cybersécurité / NIDS, à la recherche d'un stage en DevOps.

🔗 Démo : https://alaabenterdayet1.github.io/portfolio/

## Stack

- Angular 22 (standalone, signals)
- SCSS
- Déploiement automatique sur GitHub Pages via GitHub Actions

## Développement

```bash
npm install
ng serve
```

Ouvrir `http://localhost:4200/`.

## Build

```bash
ng build
```

Les artefacts sont générés dans `dist/portfolio/browser`.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`, qui build le
projet et le publie sur GitHub Pages. Pour activer les Pages : dans les paramètres du dépôt
GitHub → **Settings → Pages → Source**, choisir **GitHub Actions**.
