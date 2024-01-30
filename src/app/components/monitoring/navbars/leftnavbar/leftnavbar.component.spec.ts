import { ComponentFixture, TestBed } from '@angular/core/testing';

import { leftnavbarComponent } from './leftnavbar.component';  // Correct import

describe('LeftnavbarComponent', () => {
  let component: leftnavbarComponent; 
  let fixture: ComponentFixture<leftnavbarComponent>;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [leftnavbarComponent]  
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(leftnavbarComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
