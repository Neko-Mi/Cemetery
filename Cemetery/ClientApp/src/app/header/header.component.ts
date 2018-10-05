import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  user: User = {
    id: 10,
    name: "Константин", 
    surname: "Константинопольский",
    patronymic: "Константинович",
    photo: "/assets/images/user.jpg",
    email: "Konstantinopol'skiy@yandex.com",
    number: "+7 (922) 333-55-55"
  }

  constructor() { }

  ngOnInit() {
  }

}
