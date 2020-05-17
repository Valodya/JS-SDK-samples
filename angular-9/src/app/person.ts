import Backendless from 'backendless'

export interface Person {
  objectId?: string;
  name: string;
}

export const PersonsStore = Backendless.Data.of('Persons');
