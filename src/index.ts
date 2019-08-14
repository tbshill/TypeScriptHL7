import { ACC } from './segments';
const test_ACC = "ACC|||||||||||||||";
const acc = new ACC();
acc.fromString(test_ACC);
console.log(acc.toString());