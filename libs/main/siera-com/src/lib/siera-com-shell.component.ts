import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarDefaultComponent } from '@siera-co/main-shared';

@Component({
  selector: 'lib-siera-com-shell',
  imports: [CommonModule, RouterOutlet, NavbarDefaultComponent],
  templateUrl: './siera-com-shell.component.html',
  styleUrl: './siera-com-shell.component.scss',
})
export class SieraComShellComponent {}
