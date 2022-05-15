import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    // Form data
    firstName = new FormControl('', [Validators.required])
    lastName = new FormControl('', [Validators.required])
    username = new FormControl('', [Validators.required])
    password = new FormControl('', [Validators.required])

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    async OnClickRegister() {
        //Adding a User
        const resp = await fetch(`${environment.API}/api/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${environment.acessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "firstName": this.firstName.value,
                "lastName": this.lastName.value,
                "password": this.password.value,
                "roles": [
                    "user"
                ],
                "username": this.username.value,
            })
        });

        console.log(resp.status);
        if (resp.status == 201) this.router.navigate(['/login']);
    }
}
