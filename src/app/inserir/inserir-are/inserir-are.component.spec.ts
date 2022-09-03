import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAreComponent } from './inserir-are.component';

describe('InserirAreComponent', () => {
  let component: InserirAreComponent;
  let fixture: ComponentFixture<InserirAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirAreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
