import { Component } from '@angular/core';
import { CarouselComponent } from "../../units/carousel/carousel.component";
import { AccordionComponent } from "../../units/accordion/accordion.component";
import { ImagesComponent } from "../images/images.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { ImgComponent } from "../img/img.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, AccordionComponent, ImagesComponent, FooterComponent, NavbarComponent, ImgComponent,ImgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
