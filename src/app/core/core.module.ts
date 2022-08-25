import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
const COMPONENTS = [ToolbarComponent, MessagesComponent];
const MODULES = [FlexLayoutModule, MaterialModule, CommonModule]
@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {}
