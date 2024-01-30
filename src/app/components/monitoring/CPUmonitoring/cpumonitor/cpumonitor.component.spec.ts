import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpumonitorComponent } from './cpumonitor.component';

describe('CpumonitorComponent', () => {
  let component: CpumonitorComponent;
  let fixture: ComponentFixture<CpumonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpumonitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpumonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
