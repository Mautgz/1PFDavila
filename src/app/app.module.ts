import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadeAlumnosComponent } from './listade-alumnos/listade-alumnos.component';
import { ABMdeAlumnosComponent } from './abmde-alumnos/abmde-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadeAlumnosComponent,
    ABMdeAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
