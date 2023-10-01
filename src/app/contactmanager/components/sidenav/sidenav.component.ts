import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})

export class SidenavComponent implements OnInit {
  public isScreenSmall:boolean;

  constructor(private breadpointObserver: BreakpointObserver ){
    this.isScreenSmall = false;
  }

  ngOnInit(): void {
    this.breadpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)` ])
      .subscribe((state:BreakpointState)=>{
          this.isScreenSmall = state.matches
      });
  }
}
