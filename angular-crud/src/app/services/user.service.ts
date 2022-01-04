import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //get data function

  getData(){
    return{
      Id:1,
      name: 'Sunil Salaria',
      Age: 28,
      Gender:'Male'
    }
  }

}
