import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html'
})
export class PersonsListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private personService: PersonService) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.persons = this.personService.getPersons();
  }
}

