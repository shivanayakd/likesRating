import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  private slectedUser;
  private users = [
    { name : 'dshiva', email : 'asef@gsr.com'},
    { name : 'Sharat chandra', email : 'asef@gsr.com'},
    { name : 'Basant tech', email : 'asef@gsr.com'},
    { name : 'Vinod', email : 'asef@gsr.com'}
  ];

  private comments = [
    {time : '2/16/2018, 8:48:04 AM',
     name: 'Sharat chandra',
      comment: 'lorem sdfg sdrt esart werat ewrt ewrt ewrt r3',
       likes : 2,
        dislikes: 5},
  ];
  constructor() { }

  ngOnInit() {
  }
  
  private addComment(comm, name) {
    console.log('tetttttt', comm, this.slectedUser);
    this.comments.unshift({time: this.getTime(), name: this.slectedUser, comment: comm, likes: 0, dislikes: 0});
  }

  private getTime() {
    return new Date().toLocaleString();
  }

  private updateLike(i) {
    this.comments[i].likes += 1;
  }

  private updateDislike(i) {
    this.comments[i].dislikes += 1;
  }

  private deleteComment(i) {
    this.comments.splice(i,1);
  }
}
