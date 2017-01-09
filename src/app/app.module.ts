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
import { KompetenzlisteComponent } from './kompetenzliste/kompetenzliste.component';
import { FoederplanComponent } from './foederplan/foederplan.component';
import { ErreichtekompetenzenComponent } from './erreichtekompetenzen/erreichtekompetenzen.component';
import { ProfilComponent } from './profil/profil.component';
import { ChapterOverviewComponent } from './chapter-overview/chapter-overview.component';
import { EducationalPlanComponent } from './educational-plan/educational-plan.component';
import { AchievedcompetencesComponent } from './achievedcompetences/achievedcompetences.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { SchoolComponent } from './school/school.component';
import { StudygroupComponent } from './studygroup/studygroup.component';
import { HelpComponent } from './help/help.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

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
    DropdownMenuComponent,
    KompetenzlisteComponent,
    FoederplanComponent,
    ErreichtekompetenzenComponent,
    ProfilComponent,
    ChapterOverviewComponent,
    EducationalPlanComponent,
    AchievedcompetencesComponent,
    SuperheroComponent,
    SchoolComponent,
    StudygroupComponent,
    HelpComponent,
    LogoutComponent,
    LoginComponent
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
