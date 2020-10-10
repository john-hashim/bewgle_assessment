import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { DataModel,Vote } from '../model/model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dataArray:DataModel[]=[];
  parsedvalues:DataModel=null;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.parsedvalues=this.data.parse();
    this.dataArray.push(this.parsedvalues);
  }
  slides = [
            {'image': '../../assets/breakfast.jpg'},
            {'image': '../../assets/cafe.jpg'},
             {'image': '../../assets/restaurant.jpg'}
            ];

}
