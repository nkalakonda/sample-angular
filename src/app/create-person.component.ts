import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'create-person',
  templateUrl: './create-person.component.html',
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();
  submitted = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
  }

  save() {
    this.personService.createPerson(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
