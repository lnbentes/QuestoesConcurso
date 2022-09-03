import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirDisciplinaComponent } from './inserir-disciplina.component';

describe('InserirDisciplinaComponent', () => {
  let component: InserirDisciplinaComponent;
  let fixture: ComponentFixture<InserirDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirDisciplinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
