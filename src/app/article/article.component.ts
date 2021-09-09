import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Comment, User, UserService } from '../core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    // Retreive the prefetched article
    this.userService.currentUser.subscribe((userData: User) => {
      this.currentUser = userData;
    });
  }
}
