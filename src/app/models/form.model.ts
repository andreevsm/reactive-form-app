import { FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginFormControl extends FormControl {
    
    protected label: string;
    protected modelProperty: string;

    constructor(
        label: string, 
        property: string, 
        value: any, 
        validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    public getValidationMessages(): string[] {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} must be at least
                            ${this.errors['minlength'].requiredLength}
                            characters`);
                        break;
                    case "maxlength":
                        messages.push(`A ${this.label} must be no more than
                            ${this.errors['maxlength'].requiredLength}
                            characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${this.label} contains
                             illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}

export class LoginFormGroup extends FormGroup {

    constructor() {
        super({
            login: new LoginFormControl("Login", "login", "", Validators.required),
            password: new LoginFormControl("Password", "password", "",
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(8),
                    Validators.pattern("^[0-9\.]+$")
                ]))
        });
    }

    get productControls(): LoginFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as LoginFormControl);
    }

    public getFormValidationMessages(form: any): string[] {
        let messages: string[] = [];
        this.productControls.forEach(c => c.getValidationMessages()
            .forEach(m => messages.push(m)));
        return messages;
    }
}
