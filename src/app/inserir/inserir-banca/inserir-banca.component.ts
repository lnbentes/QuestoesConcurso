import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banca } from 'src/app/model/Banca';
import { BancaService } from 'src/app/service/banca.service';

@Component({
  selector: 'app-inserir-banca',
  templateUrl: './inserir-banca.component.html',
  styleUrls: ['./inserir-banca.component.css']
})
export class InserirBancaComponent implements OnInit {

  constructor(
    private router: Router,
    private service: BancaService
  ) { }

  ngOnInit(): void {
  }

  public banca: Banca = new Banca();

  public post() {
    this.banca.peso = 0;
    this.service.post(this.banca).subscribe({next: (resp: Banca) => {
        this.banca = resp;
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
