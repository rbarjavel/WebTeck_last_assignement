import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Apollo, gql } from 'apollo-angular';

@Component({
    selector: 'app-notes-front',
    templateUrl: './notes-front.component.html',
    styleUrls: ['./notes-front.component.css']
})
export class NotesFrontComponent implements OnInit {
    @Input() title = ''
    @Input() desc = ''
    @Input() severity = ''
    @Input() id = ''
    @Input() status = false

    constructor(private cookie: CookieService, private apollo: Apollo) {}

    ngOnInit(): void {
        console.log(this.status)
    }

    ClickCheck() {
        const query = gql`
        mutation UpdateNote (
            $id: String!
            $status: Boolean!
        ) {
            updateNote(
                data: {
                    status: $status
                }, where: {id: $id}
            ) {
                id
            }
        }
        `

        this.apollo.mutate({
            mutation: query,
            variables: {
                "id": this.id,
                "status": true,
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

    ClickUnCheck() {
        const query = gql`
        mutation UpdateNote (
            $id: String!
            $status: Boolean!
        ) {
            updateNote(
                data: {
                    status: $status
                }, where: {id: $id}
            ) {
                id
            }
        }
        `

        this.apollo.mutate({
            mutation: query,
            variables: {
                "id": this.id,
                "status": false,
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
