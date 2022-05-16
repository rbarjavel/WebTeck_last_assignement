import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPComponent } from './header-p/header-p.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { GraphQLModule } from './graphql.module';
import { GroupComponent } from './group/group.component';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NotesComponent } from './notes/notes.component';

import { GroupIdService } from './groupId.service';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { NotesFrontComponent } from './notes-front/notes-front.component'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderPComponent,
        RegisterComponent,
        MainComponent,
        GroupComponent,
        NotesComponent,
        NotesFormComponent,
        NotesFrontComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatIconModule,

        MatDatepickerModule,
        MatNativeDateModule,
        
        HttpClientModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        GraphQLModule,
    ],
    exports: [
    ],
    providers: [ CookieService, GroupIdService, MatDatepickerModule, MatNativeDateModule, 
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'http://localhost:3000/graphql',
                    }),
                };
            },

            deps: [HttpLink],

        }],
        bootstrap: [ AppComponent ]
})
export class AppModule { }
