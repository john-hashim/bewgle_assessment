import { Component, OnInit } from '@angular/core';
import { DataModel,Vote } from '../model/model';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  dataArray:DataModel[]=[];
  parsedvalues:DataModel=null;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.parsedvalues=this.data.parse();
    this.dataArray.push(this.parsedvalues);
  }

}