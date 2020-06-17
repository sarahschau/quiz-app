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
  questionCount: number;
  buttonIsEnabled = false;


  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
    this.setActiveQuestion();
    this.questionCount = this.questions.length;
  }

  incrementQuestionIdx(): void {
    this.questionIdx++;
    this.setActiveQuestion();
    this.buttonIsEnabled = false;
  }

  setActiveQuestion(): void {
    this.activeQuestion = this.questions[this.questionIdx];
  }

  getQuestions(): void {
    this.questions = this.quizService.getQuestions();
  }

  enableNavigation(): void {
    this.buttonIsEnabled = true;
  }

}
