import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IResponseApi } from '../interfaces/response-api.interface';

const noDatas = (): Observable<HttpResponse<IResponseApi>> => {
  return of(
    new HttpResponse({
      status: 200,
      body: {
        datas: '',
      },
    }),
  );
};

const getPages = (): Observable<HttpResponse<IResponseApi>> => {
  return of(
    new HttpResponse<IResponseApi>({
      status: 200,
      body: {
        datas: JSON.stringify({
          home: [
            {
              uname: 'hero',
              redirectUrl: '/',
              type: 'section',
              title: 'Développement',
              subTitle: 'Logiciel',
              payload: {
                content:
                  "Je vous aide à faire évoluer votre entreprise, en proposant un système informatique sur mesure, en étant un acteur de l'optimisation de solution numérique.",
                values: [],
                picture: 'assets/images/hero.png',
              },
            },
            {
              uname: 'services',
              redirectUrl: '/mes-services',
              type: 'grid',
              title: 'Services',
              subTitle: '',
              payload: {
                content: null,
                values: [
                  {
                    title: 'Création de projet',
                    content: 'Etude de projet et choix de la stack technique (choix des outils)',
                    picture: 'fa fa-pencil',
                  },
                  {
                    title: 'Développement logiciel',
                    content: 'Construction des web app, CRM, etc... avec une documentation et un versionning',
                    picture: 'fa fa-pie-chart',
                  },
                  {
                    title: 'Mise à jour logiciel',
                    content: 'Traitement de code legacy et mise à jour complète des applications',
                    picture: 'fa fa-recycle',
                  },
                ],
                picture: null,
              },
            },
            {
              uname: 'whyus',
              redirectUrl: '/a-propos-de-moi',
              type: 'section',
              title: 'Afin que vous puissiez décider',
              subTitle: 'Voici quelques points important pour nourrir votre décision',
              payload: {
                content:
                  "Des années d'expérience en tant que développeur m'ont permis d'acquérir un environnement complet afin de créer et déployer une application, tenant en compte les bonnes pratiques de création de logiciel.",
                values: [
                  {
                    title: null,
                    content: 'Dockerisation des applications',
                    picture: null,
                  },
                  {
                    title: null,
                    content: "Création de test, cycle d'intégration continue et de déploiement continue",
                    picture: null,
                  },
                  {
                    title: null,
                    content: 'Maintient de documentation afin de contribuer à la transmission de savoir',
                    picture: null,
                  },
                ],
                picture: 'assets/images/whyus.jpg',
              },
            },
            {
              uname: 'action',
              type: 'call-to-action',
              title: 'Prêt à discuter de votre projet',
              subTitle: 'Echange sur la faisabilité du projet, estimation, devis',
              payload: null,
            },
            {
              uname: 'portfolio',
              redirectUrl: '/mon-portfolio',
              type: 'grid',
              title: 'Portfolio',
              subTitle: 'Quelques exemples de travaux accomplis.',
              payload: {
                content: null,
                values: [
                  {
                    title: 'Création de projet',
                    content: 'Etude de projet et choix de la stack technique (choix des outils)',
                    picture: 'fa fa-pencil',
                  },
                  {
                    title: 'Développement logiciel',
                    content: 'Construction des web app, CRM, etc... avec une documentation et un versionning',
                    picture: 'fa fa-pie-chart',
                  },
                  {
                    title: 'Mise à jour logiciel',
                    content: 'Traitement de code legacy et mise à jour complète des applications',
                    picture: 'fa fa-recycle',
                  },
                ],
                picture: null,
              },
            },
            {
              uname: 'blog',
              redirectUrl: '/mon-blog',
              type: 'grid',
              title: 'Articles de blog',
              subTitle: 'Quelques articles récemment publier.',
              payload: {
                content: null,
                values: [
                  {
                    title: 'Création de projet',
                    content: 'Etude de projet et choix de la stack technique (choix des outils)',
                    picture: 'fa fa-pencil',
                  },
                  {
                    title: 'Développement logiciel',
                    content: 'Construction des web app, CRM, etc... avec une documentation et un versionning',
                    picture: 'fa fa-pie-chart',
                  },
                  {
                    title: 'Mise à jour logiciel',
                    content: 'Traitement de code legacy et mise à jour complète des applications',
                    picture: 'fa fa-recycle',
                  },
                ],
                picture: null,
              },
            },
            {
              uname: 'contacts',
              redirectUrl: null,
              type: 'section',
              title: 'Contacts',
              subTitle: null,
              payload: {
                content: null,
                values: [
                  {
                    title: 'Email',
                    content: 'cedric.badjah@gmail.com',
                    picture: null,
                  },
                  {
                    title: 'Téléphone',
                    content: '0646603461',
                    picture: null,
                  },
                  {
                    title: 'Période',
                    content: 'Du lundi au Vendredi : 9h00 à 18h00',
                    picture: null,
                  },
                ],
                picture: null,
              },
            },
          ],
        }),
      },
    }),
  );
};

export const selectHandler = (request: HttpRequest<Record<string, any>>): (() => Observable<HttpResponse<Record<string, any>>>) => {
  switch (request.method) {
    case 'GET':
      return getPages;
    default:
      return noDatas;
  }
};
