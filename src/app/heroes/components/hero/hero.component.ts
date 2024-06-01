import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Spiderman'
  public age: number = 40

  get capitalizedName(): string {
    return this.name.toUpperCase()

  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Hulk'
  }

  changeAge(): void {
    this.age = 15
  }
}
