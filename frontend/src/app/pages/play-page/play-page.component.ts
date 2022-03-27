import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {
  quiz : Quiz;
  isQuizSelected : Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  quizSelected(quiz : Quiz){
    this.quiz = quiz;
    this.router.navigate(['/play-quiz-page/' + quiz.id]);    
  }

}
