import { Component, OnInit } from '@angular/core';
import { LoginFormGroup } from './models/form.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    formSubmitted: boolean = false;
    form: LoginFormGroup = new LoginFormGroup();

    ngOnInit () {
    }

    submitForm(form) {
      
        this.formSubmitted = true;
        if (form.valid) {
            console.log(form)
            this.formSubmitted = false;
        }
    }
}