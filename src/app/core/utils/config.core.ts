import { environment } from '../../../environments/environment';

export class KeycloakConfig {
  static keycloakDomain: string = environment.keycloak.domain;
  static realm: string = environment.keycloak.realm;
  static reponseType: string = 'code';
  static clientId: string = environment.keycloak.clientId;
  static redirectUri: string = environment.keycloak.redirectUri;
  static codeChallenge: string = environment.keycloak.codeChallenge;
  static codeChallengeMethod: string = environment.keycloak.codeChallengeMethod;
  static scope: string = environment.keycloak.scope;
  static state: string = environment.keycloak.state;

  /**
   * Endpoint Keycloak se connecter et récupérer le code dans les params url
   * @link  https://secure-connect.devpapangue.com/realms/.../protocol/openid-connect/auth?response_type=code&client_id=...
   */
  static loginKeycloakUrl: string =
    `https://${KeycloakConfig.keycloakDomain}/realms/` +
    `${KeycloakConfig.realm}/protocol/openid-connect/auth?response_type=${KeycloakConfig.reponseType}` +
    `&client_id=${KeycloakConfig.clientId}&redirect_uri=${KeycloakConfig.redirectUri}&code_challenge=` +
    `${KeycloakConfig.codeChallenge}&code_challenge_method=${KeycloakConfig.codeChallengeMethod}` +
    `&scope=${KeycloakConfig.scope}&state=${KeycloakConfig.state}`;

  /**
   * Endpoint Keycloak pour récupérer les tokens de connexions
   * @link https://secure-connect.devpapangue.com/realms/ppg-connect/protocol/openid-connect/token
   */
  static keycloakUrlForToken: string =
    `https://${KeycloakConfig.keycloakDomain}/realms/` + `${KeycloakConfig.realm}/protocol/openid-connect/token`;
  static keycloakAllInfosUrl: string =
    `https://${KeycloakConfig.keycloakDomain}/realms/` + `${KeycloakConfig.realm}/.well-known/openid-configuration`;

  /**
   * Endpoint Keycloak pour se déconnecter
   * @link https://secure-connect.devpapangue.com/realms/ppg-connect/protocol/openid-connect/logout
   */
  static keycloakUrlForLogout(idToken: string): string {
    return (
      `https://${KeycloakConfig.keycloakDomain}/realms/${KeycloakConfig.realm}` +
      `/protocol/openid-connect/logout?post_logout_redirect_uri=${KeycloakConfig.redirectUri}&id_token_hint=${idToken}`
    );
  }
}

export enum ErrorMessage {
  title = 'POOOLICEEEEE',
  internetOffline = 'Pas de connexion internet.',
  serverOffline = 'Le serveur est hors ligne.',
  unAuthorized = 'Vous n‘avez pas les autorisations requises pour effectuer cette action.',
  notFound = 'Ressource introuvable.',
  errorServer = 'Votre client n‘a pas reçu de réponse de la part du serveur distant.',
  commonError = 'Une érreur est survenu. Veuillez contacter un administrateur.',
  noAccessToken = 'Aucun access token n‘a été trouvé.',
  noRefreshToken = 'Aucun refresh token n‘a été trouvé.',
  noIdToken = 'Aucun id token n‘a été trouvé.',
  noUser = 'Aucun utilisateur n‘a été trouvé.',
  urlConstructor = 'URL constructor',
  isNotValidUrl = 'is not a valid URL.',
  sessionExpired = 'Votre session est expiré.',
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
