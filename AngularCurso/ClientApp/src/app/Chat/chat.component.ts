import { Component } from '@angular/core';

@Component({

  //contrato : colocando el nombre del tag
  selector: "chat-app",
  //llamamos a nuestro archivo html
  templateUrl : "./chat.component.html"

})
  
export class  ChatComponet {

  //public nombre = "Mariano Espinoza"

  //  public CambiarNombre() {

  //    this.nombre = "Nombre Cambiado" 

  //  }

  //ARREGLO DE STRINGS 
  public lstmensajes: string[] = ["Hola", "Gabriel", "Soy","Mario"];

}
