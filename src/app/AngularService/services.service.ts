import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  gmailfn(){
    return fetch("https://jsonplaceholder.typicode.com/comments")
  }
}
