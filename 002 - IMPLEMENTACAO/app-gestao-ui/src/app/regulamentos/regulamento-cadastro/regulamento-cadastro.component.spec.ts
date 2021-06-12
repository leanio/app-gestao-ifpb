import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulamentoCadastroComponent } from './regulamento-cadastro.component';

describe('RegulamentoCadastroComponent', () => {
  let component: RegulamentoCadastroComponent;
  let fixture: ComponentFixture<RegulamentoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulamentoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulamentoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
