import { ApiModelProperty } from "@nestjs/swagger";

export class Product {
    @ApiModelProperty({required:true, type:Number})
    public id:number;

    @ApiModelProperty({required:true, type:String})
    public brand:string;

    @ApiModelProperty({required:true, type:String})
    public name:string;

    @ApiModelProperty({required:true, type:String})
    public description:string;

    @ApiModelProperty({required:true, type:Number})
    public rating:number;
}