import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // -------- TESTING ---------
  @Get('workspaces')
  getWorkspaces(): string[] {
    return ['workspaces', 'workspaces1', 'workspaces2'];
  }

  @Get('workspaces/:id/socialAccounts')
  getSocialAccounts(@Body() body: any): string[] {
    return ['socialAccounts', 'socialAccounts1', 'socialAccounts2'];
  }
}
