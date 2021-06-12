import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPesquisaComponent } from './campus-pesquisa.component';

describe('CampusPesquisaComponent', () => {
  let component: CampusPesquisaComponent;
  let fixture: ComponentFixture<CampusPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
