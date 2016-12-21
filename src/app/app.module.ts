import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';
import { BubbleDetailsComponent } from './bubble-details/bubble-details.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent,
    BubbleDetailsComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
