import {
  IConfBlog,
  IConfPortfolio,
  IContact,
  IPayload,
  IPicture,
  IRedirectUrls,
  ISection,
  ISkill,
  IValue,
  Position,
  SkillLevel,
} from '../interfaces/section.interface';
import { RouteName } from '../utils/config.core';

export class FakesDatas {
  static sectionHero: ISection = {
    uname: 'hero',
    redirectUrls: [
      {
        label: 'En savoir plus',
        path: RouteName.about.value,
      } as IRedirectUrls,
      {
        label: 'Me contacter',
        path: RouteName.contacts.value,
      } as IRedirectUrls,
    ] as IRedirectUrls[],
    type: 'section',
    title: 'Développement',
    subTitle: 'Logiciel',
    payload: {
      content:
        "Je vous aide à faire évoluer votre entreprise, en proposant un système informatique sur mesure, en étant un acteur de l'optimisation de solution numérique.",
      values: [] as string[],
      picture: {
        src: 'assets/images/hero.png',
        alt: 'Image de présentation logiciel',
      } as IPicture,
    } as IPayload,
  } as ISection;

  static sectionServices: ISection = {
    uname: 'services',
    type: 'grid',
    title: 'Services',
    subTitle: '',
    payload: {
      content: null,
      values: [
        JSON.stringify({
          title: 'Création de projet',
          content: 'Etude de projet et choix de la stack technique (choix des outils)',
          picture: {
            icon: 'fa fa-pencil',
          } as IPicture,
        } as IValue),
        JSON.stringify({
          title: 'Développement logiciel',
          content: 'Construction des web app, CRM, etc... avec une documentation et un versionning',
          picture: {
            icon: 'fa fa-pie-chart',
          } as IPicture,
        } as IValue),
        JSON.stringify({
          title: 'Mise à jour logiciel',
          content: 'Traitement de code legacy et mise à jour complète des applications',
          picture: {
            icon: 'fa fa-recycle',
          } as IPicture,
        } as IValue),
      ] as string[],
      picture: {
        src: 'assets/images/services.jpg',
        alt: 'Image de la page de services',
      } as IPicture,
    } as IPayload,
  } as ISection;

  static sectionWhyus: ISection = {
    uname: 'whyus',
    type: 'section',
    title: 'Afin que vous puissiez décider',
    subTitle: 'Voici quelques points important pour nourrir votre décision',
    payload: {
      content:
        "Des années d'expérience en tant que développeur m'ont permis d'acquérir un environnement complet afin de créer et déployer une application, tenant en compte les bonnes pratiques de création de logiciel.",
      values: [
        JSON.stringify({
          title: null,
          content: 'Dockerisation des applications',
          picture: null,
        } as IValue),
        JSON.stringify({
          title: null,
          content: "Création de test, cycle d'intégration continue et de déploiement continue",
          picture: null,
        } as IValue),
        JSON.stringify({
          title: null,
          content: 'Maintient de documentation afin de contribuer à la transmission de savoir',
          picture: null,
        } as IValue),
      ] as string[],
      picture: {
        src: 'assets/images/whyus.jpg',
        alt: 'Image de la section representant une prise de décision',
      } as IPicture,
    } as IPayload,
  } as ISection;

  static sectionCallToAction1: ISection = {
    uname: 'action',
    redirectUrls: [
      {
        label: 'Prendre contact',
        path: RouteName.contacts.value,
      } as IRedirectUrls,
    ] as IRedirectUrls[],
    type: 'call-to-action',
    title: 'Prêt à discuter de votre projet',
    subTitle: 'Echange sur la faisabilité du projet, estimation, devis',
    payload: null,
  } as ISection;

  static sectionCallToAction2: ISection = {
    uname: 'action',
    redirectUrls: [
      {
        label: 'Prendre contact',
        path: RouteName.contacts.value,
      } as IRedirectUrls,
    ] as IRedirectUrls[],
    type: 'call-to-action',
    title: 'Prêt à commencer votre projet?',
    subTitle: 'Echange sur la faisabilité du projet, estimation, devis',
    payload: null,
  } as ISection;

  static sectionPortfolio: ISection = {
    uname: 'portfolio',
    redirectUrls: [
      {
        label: 'Voir tout les projets',
        path: RouteName.portfolio.value,
      } as IRedirectUrls,
    ] as IRedirectUrls[],
    type: 'grid',
    title: 'Portfolio',
    subTitle: 'Quelques exemples de travaux accomplis.',
    payload: {
      content: null,
      values: [
        JSON.stringify({
          title: 'App 1',
          slug: 'app-1',
          category: 'Web design',
          client: 'New company',
          dateProjet: new Date().toISOString(),
          shortDescription:
            "Ceci est la description de l'App 1. 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.",
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!',
          toLandingPage: true,
          picturesProject: [
            {
              src: 'assets/images/portfolio/app-1.jpg',
              alt: 'Image du projet App 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/product-1.jpg',
              alt: 'Image du projet Product 1',
            } as IPicture,
          ] as IPicture[],
        } as IConfPortfolio) as string,
        JSON.stringify({
          title: 'Product 1',
          slug: 'product-1',
          category: 'Angular',
          client: 'New company',
          dateProjet: new Date().toISOString(),
          shortDescription:
            "Ceci est la description de l'App 1. 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.",
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!',
          toLandingPage: true,
          urlProjet: 'example.com',
          picturesProject: [
            {
              src: 'assets/images/portfolio/product-1.jpg',
              alt: 'Image du projet Product 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/app-1.jpg',
              alt: 'Image du projet App 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/branding-1.jpg',
              alt: 'Image du projet branding 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/books-1.jpg',
              alt: 'Image du projet books 1',
            } as IPicture,
          ] as IPicture[],
        } as IConfPortfolio) as string,
        JSON.stringify({
          title: 'Branding 1',
          slug: 'branding-1',
          category: 'Web design',
          client: 'New company',
          dateProjet: new Date().toISOString(),
          shortDescription:
            "Ceci est la description de l'App 1. 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.",
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!',
          toLandingPage: true,
          urlProjet: 'example.com',
          picturesProject: [
            {
              src: 'assets/images/portfolio/branding-1.jpg',
              alt: 'Image du projet Branding 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/product-1.jpg',
              alt: 'Image du projet Product 1',
            } as IPicture,
          ] as IPicture[],
        } as IConfPortfolio) as string,
        JSON.stringify({
          title: 'Books 1',
          slug: 'book-1',
          category: 'Association',
          client: 'New company',
          dateProjet: new Date().toISOString(),
          shortDescription:
            "Ceci est la description de l'App 1. 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.",
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!',
          toLandingPage: false,
          urlProjet: 'example.com',
          picturesProject: [
            {
              src: 'assets/images/portfolio/books-1.jpg',
              alt: 'Image du projet books 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/product-1.jpg',
              alt: 'Image du projet Product 1',
            } as IPicture,
          ] as IPicture[],
        } as IConfPortfolio) as string,
        JSON.stringify({
          title: 'App 2',
          slug: 'app-2',
          category: 'Association',
          client: 'New company',
          dateProjet: new Date().toISOString(),
          shortDescription:
            "Ceci est la description de l'App 1. 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.",
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Ab amet delectus ipsa officiis? Animi blanditiis, ducimus eius itaque laudantium molestias natus quisquam unde vitae!',
          toLandingPage: false,
          urlProjet: 'example.com',
          picturesProject: [
            {
              src: 'assets/images/portfolio/app-2.jpg',
              alt: 'Image du projet books 1',
            } as IPicture,
            {
              src: 'assets/images/portfolio/product-1.jpg',
              alt: 'Image du projet Product 1',
            } as IPicture,
          ] as IPicture[],
        } as IConfPortfolio) as string,
      ] as string[],
      picture: null,
    } as IPayload,
  } as ISection;

  static sectionBlog: ISection = {
    uname: 'blog',
    type: 'grid',
    title: 'Articles de blog',
    subTitle: 'Quelques articles récemment publier.',
    payload: {
      content: null,
      values: [
        JSON.stringify({
          title: 'Comment hébergé un site web',
          slug: 'comment-heberger-site-web',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.',
          category: 'Web',
          datePublish: new Date().toISOString(),
          author: 'Samakunchan',
          picture: {
            src: 'assets/images/blog/blog-1.jpg',
            alt: 'Image du blog blog-1',
          } as IPicture,
          toLandingPage: true,
        } as IConfBlog),
        JSON.stringify({
          title: 'Comment travailler avec google adword',
          slug: 'comment-travailler-avec-google-adword',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.',
          category: 'Web',
          datePublish: new Date().toISOString(),
          author: 'Samakunchan',
          picture: {
            src: 'assets/images/blog/blog-2.jpg',
            alt: 'Image du blog blog-2',
          } as IPicture,
          toLandingPage: true,
        } as IConfBlog),
        JSON.stringify({
          title: 'Pourquoi le web marketing est important',
          slug: 'pourquoi-le-web-marketing-est-si-important',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.',
          category: 'Web',
          datePublish: new Date().toISOString(),
          author: 'Samakunchan',
          picture: {
            src: 'assets/images/blog/blog-2.jpg',
            alt: 'Image du blog blog-2',
          } as IPicture,
          toLandingPage: true,
        } as IConfBlog),
        JSON.stringify({
          title: 'Comment travailler avec google adword',
          slug: 'comment-travailler-avec-google-adword',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.',
          category: 'Web',
          datePublish: new Date().toISOString(),
          author: 'Samakunchan',
          picture: {
            src: 'assets/images/blog/blog-2.jpg',
            alt: 'Image du blog blog-2',
          } as IPicture,
          toLandingPage: true,
        } as IConfBlog),
        JSON.stringify({
          title: 'Comment travailler avec google adword',
          slug: 'comment-travailler-avec-google-adword',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.',
          category: 'Web',
          datePublish: new Date().toISOString(),
          author: 'Samakunchan',
          picture: {
            src: 'assets/images/blog/blog-2.jpg',
            alt: 'Image du blog blog-2',
          } as IPicture,
          toLandingPage: true,
        } as IConfBlog),
        JSON.stringify({
          title: 'Comment travailler avec google adword',
          slug: 'comment-travailler-avec-google-adword',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium laboriosam magnam perspiciatis quae.',
          category: 'Web',
          datePublish: new Date().toISOString(),
          author: 'Samakunchan',
          picture: {
            src: 'assets/images/blog/blog-2.jpg',
            alt: 'Image du blog blog-2',
          } as IPicture,
          toLandingPage: true,
        } as IConfBlog),
      ] as string[],
      picture: null,
    } as IPayload,
  } as ISection;

  static sectionContacts: ISection = {
    uname: 'contacts',
    type: 'section',
    title: 'Contacts',
    subTitle: '',
    payload: {
      content: null,
      values: [
        JSON.stringify({
          type: 'Email',
          value: 'cedric.badjah@gmail.com',
          picture: null,
        } as IContact),
        JSON.stringify({
          type: 'Téléphone',
          value: '0646603461',
          picture: null,
        } as IContact),
        JSON.stringify({
          type: 'Période',
          value: 'Du lundi au Vendredi : 9h00 à 18h00',
          picture: null,
        } as IContact),
      ] as string[],
      picture: null,
    } as IPayload,
  } as ISection;

  static sectionStats: ISection = {
    uname: 'stats',
    redirectUrls: [
      {
        label: 'En savoir plus',
        path: RouteName.about.value,
      } as IRedirectUrls,
      {
        label: 'Me contacter',
        path: RouteName.contacts.value,
      } as IRedirectUrls,
    ] as IRedirectUrls[],
    type: 'section',
    title: 'Développement',
    subTitle: 'Logiciel',
    payload: {
      content:
        "Je vous aide à faire évoluer votre entreprise, en proposant un système informatique sur mesure, en étant un acteur de l'optimisation de solution numérique.",
      values: [
        JSON.stringify({ techno: 'Java', level: SkillLevel.basic, position: Position.back } as ISkill),
        JSON.stringify({ techno: 'PHP', level: SkillLevel.advanced, position: Position.back } as ISkill),
        JSON.stringify({ techno: 'HTML5/CSS3', level: SkillLevel.expert, position: Position.front } as ISkill),
        JSON.stringify({ techno: 'Javascript', level: SkillLevel.advanced, position: Position.front } as ISkill),
        JSON.stringify({ techno: 'Angular', level: SkillLevel.expert, position: Position.front } as ISkill),
        JSON.stringify({ techno: 'Flutter', level: SkillLevel.intermediate, position: Position.front } as ISkill),
        JSON.stringify({ techno: 'TDD', level: SkillLevel.learning } as ISkill),
        JSON.stringify({ techno: 'Docker', level: SkillLevel.advanced, position: Position.back } as ISkill),
        JSON.stringify({ techno: 'Documentation', level: SkillLevel.expert } as ISkill),
        JSON.stringify({ techno: 'CI/CD (Jenkins, Github action...)', level: SkillLevel.advanced, position: Position.back } as ISkill),
      ] as string[],
      picture: {
        src: 'assets/images/aboutus.png',
        alt: 'Image représentant mes compétences',
      } as IPicture,
    } as IPayload,
  } as ISection;
}
