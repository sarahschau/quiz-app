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
  activeQuestion = 0;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questions = this.quizService.getQuestions();
  }

}
