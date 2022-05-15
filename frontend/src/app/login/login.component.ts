import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = new FormControl('', [Validators.required])
    password = new FormControl('', [Validators.required])

    constructor(private cookies: CookieService, private router: Router) {}

    ngOnInit(): void {
    }

    async OnClickLogin() {
        const resp = await fetch(`${environment.API}/api/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "password": this.password.value,
                "username": this.username.value,
            })
        });

        const body = await resp.json();
        console.log(body);

        if (resp.status == 201) {
            this.cookies.set('token', body.accessToken);
            this.cookies.set('user', body.username);

            this.router.navigate(["/"]);
        }
    }
}
