export enum ProjectStatus {
    Active,
    Finished
}
export default class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: string,
        public status: ProjectStatus
    ) {}
}