import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirOrgaoComponent } from './inserir-orgao.component';

describe('InserirOrgaoComponent', () => {
  let component: InserirOrgaoComponent;
  let fixture: ComponentFixture<InserirOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirOrgaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
