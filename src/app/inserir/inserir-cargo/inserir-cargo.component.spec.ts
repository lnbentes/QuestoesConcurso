import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCargoComponent } from './inserir-cargo.component';

describe('InserirCargoComponent', () => {
  let component: InserirCargoComponent;
  let fixture: ComponentFixture<InserirCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
