import { Component, OnInit } from '@angular/core';
import { Profiles } from '../modals/profiles.modal';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html'
})
export class ParallelComponent implements OnInit {
  profilesData: Profiles;

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.apiService.profiles$.subscribe((data: Profiles) => {
      if (data) {
        this.profilesData = data;
      }
    });
  }
}
