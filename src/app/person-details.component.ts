import { Component, OnInit, Input } from '@angular/core';

import { PersonService } from './person.service';
import { Person } from './person';

import { PersonsListComponent } from './person-list.component';

@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html'
})
export class PersonDetailsComponent implements OnInit {

  @Input() person: Person;

  constructor(private personService: PersonService, private personListComponent: PersonsListComponent) { }

  ngOnInit() {
  }

  updatePerson() {
    this.personService.updatePerson(this.person)
      .subscribe(
      data => {
        console.log(data);
        this.person = data as Person;
      },
      error => console.log(error));
  }

  deletePerson(id: string) {
    this.personService.deletePerson(id)
      .subscribe(
      data => {
        console.log(data);
        this.personListComponent.reloadData();
      },
      error => console.log(error));
  }

}
