import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GuiasComponent } from './components/guias/guias.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShareadModule } from './sharead/sharead.module';
import { HomeRestService } from './components/home/services/home.rest.service';
import { HomeService } from './components/home/services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
    HomeComponent,
    GuiasComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ShareadModule,
    HttpClientModule
  ],
  providers: [HomeRestService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
