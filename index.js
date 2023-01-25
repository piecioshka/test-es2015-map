'use strict';

// Create instance of structure
const literalObject = {};
const mapConstructor = new Map();

debugger; // stop to check states

// Add something data
literalObject.foo = 123;
mapConstructor.set('foo', 123);

debugger; // stop to check states

// Update
literalObject.foo = 456;
mapConstructor.set('foo', 456);

debugger; // stop to check states

// Get value by key
const g1 = literalObject.foo;
const g2 = mapConstructor.get('foo');

debugger; // stop to check states

// Check that key is exists
const s1 = Boolean(literalObject.foo);
const s2 = mapConstructor.has('foo');

debugger; // stop to check states

// Remove
delete literalObject.foo;
mapConstructor.delete('foo');

debugger; // stop to check states
