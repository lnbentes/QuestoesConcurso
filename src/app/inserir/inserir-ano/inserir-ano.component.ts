import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ano } from 'src/app/model/Ano';
import { AnoService } from 'src/app/service/ano.service';

@Component({
  selector: 'app-inserir-ano',
  templateUrl: './inserir-ano.component.html',
  styleUrls: ['./inserir-ano.component.css']
})
export class InserirAnoComponent implements OnInit {

  constructor(
    private router: Router,
    private service: AnoService
  ) { }

  ngOnInit(): void {
  }

  public ano: Ano = new Ano();

  public post() {
    this.ano.peso = 0;
    this.service.post(this.ano).subscribe({next: (resp: Ano) => {
        this.ano = resp;
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
