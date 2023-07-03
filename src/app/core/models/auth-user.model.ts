export class AuthUser {
  constructor(
    public siren: string,
    public emailVerified: boolean,
    public name: string,
    public preferredUsername: string,
    public givenName: string,
    public familyName: string,
    public email: string,
    public role: string,
  ) {}

  static fromJson(json: Record<string, any>): AuthUser {
    return new AuthUser(
      json['siren'],
      json['email_verified'],
      json['name'],
      json['preferred_username'],
      json['given_name'],
      json['family_name'],
      json['email'],
      json['realm_access']['roles'].includes('admin') ? 'ADMIN' : 'USER',
    );
  }
}
