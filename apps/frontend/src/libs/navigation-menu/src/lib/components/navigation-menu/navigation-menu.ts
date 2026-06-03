import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavItem } from '../../interfaces/navigation-item.interface';
@Component({
  selector: 'lib-navigation-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.css',
})
export class NavigationMenu {
  @Input() menuItems: NavItem[] = [];
}
