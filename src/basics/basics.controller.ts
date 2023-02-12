import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDto } from 'DTO/user';
import { get } from 'http';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
  constructor(private readonly service: BasicsService) {}

  // Get requests

  @Get('getdata')
  async getdata() {
    return 'parag is very chutiya boy!<3';
  }

  @Get('givedata')
  async givedata() {
    return 'adimo is the best mentor!:)';
  }
  @Get('gd')
  async gd() {
    let a = 'My name is aishwarya';
    return a;
  }
  @Get('addition')
  async addition() {
    let a = 1,
      b = 2,
      c;
    c = a + b;
    return c;
  }
  @Get('a')
  async a(@Query() x: string) {
    let temp = x;
    return temp;
  }
  @Get('ab')
  async ab(@Query() x: number, @Query() y: number, @Query() z: string) {
    let a: number = x + y;
    let b = z;
    return x;
  }
  @Get('bc')
  async bc(@Body() body: any) {
    let tempt = body.name;
    return tempt;
  }
  @Get('c')
  async c(@Body() body: any) {
    let tem = body.id;
    if (tem == 1111) {
      console.log('Id accepted');
    } else {
      console.log('Id is not accepted');
    }
  }
  // hw- to create a get req and get id as a para and return it

@Get('f')
async f(@Body() body:any){
  let tem= body.id;
  return tem;
}

@Get('g')
async g(@Query() x:number){
  let temp=x;
  return temp
}

  //Post requests

  @Post()
  async createUser(@Body() body: any) {
    const vab = this.service.createUserInDb(body.email, body.pass);
    return vab;
  }

//   hw-name,surname 

@Post('d')
async d(@Body()body:any){
  const varb = this.service.createUserInDb2(body.namee,body.surnamee);
  return varb;
}

@Post('e')
async e(@Body()body:UserDto){
  const varib= this.service.userdto(body.otp, body.phnno);
  return varib;

}
// hw- to create a get req and get id as a para and return it
@Post('ef')
async ef(@Body () body:any){
  // syntax of typescript/javascript 
  const v= {
    'name':"Aditya", 
    'phnno':1234567890
    
  }
  return v.name;

}


}
