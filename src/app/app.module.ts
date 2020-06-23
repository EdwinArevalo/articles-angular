import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AcercadeComponent } from './acercade/acercade.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArticulosService } from './services/articulos.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
