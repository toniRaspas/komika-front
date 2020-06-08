import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: FormGroup;
  constructor() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required,
      Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]\w{8,30}$/)
      ])
    })
  }


  ngOnInit(): void {
  }
  onSubmit() { console.log(this.login.value) }
}
