import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusCadastroComponent } from './campus-cadastro.component';

describe('CampusCadastroComponent', () => {
  let component: CampusCadastroComponent;
  let fixture: ComponentFixture<CampusCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
