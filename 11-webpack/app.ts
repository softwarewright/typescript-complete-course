import Person from './person'
import Project, {ProjectStatus} from './project-model';

const person: Person = {
    name: "Darrius"
}
console.log(person);
const project = new Project("01", "My new Project", "A eventful project", "Darrius", ProjectStatus.Active);

console.log(project);