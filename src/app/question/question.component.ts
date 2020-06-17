import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
    console.log(this.question);
  }

}
