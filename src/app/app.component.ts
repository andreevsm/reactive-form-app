import { Component } from '@angular/core';
import { LoginFormGroup } from './models/form.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    public form: LoginFormGroup = new LoginFormGroup();

    public submitForm(form): void {
        console.log(form)
    }
}