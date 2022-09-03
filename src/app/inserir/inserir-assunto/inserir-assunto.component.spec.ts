import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAssuntoComponent } from './inserir-assunto.component';

describe('InserirAssuntoComponent', () => {
  let component: InserirAssuntoComponent;
  let fixture: ComponentFixture<InserirAssuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirAssuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
