"use strict";
var App;
(function (App) {
    var ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    var Project = (function () {
        function Project(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
        return Project;
    }());
    App.Project = Project;
})(App || (App = {}));
var App;
(function (App) {
    var person = {
        name: "Darrius"
    };
    console.log(person);
    new App.Project("01", "My new Project", "A eventful project", "Darrius", App.ProjectStatus.Active);
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map