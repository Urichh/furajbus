import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-collapsible-section',
    imports: [ NgIf ],
    templateUrl: './collapsible-section.component.html',
    styleUrls: ['./collapsible-section.component.css']
})

export class CollapsibleSectionComponent {
    @Input() title?: string;

    isExpanded = true;
    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
}