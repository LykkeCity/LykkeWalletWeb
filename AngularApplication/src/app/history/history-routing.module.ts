import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';



const routes: Routes = [
  { path: '',
    component: HistoryComponent,
  }
];


export const HistoryRouting: ModuleWithProviders = RouterModule.forChild(routes);
