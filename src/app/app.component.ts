import { Component } from "@angular/core";
import { usuarios } from "./usuarios";
import $ from "jquery";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  usuarios = usuarios;
  selectedUser = {};
  modoModal = "detalle";

  formEditar = {
    mail:"",
    mail_confirmacion:"",
    telefono_laboral:"",
    cargo:"",
    sector:"",
  }

  formEditarTieneErrores(){
    console.log("formEditarTieneErrores")
    if(!this.formEditar.mail||this.formEditar.mail!=this.formEditar.mail_confirmacion)
      return true;
    return false;

  }

  seEstaViendoElCollapsable(){
    return $('#collapseExample').is( ":visible" )
  }

  abrirModal(user) {
    this.selectedUser = user;
    const {mail,mail_confirmacion,telefono_laboral,cargo,sector} = user;
    this.formEditar = {mail,mail_confirmacion,telefono_laboral,cargo,sector};

    $("#userDataModal").modal();
  }

  cambiarModoModal(user,modo) {
    this.modoModal = modo;
    if(!$("#userDataModal").data('bs.modal')?._isShown){
      this.abrirModal(user);
    }
  }
}
