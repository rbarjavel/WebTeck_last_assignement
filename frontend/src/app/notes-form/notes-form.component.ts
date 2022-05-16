import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Apollo, gql } from 'apollo-angular';
import { FormControl, Validators } from '@angular/forms';


enum serverity {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

@Component({
    selector: 'app-notes-form',
    templateUrl: './notes-form.component.html',
    styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {
    @Input() id = ""

    title = new FormControl('', [Validators.required])
    desc = new FormControl('', [Validators.required])

    serverity = new FormControl('', [Validators.required])

    constructor(private cookie: CookieService, private apollo: Apollo) {
    }

    ngOnInit(): void {
    }

    OnClickAddNote() {
        const query = gql`
        mutation CreateNote($id: String!, $desc: String!, $title: String!, $serverity: EnumNoteServerity!) {
            createNote(
                data: {
                    desc: $desc
                    title: $title
                    status: false
                    group: { id: $id }
                    serverity: $serverity
                }
            ) {
                id
            }
        }
        `

        this.apollo.mutate({
            mutation: query,
            variables: {
                "id": this.id,
                "desc": this.desc.value,
                "title": this.title.value,
                "serverity": this.serverity.value
            },
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).subscribe(({data}) => {
            console.log(data);

            this.desc.reset()
            this.title.reset()
            this.serverity.reset()
        }, (error) => {
            console.log(error);
        })
    }
}
