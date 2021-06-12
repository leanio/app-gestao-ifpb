import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoPesquisaComponent } from './processo-pesquisa.component';

describe('ProcessoPesquisaComponent', () => {
  let component: ProcessoPesquisaComponent;
  let fixture: ComponentFixture<ProcessoPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
