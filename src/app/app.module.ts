import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { ShowcommentComponent } from './Comment/showcomment/showcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ShowcommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
