import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { TodoService } from '../../../providers/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  constructor(public formBuilder:FormBuilder,public todo:TodoService){ 
    this.form = this.formBuilder.group({
      title:["",[Validators.required]],
      description:["",[Validators.required]]
    });
  }

  ngOnInit() {
  }
  
  submit(form){
    this.todo.addTodo(this.form.value);
    form.resetForm();
  }
  
}
