import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-subsection',
  imports: [],
  templateUrl: './collapsible-subsection.component.html',
  styleUrl: './collapsible-subsection.component.css'
})
export class CollapsibleSubsectionComponent {
    @Input() title?: string;
    isExpanded = false;
  
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    }
}
