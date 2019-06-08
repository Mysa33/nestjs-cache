import { Controller, Get, CacheInterceptor, UseInterceptors, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly _appService: AppService) {}

  @Get()
  @ApiOperation({
    description: 'Get all employees',
    title: 'Get all',
    operationId: 'GET /employees'
  })
  @ApiResponse({ status: 200, description: 'Get all employees' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  getOne(): string {
    Logger.log("Get One", "AppController");
    return this._appService.getHello();
  }
}
