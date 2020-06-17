export interface Answer {
    answer: string;
    true: boolean;
}


export interface Question {
    id: number;
    question: string;
    answers: Array<Answer>;
}
