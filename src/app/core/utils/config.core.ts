import { IRouteName } from '../interfaces/route-name.interface';

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
   @example ```
   {
     key: 'notFound',
     value: 'page-introuvable',
   }
   ```
   */
  static notFound: IRouteName = {
    key: 'notFound',
    value: 'page-introuvable',
  };

  /**
   * @description Navigation: /page-introuvable
   @example ```
   {
     key: 'unAuthorized',
     value: 'page-non-autorisé',
   }
   */
  static unAuthorized: IRouteName = {
    key: 'unAuthorized',
    value: 'page-non-autorisé',
  };

  /**
   * @description Titre de l'application
   @example ```
   {
     key: 'home',
     value: 'papangue',
   }
   */
  static home: IRouteName = {
    key: 'home',
    value: 'papangue',
  };

  /**
   * @description Navigation: /mes-services

   @example ```
   {
      key: 'services',
      value: 'mes-services',
    } ```
   */
  static services: IRouteName = {
    key: 'services',
    value: 'mes-services',
  };

  /**
   * @description Navigation: /mon-blog
   @example ```
   {
      key: 'mon-blog',
      value: 'mon-blog',
    }
   */
  static blog: IRouteName = {
    key: 'blog',
    value: 'mon-blog',
  };

  /**
   * @description Navigation: /mes-projets
   * @example```ts
   {
     key: 'projects',
     value: 'mes-projets',
   }
   * ```
   */
  static projects: IRouteName = {
    key: 'projects',
    value: 'mes-projets',
  };

  /**
   * @description Navigation: /a-propos-de-moi
   @example```ts
   {
     key: 'about',
     value: 'a-propos-de-moi',
   }
   */
  static about: IRouteName = {
    key: 'about',
    value: 'a-propos-de-moi',
  };

  /**
   * @description Navigation: /cgv
   @example```ts
   {
     key: 'cgv',
     value: 'cgv',
   }
   */
  static cgv: IRouteName = {
    key: 'cgv',
    value: 'cgv',
  };

  /**
   * @description Navigation: /contacts
   @example```ts
   {
     key: 'contacts',
     value: 'contacts',
   }
   */
  static contacts: IRouteName = {
    key: 'contacts',
    value: 'contacts',
  };
}
