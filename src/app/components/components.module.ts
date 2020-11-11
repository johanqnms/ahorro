import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MetasComponent } from './metas/metas.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NoticiasComponent } from './noticias/noticias.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MetasComponent,
    PortafolioComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MetasComponent,
    PortafolioComponent,
    NoticiasComponent
  ]
})
export class ComponentsModule { }
