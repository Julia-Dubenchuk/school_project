export interface Teacher {
    id: string;
    name: string;
    lastName: string;
    age: number;
    sex: Sex;
    yearsOfExperience: number;
    workedInUniversities: boolean;
    canTeachSubjects: [Subject];
    lessons: [];
    classrooms: [];
};

export interface Lesson {
    id: string;
    subject: Subject;
    id_teacher: string;
    day_week: DaysWeek;
    time: string;
    studentsGroupId: string;
};

export interface Classroom {
    id: string;
    number: number;
    id_lesson: string;
};

export enum Subject {
    Biology = "Biology",
    Math = "Math",
    Physics = "Physics",
    Chemistry = "Chemistry",
    Literature = "Literature"
};

export enum Sex {
    Male = "Male",
    Female = "Female",
    Intersex = "Intersex"
};

export enum DaysWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday", 
    Thursday = "Thursday",
    Friday = "Friday"
}