import { Injectable } from '@angular/core';

import { QUESTIONS } from './mock-questions';
import { Question } from './question';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuestions(): Question[] {
    return QUESTIONS;
  }
}
