import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mode = "side";

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event']) onresize(event){
    if( event.target.innerWidth <= 1024 ) this.mode = "over";
    else this.mode = "side";
  }
}
