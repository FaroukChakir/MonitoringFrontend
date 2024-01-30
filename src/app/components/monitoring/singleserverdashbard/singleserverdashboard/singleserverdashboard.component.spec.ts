import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleserverdashboardComponent } from './singleserverdashboard.component';

describe('SingleserverdashboardComponent', () => {
  let component: SingleserverdashboardComponent;
  let fixture: ComponentFixture<SingleserverdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleserverdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleserverdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
