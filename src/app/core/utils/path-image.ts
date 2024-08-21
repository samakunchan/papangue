import { environment } from '../../../environments/environment';

/**
 * Construit un path en fonction du mode dev ou prod.
 * @param path {string} Chemin de l'image
 * @example
 *  production: false => `http://localhost:4200/assets/path.png`
 *
 *  production: true = `http://localhost:3005/documents/assets/path.png`
 */
export const getRelativePath = (path: string = ''): string => {
  return environment.production ? `${environment.apiUrl}/documents/${path}` : `${environment.rootUrl}/${path}`;
};
