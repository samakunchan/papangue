declare var require: any;
export const environment = {
  production: true,
  // apiUrl: 'https://freelance-api.devpapangue.com',
  apiUrl: 'http://localhost:3000',
  version: require('../../package.json').version,
};
