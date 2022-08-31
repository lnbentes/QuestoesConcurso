import { AtributosBasicos } from "./InformacoesBasicas";
import { Questao } from "./Questao";
import { Topico } from "./Topico";

export class SubTopico extends AtributosBasicos{

  public topico: Topico
  public questao: Questao[];

}
