import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { URLS } from '../constants/apiurls.contants';
import { Profiles } from '../modals/profiles.modal';
import { ProfileResponseType } from '../types/profile-response.type';

import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private profilesBehavSubject = new BehaviorSubject<Profiles>(null);
  profiles$ = this.profilesBehavSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProfileData() {
    const url = URLS.apiurl;
    this.http.get(url, { responseType: 'json' }).pipe(
      map((data: ProfileResponseType) => {
          this.profilesBehavSubject.next(new Profiles().deserialize(data));
          return this.profilesBehavSubject.getValue();
      })
    ).subscribe();
  }

  getData() {
    return this.profilesBehavSubject.getValue();
  }
}
