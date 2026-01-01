import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData : HTMLInputElement;
  private inputQuantidade : HTMLInputElement;
  private inputValor : HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona() : void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    const tamanhoLista = this.negociacoes.lista().length;
    console.log(`lista[${tamanhoLista}] : `,this.negociacoes.lista());
    this.limpaFormulario();
  }

  criaNegociacao() : Negociacao {
    // manter os paramentros separados para ter mais clareza.
    const date = new Date(this.inputData.value.replace(/-/g, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(date,quantidade,valor);
  }

  limpaFormulario() : void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

}