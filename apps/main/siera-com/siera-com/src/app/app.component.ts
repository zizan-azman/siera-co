import { Component } from '@angular/core';
import { SieraComShellComponent } from '@siera-co/siera-com-lib';

@Component({
  imports: [SieraComShellComponent],
  selector: 'app-root',
  template: '<lib-siera-com-shell/>',
})
export class AppComponent {
  title = 'siera-com';
}
