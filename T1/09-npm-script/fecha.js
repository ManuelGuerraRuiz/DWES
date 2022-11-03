import {DateTime} from 'luxon';

 const fechita = DateTime.now().toFormat("dd-MM-yyyy");
console.log(fechita);