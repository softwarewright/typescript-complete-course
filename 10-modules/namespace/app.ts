// import namespaces
/// <reference path="person.ts" />
/// <reference path="project-model.ts" />


/**
 * Ensure each file using the namespaces has its dependencies required.
 */

namespace App {
    const person: Person = {
        name: "Darrius"
    }

    console.log(person)

    new Project("01", "My new Project", "A eventful project", "Darrius", ProjectStatus.Active);
} 
