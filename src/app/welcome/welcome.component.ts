import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService: string = '';
  errorMessageFromService: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    });
  }
  
  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    });
  }
  // getWelcomeMessage(){
  //   console.log(this.service.executeHelloWorldBeanService())
  //   this.service.executeHelloWorldBeanService().subscribe()
  // }
}
