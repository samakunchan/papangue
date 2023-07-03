// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://freelance-api.devpapangue.com',
  keycloak: {
    domain: 'secure-connect.devpapangue.com',
    realm: 'ppg-connect',
    clientId: 'portblog',
    redirectUri: 'http://localhost:4200',
    codeChallenge: 'nOL61O-gDehx8hjOPEEG4yZ7GwoGG7MjrdIQ2Lkq1Zk',
    codeChallengeMethod: 'S256',
    scope: 'openid profile email siren offline_access',
    state: 'samakunchan',
    codeVerifier: 'VayNotLphbVpxoN7ogQk4ZfbnfRWK8Ux8J-xt0k3iF8GHfXRhBk2d9n491wIDf5619Z3xAOQwBc',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
