import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemConstant } from '../const/system-const';
import { ValidateConstant } from '../const/validate-const';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginMainForm!: FormGroup;
  status!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.loginMainForm = this.fb.group({
      userId: new FormControl('', [Validators.required,])
    });
  }

  validateInput(formControlName: string): void {
    if(this.loginMainForm.get(formControlName)?.invalid) {
      this.status = ValidateConstant.REQUIRED_USERNAME;
    }
  }

  clear(): void {
    this.loginMainForm.setErrors(null);
    this.status = SystemConstant.EMTY;
  }

  login(): void {
    const userId = this.loginMainForm.controls['userId'].value;
    if(userId) {
      this.messagesService.show('Successfull! Welcome back ' + userId)
      this.router.navigate(['/homepage']);
    }
  }
}
