import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoCadastroComponent } from './processo-cadastro.component';

describe('ProcessoCadastroComponent', () => {
  let component: ProcessoCadastroComponent;
  let fixture: ComponentFixture<ProcessoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
