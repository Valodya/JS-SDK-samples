import {Component, OnInit} from '@angular/core';

import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-rt-data',
  templateUrl: './rt-data.component.html',
  styleUrls: ['./rt-data.component.css']
})
export class RTDataComponent implements OnInit {
  persons: Person[];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);

    this.personService.addCreatePersonListener(this.onPersonCreate);
    this.personService.addUpdatePersonListener(this.onPersonUpdate);
    this.personService.addDeletePersonListener(this.onPersonDelete);
  }

  onPersonCreate = (person: Person) => {
    console.log('A new person has been created:', person);

    this.persons.unshift(person)
  };

  onPersonUpdate = (person: Person) => {
    console.log('Person has been updated:', person);

    this.persons = this.persons.map(p => p.objectId === person.objectId ? person : p)
  };

  onPersonDelete = (person: Person) => {
    console.log('Person has been deleted:', person);

    this.persons = this.persons.filter(p => p.objectId !== person.objectId)
  };

  add(name: string): void {
    name = name.trim();

    if (name) {
      this.personService.addPerson({name} as Person)
    }
  }

  delete(person: Person): void {
    this.personService.deletePerson(person);
  }

}
