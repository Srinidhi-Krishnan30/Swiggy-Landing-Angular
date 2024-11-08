import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestNearYouComponent } from './rest-near-you.component';

describe('RestNearYouComponent', () => {
  let component: RestNearYouComponent;
  let fixture: ComponentFixture<RestNearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestNearYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
