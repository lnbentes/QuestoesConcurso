import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaDeConhecimento } from 'src/app/model/AreaDeConhecimento';
import { AreaServiceService } from 'src/app/service/area.service';

@Component({
  selector: 'app-inserir-area',
  templateUrl: './inserir-area.component.html',
  styleUrls: ['./inserir-area.component.css']
})
export class InserirAreaComponent implements OnInit {

  constructor(
    private router: Router,
    private service: AreaServiceService
  ) { }

  ngOnInit(): void {
  }

  public area: AreaDeConhecimento = new AreaDeConhecimento();

  public post() {
    this.area.peso = 0;
    this.service.post(this.area).subscribe({next: (resp: AreaDeConhecimento) => {
        this.area = resp;
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
