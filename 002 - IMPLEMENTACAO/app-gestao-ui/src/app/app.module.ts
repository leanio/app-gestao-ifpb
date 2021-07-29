import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { CampusModule } from './campus/campus.module';
import { CoreModule } from './core/core.module';
import { ProcessosModule } from './processos/processos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NotificacaoModule } from './notificacao/notificacao.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    AutenticacaoModule,
    UsuariosModule,
    ProcessosModule,
    CampusModule,
    HomeModule,
    NotificacaoModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
