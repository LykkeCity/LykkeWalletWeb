import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { SettingsRouting } from './settings-routing.module';
import { SettingsComponent } from './settings.component';


@NgModule({
  imports: [
    SettingsRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    SettingsComponent
  ],
  providers: []
})
export class SettingsModule {}
