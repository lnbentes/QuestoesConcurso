import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTopicoComponent } from './inserir-topico.component';

describe('InserirTopicoComponent', () => {
  let component: InserirTopicoComponent;
  let fixture: ComponentFixture<InserirTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirTopicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
