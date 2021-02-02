export interface Teacher {
    id: string;
    name: string;
    last_name: string;
    age: number;
    sex: Sex;
    years_of_experience: number;
    worked_in_universities: boolean;
    can_teach_subjects: [Subject];
    lessons: [];
    classrooms: [];
};

export interface Lesson {
    id: string;
    subject: Subject;
    id_teacher: string;
    day_week: DaysWeek;
    time: string;
    students_group_id: string;
};

export interface Classroom {
    id: string;
    number: number;
    id_lesson: string;
};

export enum Subject {
    Biology = "biology",
    Math = "math",
    Physics = "physics",
    Chemistry = "chemistry",
    Literature = "literature"
};

export enum Sex {
    Male = "male",
    Female = "female",
    Intersex = "intersex"
};

export enum DaysWeek {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday", 
    Thursday = "thursday",
    Friday = "friday"
};
