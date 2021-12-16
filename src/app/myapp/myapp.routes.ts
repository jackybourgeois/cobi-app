import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { MyAppComponent } from './myapp.component';
import { PropertiesComponent } from './properties/properties.component';

export const MyAppRoutes: Routes = [
    {
        path: '',
        component: MyAppComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'properties',
            component: PropertiesComponent
          }
        ]
      }
];

export let MyAppRouterModule = RouterModule.forChild(
    MyAppRoutes
);
