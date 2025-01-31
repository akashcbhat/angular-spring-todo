import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HelloWorldBean {
  constructor(public message: string ){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(): Observable<any> {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean'); 
  }

  executeHelloWorldBeanServiceWithPath(name:string): Observable<any> {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`); 
  }
}
