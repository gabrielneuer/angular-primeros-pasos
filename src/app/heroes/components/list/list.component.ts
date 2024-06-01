import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroName:string[]=['spiderman', 'Ironamn', 'Hulk', 'Thor']
  deleteHero?:string
  removeLastHero():void{
    this.deleteHero = this.heroName.pop()
    
  }
}
