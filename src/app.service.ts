import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly _id:number
  getOneItem(_id): any[] {
    return [];
  }
}
