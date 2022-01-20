import { CustomError } from "./custom-error";

export class NotAthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAthorizedError.prototype);
  }

  serializeErrors(){
    return [
      {
        message: 'Not authorized'
      }
    ];
  };
};