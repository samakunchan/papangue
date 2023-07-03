export const environment = {
  production: true,
  apiUrl: 'https://freelance-api.devpapangue.com',
  keycloak: {
    domain: 'secure-connect.devpapangue.com',
    realm: 'ppg-connect',
    clientId: 'portblog',
    redirectUri: 'http://mon-domaine.devpapangue.com',
    codeChallenge: 'nOL61O-gDehx8hjOPEEG4yZ7GwoGG7MjrdIQ2Lkq1Zk',
    codeChallengeMethod: 'S256',
    scope: 'openid profile email siren offline_access',
    state: 'samakunchan',
    codeVerifier: 'VayNotLphbVpxoN7ogQk4ZfbnfRWK8Ux8J-xt0k3iF8GHfXRhBk2d9n491wIDf5619Z3xAOQwBc',
  },
};
