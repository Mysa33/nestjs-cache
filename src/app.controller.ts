import { Controller, Get, CacheInterceptor, UseInterceptors, Logger, Param, HttpStatus, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiModelProperty, ApiImplicitParam } from '@nestjs/swagger';
import { Item } from './common/interfaces/item.interface';
import {EmployeeDto} from '../src/dtos/items.dto';

@Controller('items')
@UseInterceptors(CacheInterceptor)
export class AppController {

  constructor(private readonly _appService: AppService) {}

  //Get ALL
  @Get()
  @ApiOperation({description: 'Get all items',title: 'Get all',operationId: 'GET /items'})
  @ApiModelProperty({description:'Return all items', required:true})
  @ApiResponse({ status: 200, description: 'Get all items' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getAll(): Promise<Item> {
    Logger.log("Get One", "AppController");
    const items:any = await this._appService.getItems();
    if(items){
      return items;
    }else{
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    } 
  }

  //Get by limit
  @Get('results=?itemsLimit')
  @ApiOperation({description: 'Get specified items',title: 'Get by limit',operationId: 'GET /itemsByLimit'})
  @ApiModelProperty({description:'Return N items', required:true})
  @ApiImplicitParam({name:'limite', description:'A number of returned items',required:true, type:Number })
  @ApiResponse({ status: 200, description: 'Get all items' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getByLimit(itemsLimit:number): Promise<Item> {
    Logger.log("Get One", "AppController");
    const items:any = await this._appService.getByLimit(itemsLimit);
    if(items){
      return items;
    }else{
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    } 
  }

  //Get by limit
  @Get('gender=?gender')
  @ApiOperation({description: 'Get items by gender',title: 'Get by gender',operationId: 'GET /itemsByLimit'})
  @ApiModelProperty({description:'Return N items', required:true})
  @ApiImplicitParam({name:'limite', description:'A number of returned items',required:true, type:Number })
  @ApiResponse({ status: 200, description: 'Get all items' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getByGender(gender:number): Promise<Item> {
    Logger.log("Get One", "AppController");
    const items:any = await this._appService.getByGender(gender);
    if(items){
      return items;
    }else{
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    } 
  }
}
