import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShirimpDetectorWelcomePage } from './shirimp-detector-welcome-page/shirimp-detector-welcome-page';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShirimpDetectorWelcomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Shrimp_Detector');
}
