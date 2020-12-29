import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmitParentComponent } from './amit-parent/amit-parent.component';
import { AmitChildComponent } from './amit-child/amit-child.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';

@NgModule({
  declarations: [
    AppComponent,
    AmitParentComponent,
    AmitChildComponent,
    HomeComponent,
    OfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
