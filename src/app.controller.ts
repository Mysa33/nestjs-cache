import { Controller, Get, CacheInterceptor, UseInterceptors, Logger, Param, HttpStatus, HttpException, Query } from '@nestjs/common';
import "reflect-metadata";
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiModelProperty, ApiUseTags } from '@nestjs/swagger';
import { Product } from 'src/common/class/product';

//@ApiUseTags('items')
@Controller('items')
@UseInterceptors(CacheInterceptor)
export class AppController {

  public dataArray:any;

  constructor(private readonly _appService: AppService) {}

  //Get by brand
  @Get(':brand')
  @ApiOperation({
    description: 'Get all items',
    title: 'Get by brand',
    operationId: 'GET /itemsByBrand'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Get items by brand',
    type:Product,
    isArray:true
  })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getByBrand(@Param('brand') brand:string){
    Logger.log("Get by brand", "AppController");
    const items = await this._appService.getByBrand(brand);
    items.subscribe((value)=>{
      return value;
    },(error)=>{
      console.log(error);
    },()=>{
      console.log("Done loading products by brand");
    });
    return items;
  }
  
}
