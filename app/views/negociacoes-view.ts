import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

  export class NegociacaoView extends View<Negociacoes> {
    
    tamplate (modelo: Negociacoes) : string {
     return `
     <table class="table table-hover table-bordered">
        <thead>
          <tr> 
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
            ${modelo.lista().map((negociacao) => {
              return`
              <tr>
                <th>${new Intl.DateTimeFormat().format(negociacao.data)}</th>
                <th>${negociacao.quantidade}</th>
                <th>${negociacao.valor}</th>              
              <tr>
              `
            }).join('')} 
        <tbody>
     <table>
     `
    }

  }