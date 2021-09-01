import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'devices',
        loadChildren: () =>
          import('./device/device-routing.module').then((m) => m.DeviceRoutingModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          )
      },
      {
        path: 'websites',
        loadChildren: () =>
          import('./website/website.module').then(
            (m) => m.WebsiteModule
          )
      },
      {
        path: 'android-for-work',
        loadChildren: () =>
          import('./work/work.module').then(
            (m) => m.WorkModule
          )
      },
      {
        path: 'enterprise-app-store',
        loadChildren: () =>
          import('./app-store/app-store.module').then(
            (m) => m.AppStoreModule
          )
      },
      {
        path: 'advanced-restrictions',
        loadChildren: () =>
          import('./restrication/restrication.module').then(
            (m) => m.RestricationModule
          )
      },
  {
    path: 'managed-configuration',
    loadChildren: () =>
      import('./configuration/configuration.module').then(
        (m) => m.ConfigurationModule
      )
  },
    ]
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
