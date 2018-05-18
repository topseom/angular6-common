import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

import { RouterModule,Routes } from '@angular/router';
import { MaterialModule } from './layout.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  { 
    path:"",component:LayoutComponent,
    children:[
      { path:"",component:HomeComponent},
      { path:"create",component:CreateComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LayoutComponent, HomeComponent, CreateComponent]
})
export class LayoutModule { }
