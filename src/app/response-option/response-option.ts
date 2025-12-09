import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-response-option',
  imports: [RouterLink],
  templateUrl: './response-option.html',
  styleUrl: './response-option.css',
})
export class ResponseOption {
  response: string = '';

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.response = this.route.snapshot.paramMap.get(`response`) || ``;
  }

  goToHomePage(){
    this.router.navigate([``]);
  }
}
