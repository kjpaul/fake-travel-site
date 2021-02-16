import '../styles/styles.css';
import Person from './modules/Person';

if (module.hot) {
    module.hot.accept()
}

/* Lesson example code */

let john = new Person ("John Doe", "red");
john.greet();

let jane = new Person ("Jane Smith", "green");
jane.greet();
