import { Component } from '@angular/core';

interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly profile = {
    name: 'Ben Terdayet Alaa',
    title: "Étudiant Ingénieur en Informatique — Spécialité NIDS",
    tagline:
      "À la recherche d'un stage en DevOps pour concevoir et industrialiser des pipelines CI/CD, containeriser des applications et automatiser le déploiement d'infrastructures cloud-native.",
    phone: '+216 95 343 410',
    email: 'Alaa.benterdayet@esprit.tn',
    linkedin: 'linkedin.com/in/alaa-ben-terdayet',
    linkedinUrl: 'https://linkedin.com/in/alaa-ben-terdayet',
    github: 'github.com/alaabenterdayet1',
    githubUrl: 'https://github.com/alaabenterdayet1'
  };

  protected readonly about =
    "Étudiant en 4ème année cycle ingénieur à ESPRIT, avec une solide expérience en DevOps et automatisation d'infrastructures (Docker, Kubernetes, GitLab CI/CD, Jenkins). Passionné par la cybersécurité (SOC, NIDS, Threat Intelligence) et le développement full-stack.";

  protected readonly experiences: Experience[] = [
    {
      role: 'Healthcare Threat Intelligence',
      org: 'ESPRIT — Projet académique',
      period: '2025 - 2026',
      description:
        "Infrastructure SOC complète : pfSense, Suricata/Snort (IDS/IPS), Wazuh (SIEM+XDR), MISP, TheHive (IRP), Shuffle (SOAR), segmentation VLAN et tunnel VPN. Corrélation des alertes Wazuh, playbooks SOAR, forensique post-incident, conformité HIPAA/GDPR/NIST. Plateforme de scoring IA des alertes avec frontend Angular (dashboards KPIs, visualisation temps réel) et backend REST Node.js/Express.js.",
      tags: ['pfSense', 'Wazuh', 'MISP', 'TheHive', 'Shuffle SOAR', 'Angular', 'Node.js']
    },
    {
      role: 'Développeur Full-Stack — Stage d\'Immersion',
      org: 'Insight Plus, Tunis',
      period: 'Juil. 2025 - Août 2025',
      description:
        "Application Bridge : gestion et déclaration des opérations de change entre bureaux de change et la BCT. Backend Symfony (architecture DDD), validation automatique des fichiers JSON/CSV/Excel selon les normes BCT. Frontend Angular (tableaux dynamiques, filtres, dashboard temps réel). Tests API Postman, tests unitaires, CI/CD GitLab.",
      tags: ['Symfony', 'DDD', 'Angular', 'Postman', 'GitLab CI/CD']
    },
    {
      role: 'Développeur Full-Stack — PFE',
      org: 'Djerba Explore',
      period: 'Fév. 2024 - Juin 2024',
      description:
        "Système IoT complet : extraction, nettoyage et stockage de données capteurs, visualisation temps réel web et mobile. Stack : Node.js/Express.js (API), Angular (dashboard web), Flutter (app mobile), MongoDB.",
      tags: ['Node.js', 'Angular', 'Flutter', 'MongoDB', 'IoT']
    },
    {
      role: 'Développeur Web — Stages',
      org: 'Tunisie Booking / Group Info Comm',
      period: 'Jan. 2022 - Fév. 2023',
      description:
        "Tunisie Booking : application de gestion de qualité (PHP, jQuery, HTML/CSS, Bootstrap). Group Info Comm : site vitrine responsive (HTML, CSS, JavaScript).",
      tags: ['PHP', 'jQuery', 'Bootstrap', 'HTML/CSS', 'JavaScript']
    }
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      category: 'Cybersécurité',
      items: ['Wazuh', 'MISP', 'pfSense', 'Suricata', 'Snort', 'TheHive', 'Shuffle SOAR', 'Velociraptor', 'Nessus', 'OpenVAS']
    },
    {
      category: 'SOC & Détection',
      items: ['Threat Hunting', 'NIDS', 'IDS/IPS', 'Threat Intelligence', 'Forensics', 'Incident Response', 'Scoring IA']
    },
    {
      category: 'Réseau & Sécurité',
      items: ['VLAN', 'VPN', 'DMZ', 'Zero Trust', 'TLS/IPSec', 'Active Directory', 'n8n']
    },
    {
      category: 'DevOps & CI/CD',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD']
    },
    {
      category: 'Dev Web/Mobile',
      items: ['Angular', 'Node.js/Express.js', 'Symfony', 'Flutter', 'PHP', 'Java', 'Python', 'Dart', 'MySQL', 'MongoDB']
    }
  ];

  protected readonly education: Education[] = [
    {
      degree: 'Cycle Ingénieur Informatique — 4ème année (en cours)',
      school: "ESPRIT, École Supérieure Privée d'Ingénierie et de Technologies",
      period: '2024 - Présent'
    },
    {
      degree: 'Licence Technologies Informatiques — Développement Systèmes',
      school: 'Institut Supérieur des Études Technologiques de Djerba',
      period: '2021 - 2023'
    },
    {
      degree: 'Baccalauréat Sciences Expérimentales',
      school: 'Lycée Technique Homet Souk, Djerba',
      period: '2017 - 2021'
    }
  ];

  protected readonly languages = [
    { name: 'Arabe', level: 'Maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Courant' }
  ];

  protected readonly currentYear = new Date().getFullYear();
}
