import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
    name = new FormControl('', [Validators.required])
    constructor(private cookie: CookieService, private router: Router, private apollo: Apollo) { }

    ngOnInit(): void {
    }

    OnClickAddGroup() {
        const query = gql`
        mutation CreateGroup($name: String!, $id: String!) {
            createGroup(
                data: {
                    name: $name
                    users: { connect: { id: $id } }
                }) {
                    id
                    name
                }
        }`

        console.log(query);
        this.apollo.mutate({
            mutation: query,
            variables: {
                "name": this.name.value,
                "id": this.cookie.get('id'),
            },
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).subscribe(({data}) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
    }
}
