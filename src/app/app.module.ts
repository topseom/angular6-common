import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './app.material.module';
import { LoginComponent } from './pages/login/login.component';
import { TodoService } from './providers/todo.service';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [
  { path:"",loadChildren:"./pages/layout/layout.module#LayoutModule",canActivate:[AuthGuard] },
  { path:"login",component:LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
