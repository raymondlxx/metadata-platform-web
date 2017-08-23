import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UdobjectListComponent } from './component/udobject-list/udobject-list.component';
import { UDObjectService } from './service/udobject.service'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'udobject-list', component: UdobjectListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UdobjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UDObjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
