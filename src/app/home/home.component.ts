import { Component } from '@angular/core';
import { CollapsibleSectionComponent } from '../collapsible-section/collapsible-section.component';
import { CollapsibleSubsectionComponent } from '../collapsible-subsection/collapsible-subsection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CollapsibleSectionComponent, CollapsibleSubsectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
