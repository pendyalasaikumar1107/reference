import { Component, OnInit } from '@angular/core';
import { Profiles } from './modals/profiles.modal';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apiapp';

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.apiService.getProfileData();
    this.apiService.profiles$.subscribe((data: Profiles) => {
      console.log(data);
    });
  }
}
