import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { SliderComponent } from './slider/slider.component';
import { SliderConfigurableComponent } from './slider-configurable/slider-configurable.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent},
  { path: 'flexbox', component: FlexboxComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'sliderconfig', component: SliderConfigurableComponent},
  { path: '**', redirectTo: 'buttons' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
