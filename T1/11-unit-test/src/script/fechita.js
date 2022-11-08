import { DateTime } from "luxon";

function fechita(fecha1, fecha2) {
  let fechaActual = DateTime.now().toFormat("dd/MM/yyyy");

  if (fecha1 < fecha2) {
    let fecha = {
      fechaInicio: fecha1,
      fechaFinal: fecha2,
    };
    return console.log(fecha);
  } else if (fecha1 > fecha2) {
    let fecha = {
      fechaInicio: fecha2,
      fechaFinal: fecha1,
    };
    return console.log(fecha);
  } else if (fecha1 == fecha2) {
    return console.log("Las fechas son iguales");
  } else if (fecha2 == null) {
    if (fecha2 > fechaActual) {
      return console.log(fecha1, fechaActual);
    } else {
      return console.log(fechaActual, fecha1);
    }
  }
}
fechita("19/11/2022");