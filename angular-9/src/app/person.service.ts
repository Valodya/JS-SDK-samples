import {Injectable} from '@angular/core';

import {Observable, from} from 'rxjs';

import {Person, PersonsStore} from './person';

@Injectable({providedIn: 'root'})
export class PersonService {

  constructor() {
  }

  /** GET heroes from the server */
  getPersons(): Observable<Person[]> {
    const persons: Promise<Person[]> = PersonsStore.find<Person>();

    return from(persons)
  }

  addPerson(person: Person): Promise<Person> {
    return PersonsStore.save<Person>(person);
  }

  deletePerson(person: Person): Promise<object> {
    return PersonsStore.remove(person);
  }

  addCreatePersonListener(callback: (person: Person) => void) {
    PersonsStore.rt().addCreateListener(callback)
  }

  addUpdatePersonListener(callback: (person: Person) => void) {
    PersonsStore.rt().addUpdateListener(callback)
  }

  addDeletePersonListener(callback: (person: Person) => void) {
    PersonsStore.rt().addDeleteListener(callback)
  }

}
