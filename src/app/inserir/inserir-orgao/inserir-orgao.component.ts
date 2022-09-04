import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orgao } from 'src/app/model/Orgso';
import { OrgaoService } from 'src/app/service/orgao.service';

@Component({
  selector: 'app-inserir-orgao',
  templateUrl: './inserir-orgao.component.html',
  styleUrls: ['./inserir-orgao.component.css']
})
export class InserirOrgaoComponent implements OnInit {

  constructor(
    private router: Router,
    private service: OrgaoService
  ) { }

  ngOnInit(): void {
  }

  public orgao: Orgao = new Orgao();

  public post() {
    this.orgao.peso = 0;
    this.service.post(this.orgao).subscribe({next: (resp: Orgao) => {
        this.orgao = resp;
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
