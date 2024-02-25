import { Body, Controller, Get, Request } from '@nestjs/common'
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
  getWorkspaces(): any[] {
    return [{
      id: 'workspaces',
      name: 'workspaces',
      description: 'workspaces',
      label: 'workspaces',
      value: 'workspaces',
    },
    {
      id: 'workspaces1',
      name: 'workspaces1',
      description: 'workspaces1',
      label: 'workspaces1',
      value: 'workspaces1',
    },
    {
      id: 'workspaces2',
      name: 'workspaces2',
      description: 'workspaces2',
      label: 'workspaces2',
      value: 'workspaces2',
    }];
  }



  @Get('workspaces/:id/socialAccounts')
  getSocialAccounts(@Request() req, @Body() body: any): any[] {

    const testData = [{
      id: 'socialAccounts',
      name: 'socialAccounts',
      description: 'socialAccounts',
      label: 'socialAccounts',
      value: 'socialAccounts',
      workspace: 'workspaces',
    },
    {
      id: 'socialAccounts1',
      name: 'socialAccounts1',
      description: 'socialAccounts1',
      label: 'socialAccounts1',
      value: 'socialAccounts1',
      workspace: 'workspaces1',
    },
    {
      id: 'socialAccounts2',
      name: 'socialAccounts2',
      description: 'socialAccounts2',
      label: 'socialAccounts2',
      value: 'socialAccounts2',
      workspace: 'workspaces2',
    }]
    const workspaceId = req.params.id
    return testData.filter((item) => item.workspace === workspaceId);
  }
}
