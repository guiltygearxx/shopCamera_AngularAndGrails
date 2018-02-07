export interface FormatterInterface<T> {

  format(value: T): string;
}
