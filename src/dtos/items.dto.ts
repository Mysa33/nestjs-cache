import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EmployeeDto{
    
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    public lastName:string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    public firstName:string;
    
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    public email:string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsNumber()
    public depId:number

}