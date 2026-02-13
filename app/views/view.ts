export abstract class View <T> {

  protected elemento: HTMLElement
  private escapar: boolean;

  constructor (seletor: string, escapar?: boolean) {
    escapar = escapar ? escapar : true;
    this.elemento = document.querySelector(seletor);
  }

  public update(modelo: T): void {
    let tamplate = this.tamplate(modelo);
    
    if(this.escapar) {
      tamplate = tamplate.replace(/<script>[\s\S]*?<\/script>/,'')
    }

    this.elemento.innerHTML = tamplate;
  }

  protected abstract tamplate (modelo: T) : string;

}