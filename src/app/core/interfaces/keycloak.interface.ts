export interface IKeycloak {
  accessToken: string;
  expiresIn: number;
  refreshExpiresIn: string;
  refreshToken: string;
  tokenType: string;
  idToken: string;
  notBeforePolicy: number;
  sessionState: string;
  scope: string;
}
