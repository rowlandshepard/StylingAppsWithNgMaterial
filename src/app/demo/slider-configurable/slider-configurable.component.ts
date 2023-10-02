import {Component} from '@angular/core';


@Component({
  selector: 'app-slider-configurable',
  templateUrl: './slider-configurable.component.html',
  styleUrls: ['./slider-configurable.component.less']
})
export class SliderConfigurableComponent {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

  getColor(r:number, g:number, b:number) {
    //var hex = valuemyColor.R.ToString("X2") + myColor.G.ToString("X2") + myColor.B.ToString("X2");

    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  componentToHex(c:number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex:hex;
  }
}
