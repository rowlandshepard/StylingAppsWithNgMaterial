import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { SliderComponent } from './slider/slider.component';
import { SliderConfigurableComponent } from './slider-configurable/slider-configurable.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent,
    SliderComponent,
    SliderConfigurableComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class DemoModule { }
