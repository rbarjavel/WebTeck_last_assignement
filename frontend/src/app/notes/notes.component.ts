import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { GroupIdService } from '../groupId.service'

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';


interface note {
    title: string,
    desc: string,
    status: boolean,
    serverity: string,
    id: string
}

interface respGroups {
    groups: [{
        name: string,
        notes: [note]
    }]
}

interface user {
    name: string,
    id: string
}

interface userData {
    users: [user]
}

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    id: string = "";
    name: string = "";

    notes = {};
    usersSub = {}
    usersUnSub = {}

    userToAdd: string = ""
    userToRm: string = ""
    isProjectSelected = false

    toggleAddUser = false;
    toggleRmUser = false;
    toggleNote = false;

    subscription: Subscription
    constructor(private groupIdService: GroupIdService, private cookie: CookieService, private apollo: Apollo) {
        this.subscription = this.groupIdService.getId().subscribe(id => {
            this.id = id.id
            this.UpdateData()
            this.GetNonSubcribedUsers()
            this.GetSubcribedUsers()
            this.isProjectSelected = true
            console.log(this.id)
        })
    }

    UpdateData() {
        const query = `query 
        {
            groups (where: {id: {equals: "${this.id}"}}) {
                name
                notes (orderBy: {title: Asc}) {
                    title
                    desc
                    status
                    serverity
                    id
                }
            }
        }`

        this.apollo.watchQuery({
            query: gql(query),
            variables: { "id": this.id },
            pollInterval: 500,
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).valueChanges.subscribe(({data}) => {
            console.log(data)
            let d: respGroups = <respGroups>data

            this.name = d.groups[0].name
            this.notes = d.groups[0].notes

            console.log(this.notes)

        });
    };

    GetNonSubcribedUsers() {
        const query = `query 
        {
            users(
                where: {
                    group: { none: { id: { equals: "${this.id}" } } }
                }
            ) {
                username
                id
            }
        }
        `

        this.apollo.watchQuery({
            query: gql(query),
            variables: { "id": this.id },
            pollInterval: 500,
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).valueChanges.subscribe(({data}) => {
            let d: userData = <userData>data
            
            this.usersUnSub = d.users;
            console.log(this.usersUnSub)
        });

    }

    GetSubcribedUsers() {
        const query = `query 
        {
            users(
                where: {
                    group: { some: { id: { equals: "${this.id}" } } }
                }
            ) {
                username
                id
            }
        }
        `

        this.apollo.watchQuery({
            query: gql(query),
            variables: { "id": this.id },
            pollInterval: 500,
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).valueChanges.subscribe(({data}) => {
            let d: userData = <userData>data
            
            this.usersSub = d.users;
            console.log(this.usersUnSub)
        });

    }

    ngOnInit(): void {
        console.log("===>" + this.id);
    }

    OnClickDelete() {
        const query = gql`
        mutation DeleteGroupe($id: String!) {
            deleteGroup(where: {id: $id}) {
                id
            }
        }
        `

        this.apollo.mutate({
            mutation: query,
            variables: {
                "id": this.id,
            },
            context: {
                headers: {
                    "authorization": `Bearer ${this.cookie.get('token')}`
                }
            },
        }).subscribe(({data}) => {
            console.log(data);
            this.isProjectSelected = false
        }, (error) => {
            console.log(error);
        })
    }

    ClickToggleAddUser() {
        if (this.toggleAddUser) this.toggleAddUser = false
        else this.toggleAddUser = true
    }

    ClickToggleRmUser() {
        if (this.toggleRmUser) this.toggleRmUser = false
        else this.toggleRmUser = true
    }

    ClickToggleAddNote() {
        if (this.toggleNote) this.toggleNote = false
        else this.toggleNote = true
    }


    ClickAddUser() {
        console.log(this.userToAdd)

        const query = gql`
        mutation UpdateGroup($uId: String!, $id: String!) {
            updateGroup(
                data: { users: { connect: { id: $uId } } }
                where: { id: $id }
            ) {
                id
            }
        }
        `

        this.apollo.mutate({
            mutation: query,
            variables: {
                "id": this.id,
                "uId": this.userToAdd
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

    ClickRmUser() {
        const query = gql`
        mutation UpdateGroup($uId: String!, $id: String!) {
            updateGroup(
                data: { users: { disconnect: { id: $uId } } }
                where: { id: $id }
            ) {
                id
            }
        }`

        this.apollo.mutate({
            mutation: query,
            variables: {
                "id": this.id,
                "uId": this.userToRm
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

    OnChangeUserAdd(id: string) {
        console.log(id)
        this.userToAdd = id
    }

    OnChangeUserRm(id: string) {
        console.log(id)
        this.userToRm = id
    }
}
