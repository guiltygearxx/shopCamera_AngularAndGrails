export interface Errors {

  rejectValue(field: string, value: any, errorCode: string, args: any[]): void;
}
