import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionUsuariosComponent } from './pages/admin/administracion-usuarios/administracion-usuarios.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PuntosAtencionComponent } from './pages/admin/puntos-atencion/puntos-atencion.component';
import { TipoQuejasComponent } from './pages/admin/tipo-quejas/tipo-quejas.component';
import { UsuariosPuntoAtencionComponent } from './pages/admin/usuarios-punto-atencion/usuarios-punto-atencion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UsuarioGuard } from './services/usuario.guard';
import { QuejasUsuarioComponent } from './pages/user/quejas-usuario/quejas-usuario.component';
import { CuentahabienteDashboardComponent } from './pages/cuentahabiente/cuentahabiente-dashboard/cuentahabiente-dashboard.component';
import { CuentahabienteGuard } from './services/cuentahabiente.guard';
import { CuentahabienteQuejaComponent } from './pages/cuentahabiente/cuentahabiente-queja/cuentahabiente-queja.component';
import { ConsultaUsuarioComponent } from './pages/user/consulta-usuario/consulta-usuario.component';
import { CentralizadorDashboardComponent } from './pages/centralizador/centralizador-dashboard/centralizador-dashboard.component';
import { CentralizadorGuard } from './services/centralizador.guard';
import { CentralizadorComponent } from './pages/centralizador/centralizador/centralizador.component';
import { AnalisisComponent } from './pages/centralizador/analisis/analisis.component';
import { OperadorDashboardComponent } from './pages/operador/operador-dashboard/operador-dashboard.component';
import { OperadorGuard } from './services/operador.guard';
import { OperadorComponent } from './pages/operador/operador/operador.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
     {
        path: 'puntos-atencion',
        component: PuntosAtencionComponent
      },
      {
        path: 'usuarios-punto-atencion',
        component: UsuariosPuntoAtencionComponent
      },
      {
        path: 'tipo-quejas',
        component: TipoQuejasComponent
      },
      {
        path: 'admin-usuarios',
        component: AdministracionUsuariosComponent
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [UsuarioGuard],
    children: [
      {
        path: 'usuario',
        component: QuejasUsuarioComponent
      },
      {
        path: 'consulta',
        component: ConsultaUsuarioComponent
      }
    ]
  },
  {
    path: 'cuentahabiente-dashboard',
    component: CuentahabienteDashboardComponent,
    canActivate: [CuentahabienteGuard],
    children: [
      {
        path: 'cuentahabiente',
        component: CuentahabienteQuejaComponent
      }
    ]
  },
  {
    path: 'centralizador-dashboard',
    component: CentralizadorDashboardComponent,
    canActivate: [CentralizadorGuard],
    children: [
      {
        path: 'centralizador',
        component: CentralizadorComponent
      },{
        path: 'analizador',
        component: AnalisisComponent
      }
      
    ]
  },
  {
    path: 'operador-dashboard',
    component: OperadorDashboardComponent,
    canActivate: [OperadorGuard],
    children: [
      {
        path: 'operador',
        component: OperadorComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
