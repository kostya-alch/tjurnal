import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(id: string): string {
    return `Hello user id:${id}!`;
  }
}
