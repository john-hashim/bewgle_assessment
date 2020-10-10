import { Component, OnInit } from '@angular/core';
import { DataModel,Vote,FeatureRating } from '../model/model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  dataArray:DataModel[]=[];
  parsedvalues:DataModel=null;
  votes:Vote[]
  value=50
  color = 'primary';
  mode= 'determinate';
  feature_keys=[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.parsedvalues=this.data.parse();
    this.dataArray.push(this.parsedvalues);
    this.votes=this.parsedvalues.review_rating.votes;
    this.feature_keys=Object.entries(this.parsedvalues.feature_rating);
  }
}
