import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Question } from '../question';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  @Output() updateQuestion: EventEmitter<any> = new EventEmitter<any>();
  @Input() question: Question;
  isAnswerTrue: boolean;
  result: string;
  questionIsAnswered = false;
  clickedAnswer: number;

  ngOnInit(): void {
    this.isAnswerTrue = null;
    this.result = null;
    this.clickedAnswer = null;
    this.questionIsAnswered = false;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.questionIsAnswered = false;
  }

  getResult(): string {
    if (this.isAnswerTrue) {
      return 'Correct';
    } else if (this.isAnswerTrue === false) {
      return 'Incorrect';
    }
    return '';
  }

  getResultClass(answer): string {
    if (answer.answer === this.clickedAnswer) {
      if (this.questionIsAnswered && answer.true) {
        return 'question__answer--green';
      } else if (this.questionIsAnswered  && !answer.true) {
        return 'question__answer--red';
      } else {
        return '';
      }
    }
    if (this.questionIsAnswered) {
      if (answer.true) {
        return 'question__answer--green-light';
      }
    }
  }


  onSelect(answer): void {
    this.clickedAnswer = answer.answer;
    this.questionIsAnswered = true;
    answer.true === true ? this.isAnswerTrue = true : this.isAnswerTrue = false;
    this.updateQuestion.emit(answer);

  }


}
