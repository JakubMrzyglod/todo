import { ValidationPipe } from '@nestjs/common';

export class RequestValidationPipe extends ValidationPipe {
  constructor() {
    super({ whitelist: true });
  }
}
