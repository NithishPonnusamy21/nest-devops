import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello! Greetings from Nithish Ponnusamy.Hope you are doing great";
    }
}
