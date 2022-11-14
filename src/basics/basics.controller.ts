import { Body, Controller, Get, Query } from '@nestjs/common';
import { get } from 'http';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor (private readonly service:BasicsService){}
    @Get('getdata')
    async getdata(){
        return 'parag is very chutiya boy!<3';
    }

    @Get ('givedata')
    async givedata(){
        return 'adimo is the best mentor!:)';
    }
    @Get('gd')
    async gd(){
       let a="My name is aishwarya";
       return a;
    }
    @Get('addition')
    async addition(){
        let a=1,b=2,c;
        c=a+b;
        return c;
    }
    @Get('a')
    async a(@Query()x:string){
         let temp=x;
         return temp;

    }
    @Get('ab')
    async ab(@Query()x:number,@Query()y:number,@Query()z:string){
       let a:number=x+y;
       let b=z;
       return x;
    }
    @Get('bc')
    async bc(@Body()body:any){
        let tempt=body.name;
        return tempt;

    }
    @Get('c')
    async c(@Body()body:any){
        let tem=body.id;
        if(tem==1111){
           console.log('Id accepted');
        }
        else{
           console.log('Id is not accepted');
        }

    }

}

