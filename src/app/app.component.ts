import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodComponent } from './food/food.component';
import { ResturantComponent } from './resturant/resturant.component';
import { RestNearYouComponent } from './rest-near-you/rest-near-you.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { RoutepageComponent } from './routepage/routepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,FoodComponent,
    ResturantComponent,
    RestNearYouComponent,
    LocationSearchComponent,RoutepageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy';
}
