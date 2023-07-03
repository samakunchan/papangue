export class FakeTestDatas {
  fakeUrl: string = 'http://test.com';

  fakeUnAuthorizedResponse: Record<string, any> = {
    statusCode: 401,
    errorName: 'UnauthorizedException',
    description: {
      statusCode: 401,
      message: 'Unauthorized',
    },
    path: '/my-endpoint',
    date: '2023-07-01T23:01:01.333Z',
  };

  fakeUnForbiddenResponse: Record<string, any> = {
    statusCode: 403,
    errorName: 'ForbiddenException',
    description: {
      statusCode: 403,
      message: 'Forbidden',
    },
    path: '/my-endpoint',
    date: '2023-07-01T23:01:01.333Z',
  };

  fakeNotFoundResponse: Record<string, any> = {
    statusCode: 404,
    errorName: 'NotFoundException',
    description: {
      statusCode: 404,
      message: 'NotFound',
    },
    path: '/my-endpoint',
    date: '2023-07-01T23:01:01.333Z',
  };

  fakeTokens: Record<string, any> = { access_token: 'test_access_token', refresh_token: 'test_refresh_token', id_token: 'test_id_token' };
  fakeDecodedToken: Record<string, any> = {
    exp: 1682844140,
    iat: 1682842340,
    auth_time: 1682842078,
    jti: 'xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx',
    iss: 'https://secure-connect.devpapangue.com/realms/ppg-connect',
    aud: 'account',
    sub: 'xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx',
    typ: 'Bearer',
    azp: 'mon client id',
    session_state: 'xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx',
    acr: '0',
    'allowed-origins': [],
    realm_access: {
      roles: [],
    },
    resource_access: {
      account: {
        roles: ['admin'],
      },
    },
    scope: 'openid siren profile email offline_access',
    sid: 'xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx',
    siren: '999999999',
    email_verified: true,
    name: 'John Doe',
    preferred_username: 'john.doe@gmail.com',
    given_name: 'John',
    family_name: 'Doe',
    email: 'john.doe@gmail.com',
  };
}
