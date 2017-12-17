import {ValidationManager} from "ng2-validation-manager";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-login',
  styleUrls: ['/src/pages/login/login.scss'],
  templateUrl: 'login.html',
})

export class LoginPage implements OnInit{
    form;
    ngOnInit() {
        this.form = new ValidationManager({
            'name'        : 'required|minLength:4|maxLength:12|alphaSpace',
            'email'       : 'required|email',
            'username'    : 'required|pattern:[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*',
            'description' : {'rules': 'required|count:15', 'value': 'testing'},
            'password'    : 'required|rangeLength:8,50',
            'repassword'  : 'required|equalTo:password'
        });

        this.form.setValue({
            'name': 'Default'
        });
        this.form.setErrorMessage('username', 'pattern', 'Pattern must be part of this family: [A-Za-z0-9.-_]');
        
        this.form.getErrors({
          "name": "",
          "email": "",
          "username": "",
          "description": "",
          "password": "",
          "repassword": "",
          "formGroup": {
            "id": "",
            "name": ""
          },
          "addresses": {
            "0": {
              "street": "",
              "postcode": ""
            }
          },
          "checkboxs": {},
          "radios": ""
        });
    }

    save(){
        if(this.form.isValid()){
            alert('validation pass');
            console.log(this.form.getData());
            this.form.reset();
        }
    }
}