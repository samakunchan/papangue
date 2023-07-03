import { Injectable } from '@angular/core';
import { ErrorMessage } from '../utils/config.core';

enum storageKey {
  idToken = 'id_token',
  user = 'user',
  accessToken = 'access_token',
  refreshToken = 'refresh_token',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public readonly STORAGE_KEY: string;

  constructor() {
    this.STORAGE_KEY = 'PPG_';
  }

  /**
   * Getter de récupération des infos utilisateur dans le local storage
   */
  get currentUser(): string {
    return this.getStorageItem(storageKey.user) ?? ErrorMessage.noUser;
  }

  /**
   * Setter de l'utilisateur dans le local storage
   * @param user string
   */
  set currentUser(user: string) {
    this.setStorageItem(storageKey.user, user);
  }

  /**
   * Getter de récupération du token dans le local storage
   */
  get accessToken(): string {
    return this.getStorageItem(storageKey.accessToken) ?? ErrorMessage.noAccessToken;
  }

  /**
   * Setter du token dans le local storage
   * @param accessToken
   */
  set accessToken(accessToken: string) {
    this.setStorageItem(storageKey.accessToken, accessToken);
  }

  /**
   * Getter du refresh token dans le local storage
   */
  get refreshToken(): string {
    return this.getStorageItem(storageKey.refreshToken) ?? ErrorMessage.noRefreshToken;
  }

  /**
   * Setter du refresh token dans le local storage
   * @param refreshToken string
   */
  set refreshToken(refreshToken: string) {
    this.setStorageItem(storageKey.refreshToken, refreshToken);
  }

  /**
   * Getter de récupération du token dans le local storage
   */
  get idToken(): string {
    return this.getStorageItem(storageKey.idToken) ?? ErrorMessage.noIdToken;
  }

  /**
   * Setter du token dans le local storage
   * @param idToken
   */
  set idToken(idToken: string) {
    this.setStorageItem(storageKey.idToken, idToken);
  }

  /**
   * Suppression du token dans le local storage
   */
  deleteTokens(): void {
    return this.clearStorage();
  }

  /**
   * Permet d'ajouter une clé/valeur dans le local storage
   * @param key string
   * @param value string
   * @private
   */
  private setStorageItem(key: string, value: string): void {
    localStorage.setItem(this.STORAGE_KEY + key, JSON.stringify(value));
  }

  /**
   * Méthode qui permet de récupérer une clé et sa valeur dans le storage
   * @param key string
   * @private
   */
  private getStorageItem(key: string): string | null {
    const data: string | null = localStorage.getItem(this.STORAGE_KEY + key);
    try {
      return JSON.parse(data ?? '');
    } catch (e) {
      return null;
    }
  }

  /**
   * Supprime le contenu du local storage
   * @private
   */
  private clearStorage(): void {
    localStorage.clear();
  }
}
