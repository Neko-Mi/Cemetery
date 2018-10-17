import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cemetery } from './cemetery';
import { MessageService } from './message.service';

// const httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root'
})
export class CemeteryService {

    private url = '/api/cemeteries';

    constructor(private messageService: MessageService,
        private http: HttpClient) {
    }

    getCemeterys() {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.addnew('Кладбище');

        return this.http.get(this.url + '/1');
    }

    // getCemetery(id: number): Observable<Cemetery> {
    //    // TODO: send the message _after_ fetching the hero
    //    //this.messageService.addnew(`CemeteryService: fetched Cemetery id=${id}`);
    //    return of(CEMETERYS.find(cemetery => cemetery.id === id));
    // }

    createCemetery(cem: Cemetery) {
        return this.http.post(this.url, cem);
    }

    updateCemetery(cem: Cemetery) {
        return this.http.put(this.url, cem);
    }

    deleteCemetery(cemetery: Cemetery | number) {
        const id = typeof cemetery === 'number' ? cemetery : cemetery.id;
        // const url = '${this.cemeteriesUrl}/${id}';

        return this.http.delete<Cemetery>(this.url + '/' + id);
    }


    // createCemetery1(cem: Cemetery, fileToUpload: File) {
    //     if (fileToUpload) {
    //         const formData: FormData = new FormData();
    //         formData.append('fileKey', fileToUpload, fileToUpload.name);
    //         formData.append('data', JSON.stringify(this.cem));
    //         return this.http.post(this.url, formData);
    //     } else {
    //         return this.http.post(this.url, cem);
    //     }

    // }
    // postFile(fileToUpload: File)/*: Observable<boolean>*/ {
    //     // const endpoint = 'your-destination-url';
    //     const formData: FormData = new FormData();
    //     formData.append('fileKey', fileToUpload, fileToUpload.name);
    //     formData.append('data', JSON.stringify(this.form));
    //     return this.http.post(this.url, formData);
    //     //   .map(() => { return true; })
    //     //   .catch((e) => this.handleError(e));
    //   }
    // handleError(e: any): any {
    //     throw new Error('Method not implemented.');
    // }
}
