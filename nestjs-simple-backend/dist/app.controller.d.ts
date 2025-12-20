import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHealth(): {
        status: string;
    };
    dev(): {
        status: string;
        branch: string;
    };
    checkDb(): Promise<{
        status: string;
        db: any;
    }>;
}
