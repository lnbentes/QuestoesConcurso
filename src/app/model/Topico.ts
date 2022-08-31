import { Assunto } from "./Assunto";
import { AtributosBasicos } from "./InformacoesBasicas";
import { SubTopico } from "./SubTopico";

export class Topico extends AtributosBasicos{

  public assunto: Assunto;
  public subTopicos: SubTopico[];

}

