    import { NgModule }             from '@angular/core';
    import { AppModule }  from './app.module'
    import { RouterModule, Routes } from '@angular/router';
    //import {BrowserModule} from '@angular/platform-browser';
    import { HeaderComponent }   from './header/header.component';
    import { FooterComponent }      from './footer/footer.component';
    import { ContentComponent }  from './content/content.component';
    import {LoginComponent}  from './login/login.component';
    import {ChangepasswordComponent} from './changepassword/changepassword.component';
    import {DeleteprofileComponent} from './deleteprofile/deleteprofile.component';
    import {ChangeprofilepictureComponent} from './changeprofilepicture/changeprofilepicture.component';
    import {ValidateService} from './validate.service'

    const routes: Routes = [
      //initial path to login
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      //login path
      { path: 'login',  children: [
          {path:'',component: LoginComponent},
          {path:'',outlet:'footer'},
          {path:'',outlet:'header'}
          ]},
      { path: 'changepw', children: [
          {path:'', component:FooterComponent,outlet:'footer',canActivate:[ValidateService]},
          {path:'', component:HeaderComponent,outlet:'header',canActivate:[ValidateService]},
          {path:'', component:ChangepasswordComponent,outlet:'content'},
      ]},
      { path: 'deleteprofile', children: [
          {path:'', component:FooterComponent,outlet:'footer',canActivate:[ValidateService]},
          {path:'', component:HeaderComponent,outlet:'header',canActivate:[ValidateService]},
          {path:'', component:DeleteprofileComponent,outlet:'content',canActivate:[ValidateService]},
      ]},
      { path: 'changeprofilepicture', children: [
          {path:'', component:FooterComponent,outlet:'footer',canActivate:[ValidateService]},
          {path:'', component:HeaderComponent,outlet:'header',canActivate:[ValidateService]},
          {path:'', component:ChangeprofilepictureComponent,outlet:'content',canActivate:[ValidateService]},
      ]},
      //standard when logged in
      { path: 'achievedCompetences',  children: [
        //{path:'', component:ContentComponent,outlet:'content'},
        {path:'', component:FooterComponent,outlet:'footer',canActivate:[ValidateService]},
        {path:'', component:HeaderComponent,outlet:'header',canActivate:[ValidateService]}
        ]
      }
    ];
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}
