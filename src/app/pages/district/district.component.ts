import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { district } from 'src/assets/data/data';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {

  constructor(private hero:HeroService,
    private router:Router){}
  district=this.hero.getData()
  gotoHere(id:any)
  {
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])

  }
}
 

    
  
  






