import chalk from 'chalk';
import {DateTime} from 'luxon';

function horario() {
    if(DateTime.now().second === 0 || DateTime.now().second % 10 === 0){
        return DateTime.now().toFormat("dd-MM-yyyy") + " " + chalk.green(DateTime.now().toFormat("HH:mm:ss"));
    }else{
        return DateTime.now().toFormat("dd-MM-yyyy HH:mm:ss");
    }
}


setInterval(function () {console.log(horario())}, 1000);