import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationMenu } from 'navigation-menu';
@Component({
  imports: [RouterModule, NavigationMenu],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell';
}
