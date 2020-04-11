import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';

const numbers = new NumbersCollection([1000, 300, 6, -22]);
const string = new CharCollection('CbADz');
numbers.sort();
string.sort();

console.log(numbers.data);
console.log(string.data);