import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'aboutComponent',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
  public title:string;
  public subtitle:string;
  public email:string;
  public git:string;

  constructor(){
    this.title = "Roberto Lago";
    this.subtitle="Front-End Developer";
    this.email="roberto.lago.ubeda@gmail.com";
    this.git="https://github.com/RLG94"

  }
 

 
}
