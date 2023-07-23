export enum ErrorMessage {
  title = 'POOOLICEEEEE',
  internetOffline = 'Pas de connexion internet.',
  serverOffline = 'Le serveur est hors ligne.',
  unAuthorized = 'Vous n‘avez pas les autorisations requises pour effectuer cette action.',
  notFound = 'Ressource introuvable.',
  errorServer = 'Votre client n‘a pas reçu de réponse de la part du serveur distant.',
  commonError = 'Une érreur est survenu. Veuillez contacter un administrateur.',
  urlConstructor = 'URL constructor.',
  isNotValidUrl = 'is not a valid URL.',
}

export class RouteName {
  /**
   * @description Navigation: /page-introuvable
   */
  static notFound: string = 'page-introuvable';
  /**
   * @description Navigation: /page-introuvable
   */
  static unAuthorized: string = 'page-non-autorisé';
  /**
   * @description Titre de l'application
   */
  static home: string = 'papangue';

  /**
   * @description Navigation: /admin
   */
  static admin: string = 'admin';
  /**
   * @description Navigation: /tableau-de-bord
   */
  static dashboard: string = 'tableau-de-bord';
  /**
   * @description Navigation front: /mes-services
   * @description Navigation back: /services
   * @description NB: Pour la route back, utilisez le code suivant pour garder que le dernier mot clé:
   * @example```ts
   * RouteName.services.split('-').reverse()[0]
   */
  static services: string = 'mes-services';
  /**
   * @description Navigation front: /mon-blog
   * @description Navigation back: /blog
   * @description NB: Pour la route back, utilisez le code suivant pour garder que le dernier mot clé:
   * @example```ts
   * RouteName.blog.split('-').reverse()[0]
   * ```
   */
  static blog: string = 'mon-blog';
  /**
   * @description Navigation front: /mon-portfolio
   * @description Navigation back: /portfolio
   * @description NB: Pour la route back, utilisez le code suivant pour garder que le dernier mot clé:
   * @example```ts
   * RouteName.portfolio.split('-').reverse()[0]
   * ```
   */
  static portfolio: string = 'mon-portfolio';
  /**
   * @description Navigation: /bibliothèque
   */
  static documents: string = 'bibliothèque';
  /**
   * @description Navigation: /environnements
   */
  static environments: string = 'environnements';
  /**
   * @description Navigation: /a-propos-de-moi
   */
  static about: string = 'a-propos-de-moi';
  /**
   * @description Navigation: /cgv
   */
  static cgv: string = 'cgv';
}
