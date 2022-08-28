import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';


const COMPONENTS = [ToolbarComponent, MessagesComponent, PageNotFoundComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule ]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has already been loaded, Import this module in the AppModule')
    }
  }

  // A expressão acima bloqueia o módulo se ele já tiver sido carregado em outro módulo da aplicação.
}
