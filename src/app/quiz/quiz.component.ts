import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

import { Question } from '../question';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: Question[];
  activeQuestion: Question;
  questionIdx = 0;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
    this.setActiveQuestion();
  }

  incrementQuestionIdx(): void {
    this.questionIdx++;
    this.setActiveQuestion();
  }

  setActiveQuestion(): void {
    this.activeQuestion = this.questions[this.questionIdx];
  }

  getQuestions(): void {
    this.questions = this.quizService.getQuestions();
  }

}
