import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';


const COMPONENTS = [
  ToolbarComponent,
  MessagesComponent,
  PageNotFoundComponent,
  LoadingComponent
  ];

const MODULES = [
  FlexLayoutModule,
  MaterialModule,
  RouterModule
  ]


@NgModule({
  
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has already been loaded, Import this module in the AppModule')
    }
  }

  // A expressão acima bloqueia o módulo se ele já tiver sido carregado em outro módulo da aplicação.
}
