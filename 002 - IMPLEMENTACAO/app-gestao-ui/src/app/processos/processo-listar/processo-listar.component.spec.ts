import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoListarComponent } from './processo-listar.component';

describe('ProcessoListarComponent', () => {
  let component: ProcessoListarComponent;
  let fixture: ComponentFixture<ProcessoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
