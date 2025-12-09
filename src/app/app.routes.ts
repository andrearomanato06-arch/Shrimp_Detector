import { Routes } from '@angular/router';
import { ShirimpDetectorWelcomePage } from './shirimp-detector-welcome-page/shirimp-detector-welcome-page';
import { FirstQuestion } from './first-question/first-question';
import { ResponseOption } from './response-option/response-option';

export const routes: Routes = [
  {path: '' , component: ShirimpDetectorWelcomePage},
  {path: 'home' , component: ShirimpDetectorWelcomePage},
  {path: 'first-question' , component: FirstQuestion},
  {path:`result/:response`, component: ResponseOption},
];
