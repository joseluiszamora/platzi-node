import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [ QuestionService ]
})
export class QuestionDetailComponent implements OnInit {
  question?: Question;
  loading: boolean;
  sub: any;

  constructor (
    private questionService: QuestionService,
    private route: ActivatedRoute
  ){}

  ngOnInit () {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.questionService.getQuestion(params.id).then((question: Question) =>{
        this.question = question;
        console.log(this.question);
        this.loading = false;
      });
    });
    console.log(this.question);
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }
}
