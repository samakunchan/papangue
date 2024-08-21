declare var require: any;

/**
 * C'est l'importation du fichier qui fera la différence.
 * @example
 * ```ts
 * import { environment } from '../environments/environment';  *
 * ```
 * On aura `production: false`.
 * @example
 * ```ts
 * import { environment } from '../environments/environment.prod';  *
 * ```
 * On aura `production: true`.
 */
export const environment = {
  production: true,
  // apiUrl: 'https://freelance-api.devpapangue.com',
  apiUrl: 'http://localhost:3000',
  rootUrl: 'http://localhost:4200',
  version: require('../../package.json').version,
};
