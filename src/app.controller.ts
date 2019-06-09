import { Controller, Get, CacheInterceptor, UseInterceptors, Logger, Param, HttpStatus, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiModelProperty, ApiImplicitParam } from '@nestjs/swagger';

@Controller('items')
@UseInterceptors(CacheInterceptor)
export class AppController {

  constructor(private readonly _appService: AppService) {}

  @Get(':itemId')
  @ApiOperation({description: 'Get one item',title: 'Get item',operationId: 'GET /items'})
  @ApiImplicitParam({name:'Item ID',description:'Item id',required:true})
  @ApiModelProperty({description:'Return an object', required:true})
  @ApiResponse({ status: 200, description: 'Get one item' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getOne(itemId:number): Promise<object[]> {
    Logger.log("Get One", "AppController");
    const item = await this._appService.getOneItem(itemId);
    if(item){
      return item;
    }else{
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    } 
  }
}
