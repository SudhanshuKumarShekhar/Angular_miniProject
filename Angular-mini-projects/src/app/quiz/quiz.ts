import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  questions =[
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
      answer: 'Harper Lee'
    }
  ];

  currentIndex = signal(0);
  score = signal(0);
  finished = signal(false);

  currentQuestion =  () => this.questions[this.currentIndex()];

  answer(option: string) {
    if (option === this.currentQuestion().answer) {
      this.score.update (score => score + 1);
    }
    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.set(this.currentIndex() + 1);
    } else {
      this.finished.set(true);
    }
  }

  reset() {
    this.currentIndex.set(0);
    this.score.set(0);
    this.finished.set(false);
  }
}
