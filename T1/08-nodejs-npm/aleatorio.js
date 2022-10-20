import {faker} from '@faker-js/faker';
import chalk from 'chalk';

let firstName = faker.name.firstName();
let colorAlatorio = faker.color.rgb();
console.log(chalk.hex(colorAlatorio)(firstName));



