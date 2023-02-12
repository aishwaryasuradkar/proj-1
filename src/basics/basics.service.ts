import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
  email_1: string = 'adii@pineset.com';
  pass_1: string = '1234';

  name_1:string='Aditya';
  surname_1:string='Motale';

  otp_1:number=12345;
  phnno_1:number=1140;

 async createUserInDb2(namee:string, surnamee:string){
if(namee==this.name_1 && surnamee==this.surname_1){
  return 'Access Granted'
}
else{
  return 'access denied!! Calling 911!!';
}
}

  async createUserInDb(email: string, passs: string) {
    if (email == this.email_1 && passs == this.pass_1) {
      return 'Access granted';
    } else {
      return 'parag';
      // return 'Access denied! calling 911!!';
    }
  }

  async userdto(otpp:number, phnnoo:number){
    if (otpp==this.otp_1 && phnnoo==this.phnno_1){
      return 'Access granted!!'
    }
    else{
      return 'Access denied!! calling 911!!'
    }

  }
 }
