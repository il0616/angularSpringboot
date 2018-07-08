import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  importFile(files: FileList) {
    const formData = new FormData();
    formData.append('excelFile', files[0]);
    formData.append('path', 'abc');

    this.http.post('/import', formData, {responseType: 'text'})
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }
}
