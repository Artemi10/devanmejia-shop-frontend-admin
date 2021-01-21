import {ErrorHandler, Injectable} from "@angular/core";
@Injectable()
export class AuthErrorHandler implements ErrorHandler{

  constructor() {
  }

  handleError(error: any): void {
    if(error.status===401 || error.status===403 || error.status===500){
      window.location.replace('/logIn')
    }
  }
}
