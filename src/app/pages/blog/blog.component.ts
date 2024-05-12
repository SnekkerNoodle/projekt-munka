import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FlexLayoutModule, MatButtonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  topic = new FormControl('', []);
  comment = new FormControl('', []);

  commentForm: FormGroup = new FormBuilder().group(
    {topic:this.topic, comment:this.comment}
);

  onSubmit(){
    const data = localStorage.getItem("blog");
    if (data) {
        localStorage.setItem(
            "blog",
            JSON.stringify([
                ...JSON.parse(data),
                {
                  topic: this.topic,
                  comment: this.comment,
                },
            ]),
        );
    } else {
      localStorage.setItem(
        "blog",
        JSON.stringify([
            {
              topic: this.topic,
              comment: this.comment,
            },
        ]),
    );
    }
  }
}
