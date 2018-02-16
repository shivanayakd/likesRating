import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-showcomment',
  templateUrl: './showcomment.component.html',
  styleUrls: ['./showcomment.component.css']
})
export class ShowcommentComponent implements OnInit {
  @Input() inpComment;
  @Output() like = new EventEmitter<any>();
  @Output() dislike = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
      console.log('test inp', this.inpComment);
  }

  private addLike() {
    this.like.emit();
  }
  private addDisLike() {
    this.dislike.emit();
  }

  private deleteComment() {
    this.delete.emit();
  }

}
