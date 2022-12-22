import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  public pubVar: number = 1000;
  private priVar: number = 100;

  constructor() { }

  public doSomething() {
    return this.doSomethingInPrivate();
  }

  private doSomethingInPrivate() {
    return this.pubVar / this.priVar;
  }
}
