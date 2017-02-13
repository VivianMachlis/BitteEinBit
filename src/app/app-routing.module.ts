    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    //import {BrowserModule} from '@angular/platform-browser';
    import { HeaderComponent }   from './header/header.component';
    import { FooterComponent }      from './footer/footer.component';
    import { ContentComponent }  from './content/content.component';
    import {LoginComponent}  from './login/login.component';
    import {ChangepasswordComponent} from './changepassword/changepassword.component';
    import {DeleteprofileComponent} from './deleteprofile/deleteprofile.component';

    const routes: Routes = [
      //initial path to login
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      //login path
      { path: 'login',  component: LoginComponent /*, outlet : 'logI'*/ },
      { path: 'changepw', children: [
          {path:'', component:FooterComponent,outlet:'footer'},
          {path:'', component:HeaderComponent,outlet:'header'},
          {path:'', component:ChangepasswordComponent,outlet:'content'},
      ]},
      { path: 'deleteprofile', children: [
          {path:'', component:FooterComponent,outlet:'footer'},
          {path:'', component:HeaderComponent,outlet:'header'},
          {path:'', component:DeleteprofileComponent,outlet:'content'},
      ]},
      //standard when logged in
      { path: 'achievedCompetences',  children: [
        //{path:'', component:ContentComponent,outlet:'content'},
        {path:'', component:FooterComponent,outlet:'footer'},
        {path:'', component:HeaderComponent,outlet:'header'}
        ]
      }
    ];
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}
