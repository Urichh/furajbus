import { Component } from '@angular/core';
import { CollapsibleSectionComponent } from '../collapsible-section/collapsible-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CollapsibleSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
