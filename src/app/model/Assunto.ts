import { Disciplina } from "./Disciplina";
import { AtributosBasicos } from "./InformacoesBasicas";
import { Topico } from "./Topico";

export class Assunto extends AtributosBasicos{

  public disciplina: Disciplina;
  public topicos: Topico[];

}
