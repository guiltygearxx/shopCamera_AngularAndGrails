export interface ConfirmDialogModal {

  confirmMessage: string;
}

export class DefaultConfirmDialogModal implements ConfirmDialogModal {

  confirmMessage: string;

  constructor(confirmMessage: string) {

    this.confirmMessage = confirmMessage;
  }
}
