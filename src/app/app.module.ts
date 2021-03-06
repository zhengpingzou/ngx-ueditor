import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HighlightJsModule } from 'ngx-highlight-js';
import { UEditorModule } from 'ngx-ueditor';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo.component';
import { DevComponent } from './components/dev.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: DemoComponent },
        { path: 'dev', component: DevComponent },
      ],
      { useHash: true },
    ),
    CommonModule,
    HighlightJsModule,

    UEditorModule.forRoot({
      js: [
        `./assets/ueditor/ueditor.all.min.js`,
        `./assets/ueditor/ueditor.config.js`,
      ],
      options: {
        UEDITOR_HOME_URL: (location.href.indexOf('github') !== -1 ? '/ngx-ueditor' : '.') + '/assets/ueditor/',
      },
    }),
  ],
  declarations: [AppComponent, DemoComponent, DevComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
