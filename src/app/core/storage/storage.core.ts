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
export class StorageCore {
  public readonly STORAGE_KEY: string;
  private CURRENT_USER?: string | null;
  private ACCESS_TOKEN?: string | null;
  private REFRESH_TOKEN?: string | null;
  private ID_TOKEN?: string | null;

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
    this.CURRENT_USER = user;
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
    this.ACCESS_TOKEN = accessToken;
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
    this.REFRESH_TOKEN = refreshToken;
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
    this.ID_TOKEN = idToken;
    this.setStorageItem(storageKey.idToken, idToken);
  }

  /**
   * Suppression du token dans le local storage
   */
  deleteTokens(): void {
    return this.clearStorage();
  }

  // /**
  //  * Méthode qui charge les données contenu dans le storage
  //  */
  // public init(): void {
  //   this.CURRENT_USER = this.getStorageItem(storageKey.user);
  //   this.ACCESS_TOKEN = this.getStorageItem(storageKey.accessToken);
  //   this.REFRESH_TOKEN = this.getStorageItem(storageKey.refreshToken);
  //   this.ID_TOKEN = this.getStorageItem(storageKey.idToken);
  // }

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
   * @param key
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
