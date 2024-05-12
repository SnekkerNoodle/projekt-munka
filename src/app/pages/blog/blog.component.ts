import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DatabaseService } from '../../database.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FlexLayoutModule, MatButtonModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  topic = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);

  commentForm: FormGroup = new FormBuilder().group(
    {topic:this.topic, comment:this.comment}
);

tomb: any[] | undefined;

constructor(private database: DatabaseService){
  this.tomb = database.getMessages() 
}

  onSubmit(){
    const message = {topic: this.topic.value!,
      comment: this.comment.value!}
      this.database.upload2(message);
  }
}