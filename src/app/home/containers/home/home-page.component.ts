import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {

    this.homeService.getCharacters().subscribe(res => {
      console.log(res);
      
    })
  }
}
