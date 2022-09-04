import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/model/Disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';

@Component({
  selector: 'app-inserir-disciplina',
  templateUrl: './inserir-disciplina.component.html',
  styleUrls: ['./inserir-disciplina.component.css']
})
export class InserirDisciplinaComponent implements OnInit {

  constructor(
    private router: Router,
    private service: DisciplinaService
  ) { }

  ngOnInit(): void {
  }

  public disciplina: Disciplina = new Disciplina();

  public post() {
    this.disciplina.peso = 0;
    this.service.post(this.disciplina).subscribe({next: (resp: Disciplina) => {
        this.disciplina = resp;
        alert("Enviada com sucesso!");
        // this.router.navigate(["/inserirQuestao"]);
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          alert("Não foi possível cadastrar");
        }
      },
    });
  }

}
