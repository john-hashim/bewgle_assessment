import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel,Vote } from '../model/model';
import { DataService } from '../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataArray:DataModel[]=[];
  
  parsedvalues:DataModel=null;

  constructor(private data:DataService,private snackBar: MatSnackBar){}

  ngOnInit(){
    this.parsedvalues=this.data.parse();
    this.dataArray.push(this.parsedvalues);    
  }
  signIn(){
    this.snackBar.open("You Are Signed In As" ,"Username",{
      duration: 2000,
    });
  }
}
