import { Injectable } from '@angular/core'
import { Subject, Observable } from "rxjs";

@Injectable()
export class GroupIdService {
    private subject = new Subject<any>();

    sendId(id: string) {
        this.subject.next({id: id});
    }

    getId(): Observable<any> {
        return this.subject.asObservable()
    }
}
