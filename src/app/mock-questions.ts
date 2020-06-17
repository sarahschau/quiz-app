import { Question } from './question';

export const QUESTIONS: Question[] = [
  { id: 1, question: 'Was ist die Hauptstadt von Österreich', answers: [
      {answer: 'Wien', true: true},
      {answer: 'Linz', true: false},
      {answer: 'Wien', true: false}
    ]},
  { id: 2, question: 'Was ist die Hauptstadt von Niederlande', answers: [
      {answer: 'Rotterdam', true: false},
      {answer: 'Amsterdam', true: true},
      {answer: 'Den Haag', true: false},
    ] }
];
