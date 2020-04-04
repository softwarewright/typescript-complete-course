"use strict";
var App;
(function (App) {
    const person = {
        name: "Darrius"
    };
    console.log(person);
    new App.Project("01", "My new Project", "A eventful project", "Darrius", App.ProjectStatus.Active);
})(App || (App = {}));
//# sourceMappingURL=app.js.map