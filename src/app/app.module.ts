import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InserirQuestaoComponent } from './inserir/inserir-questao/inserir-questao.component';
import { InserirAnoComponent } from './inserir/inserir-ano/inserir-ano.component';
import { InserirAreaComponent } from './inserir/inserir-area/inserir-area.component';
import { InserirAssuntoComponent } from './inserir/inserir-assunto/inserir-assunto.component';
import { InserirBancaComponent } from './inserir/inserir-banca/inserir-banca.component';
import { InserirCargoComponent } from './inserir/inserir-cargo/inserir-cargo.component';
import { InserirDisciplinaComponent } from './inserir/inserir-disciplina/inserir-disciplina.component';
import { InserirOrgaoComponent } from './inserir/inserir-orgao/inserir-orgao.component';
import { InserirSubTopicoComponent } from './inserir/inserir-sub-topico/inserir-sub-topico.component';
import { InserirTopicoComponent } from './inserir/inserir-topico/inserir-topico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InserirQuestaoComponent,
    InserirAnoComponent,
    InserirAreaComponent,
    InserirAssuntoComponent,
    InserirBancaComponent,
    InserirCargoComponent,
    InserirDisciplinaComponent,
    InserirOrgaoComponent,
    InserirSubTopicoComponent,
    InserirTopicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
