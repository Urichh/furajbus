import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSubsectionComponent } from './collapsible-subsection.component';

describe('CollapsibleSubsectionComponent', () => {
  let component: CollapsibleSubsectionComponent;
  let fixture: ComponentFixture<CollapsibleSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleSubsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsibleSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
