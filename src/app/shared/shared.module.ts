import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { KeepHtmlPipe } from './keep-html.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, KeepHtmlPipe],
  exports: [ButtonComponent, KeepHtmlPipe]
})
export class SharedModule { }
