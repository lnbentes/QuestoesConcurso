import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirBancaComponent } from './inserir-banca.component';

describe('InserirBancaComponent', () => {
  let component: InserirBancaComponent;
  let fixture: ComponentFixture<InserirBancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirBancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirBancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
