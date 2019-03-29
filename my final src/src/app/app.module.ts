import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AngularFireModule } from '@angular/fire';
import { EmployeeService } from './employee.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import {AuthenticateService} from './authenticate.service';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [EmployeeService,AuthenticateService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
