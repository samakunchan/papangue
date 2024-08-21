export class ErrorResponseModel {
  constructor(
    public statusCode: number,
    public errorName: string,
    public description: DescriptionErrorResponseModel,
    public path: string,
    public date: string,
  ) {}

  static fromJson(json: Record<string, any>): ErrorResponseModel {
    return new ErrorResponseModel(
      json['statusCode'],
      json['errorName'],
      DescriptionErrorResponseModel.fromJson(json['description']),
      json['path'],
      json['date'],
    );
  }
}

export class DescriptionErrorResponseModel {
  constructor(public statusCode: number, public message: string) {}

  static fromJson(json: Record<string, any>): DescriptionErrorResponseModel {
    return new DescriptionErrorResponseModel(json['statusCode'], json['message']);
  }
}
