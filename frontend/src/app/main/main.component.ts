import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

import { Subscription } from 'rxjs';
import { GroupIdService } from '../groupId.service'

interface group {
    name: string,
    id: string,
}

interface userData {
    users: [{
        firstName: string,
        lastName: string,
        username: string,
        id: string,
        group: [group]
    }]
}

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    username = "undef"
    firstName = "undef"
    lastName = "undef"
    groups = {}

    id = ""


    // subscription: Subscription
    groupIdFocused = ""

    constructor(private cookie: CookieService, private router: Router, private apollo: Apollo, private groupIdService: GroupIdService) {}
    

    ngOnInit(): void {
        if (this.cookie.get('token') == "") this.router.navigate(['/login']);

        const query = ` query {
            users(where: { username: { equals: "${this.cookie.get("user")}" } }) {
                username
                firstName
                lastName
                id
                group {
                    name
                    id
                }
            }
        }
        `

        this.apollo.watchQuery({
            query: gql(query),
            variables: { "name": this.cookie.get('user') },
            pollInterval: 500,
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).valueChanges.subscribe(({data}) => {
            let d: userData = <userData>data

            console.log(d.users[0])
            this.username = d.users[0].username
            this.firstName = d.users[0].firstName
            this.lastName = d.users[0].lastName
            this.id = d.users[0].id

            this.cookie.set('id', this.id)

            this.groups = d.users[0].group
        });
    }

    OnClickChangeGroupe(group: group) {
        this.groupIdFocused = group.id
        console.log(this.groupIdFocused)

        this.groupIdService.sendId(this.groupIdFocused)
    }

    OnClickLogout() {
        this.cookie.delete("user")
        this.cookie.delete("token")

        window.location.reload()
    }
}

