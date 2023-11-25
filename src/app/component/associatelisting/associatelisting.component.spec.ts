import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatelistingComponent } from './associatelisting.component';

describe('AssociatelistingComponent', () => {
  let component: AssociatelistingComponent;
  let fixture: ComponentFixture<AssociatelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociatelistingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociatelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
