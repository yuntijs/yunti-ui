/* eslint-disable no-console */

const nest = {
  nest: {},
};
nest.nest = nest;

export const largeJson = {
  string: 'string',
  number: 123_456,
  boolean: false,
  null: null,
  func: function () {
    console.log('function test');
  },
  Symbol: Symbol('JSON View'),
  url: 'https://botnow.cn',
  obj: {
    k1: 123,
    k2: '123',
    k3: false,
  },
  arr: ['string', 123_456, false, null],
  nest,
  largeArr: Array.from({ length: 699 }).fill('123.456'),
};
