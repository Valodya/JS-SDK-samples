'use strict'; // necessary for es6 output in node

import { browser, by, ElementFinder } from 'protractor';

const expectedH1 = 'Backendless JS-SDK';
const expectedTitle = `${expectedH1}`;

describe('Tutorial part 6', () => {

  beforeAll(() => browser.get(''));

  describe('Initial page', () => {

    it(`has title '${expectedTitle}'`, () => {
      expect(browser.getTitle()).toEqual(expectedTitle);
    });

  });

});
