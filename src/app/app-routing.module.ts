import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFormModule,
  DxLoadPanelModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxSwitchModule,
  DxTabPanelModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import {PessoaComponent} from "./pages/pessoa-component/pessoa.component";
import {PessoaService} from "./shared/services/pessoa.service";
import {CrudBaseComponent} from "./shared/components/crud-component/crud.base.component";
import {DxToolbarModule} from "devextreme-angular/ui/toolbar";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  // {
  //   path: 'tasks',
  //   component: TasksComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'login-form',
  //   component: LoginFormComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'reset-password',
  //   component: ResetPasswordFormComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'create-account',
  //   component: CreateAccountFormComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  // {
  //   path: 'change-password/:recoveryCode',
  //   component: ChangePasswordFormComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  {
    path: '**',
    redirectTo: 'home'
  },

//   Paths definidos

  {path: 'pages/pessoa', component: PessoaComponent, canActivate: [AuthGuardService]},
  {path: 'pages/pessoa/edit', component: PessoaComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), DxDataGridModule, DxFormModule, DxButtonModule, DxToolbarModule, DxTextBoxModule, CommonModule, DxLoadPanelModule, ReactiveFormsModule, DxValidatorModule, DxTabPanelModule, DxDateBoxModule, DxSwitchModule, DxSelectBoxModule, DxNumberBoxModule],
  providers: [AuthGuardService,PessoaService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    PessoaComponent,
    CrudBaseComponent
  ]
})
export class AppRoutingModule { }
