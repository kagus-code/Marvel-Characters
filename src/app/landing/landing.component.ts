import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private service: SharedService,
    
  ) { }

  allCharacters!: Observable<any>;
  
  ngOnInit(): void {
    this.getCharacters()


  }

   getCharacters(){
    this.allCharacters = this.service.getAllCharacters();
    
    
  }
}
