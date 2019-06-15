import { Controller, Get, CacheInterceptor, UseInterceptors, Logger, Param, HttpStatus, HttpException, Query } from '@nestjs/common';
import "reflect-metadata";
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiModelProperty, ApiImplicitParam } from '@nestjs/swagger';
import { Product } from 'src/common/class/product';


@Controller('items')
@UseInterceptors(CacheInterceptor)
export class AppController {

  public dataArray:any;

  constructor(private readonly _appService: AppService) {}

  //Get by brand
  @Get(':brand')
  @ApiOperation({description: 'Get all items',title: 'Get by brand',operationId: 'GET /items'})
  @ApiImplicitParam({name :"brand name", description:'Return products by brand', required:true, type:String})
  @ApiResponse({ 
    status: 200, 
    description: 'Get items by brand',
    type:Product,
    isArray:true
  })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  
  async getByBrand(brand:string){
    Logger.log("Get by brand", "AppController");
    const items = await this._appService.getByBrand(brand);
    items.subscribe((value)=>{
      console.log("value :", value)
      return value;
    },(error)=>{
      console.log(error);
    },()=>{
      console.log("Done loading products");
    });
    return items;
  }

  //Get by type
  /*@Get()
  @ApiOperation({description: 'Get specified items',title: 'Get by type',operationId: 'GET /itemsByType'})
  @ApiModelProperty({description:'Return N items by limit', required:true})
  @ApiImplicitParam({name:'Type', description:'Get items by type',required:true, type:String })
  @ApiResponse({ 
    status: 200, 
    description: 'Get items by type',
    type:Product,
    isArray:true
  })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getByLimit(product_type:String): Promise<Object[]> {
    Logger.log("Get by type", "AppController");
    const items:any = await this._appService.getByProdcutType(product_type);
    if(items){
      return items;
    }else{
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    } 
  }*/

}
