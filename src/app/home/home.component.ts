import { Component } from '@angular/core';
import { CollapsibleSectionComponent } from '../collapsible-section/collapsible-section.component';
import { CollapsibleSubsectionComponent } from '../collapsible-subsection/collapsible-subsection.component';
import { MathjaxDirective } from '../mathjax.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CollapsibleSectionComponent, CollapsibleSubsectionComponent, MathjaxDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
