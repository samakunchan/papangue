export class ErrorResponseModel {
  constructor(
    public statusCode: number,
    public errorName: string,
    public description: DescripionErrorResponseModel,
    public path: string,
    public date: string,
  ) {}

  static fromJson(json: Record<string, any>): ErrorResponseModel {
    return new ErrorResponseModel(
      json['statusCode'],
      json['errorName'],
      DescripionErrorResponseModel.fromJson(json['description']),
      json['path'],
      json['date'],
    );
  }
}

export class DescripionErrorResponseModel {
  constructor(public statusCode: number, public message: string) {}

  static fromJson(json: Record<string, any>): DescripionErrorResponseModel {
    return new DescripionErrorResponseModel(json['statusCode'], json['message']);
  }
}
