import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/model/Cargo';
import { CargoService } from 'src/app/service/cargo.service';

@Component({
  selector: 'app-inserir-cargo',
  templateUrl: './inserir-cargo.component.html',
  styleUrls: ['./inserir-cargo.component.css']
})
export class InserirCargoComponent implements OnInit {

  constructor(
    private router: Router,
    private service: CargoService
  ) { }

  ngOnInit(): void {
  }

  public cargo: Cargo = new Cargo();

  public post() {
    this.cargo.peso = 0;
    this.service.post(this.cargo).subscribe({next: (resp: Cargo) => {
        this.cargo = resp;
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
