import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirQuestaoComponent } from './inserir-questao.component';

describe('InserirQuestaoComponent', () => {
  let component: InserirQuestaoComponent;
  let fixture: ComponentFixture<InserirQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirQuestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
