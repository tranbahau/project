import {HttpClient,} from '@angular/common/http';
import {Component, OnInit,} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl,} from '@angular/forms';
import {Router,} from '@angular/router';
import {SystemConstant,} from '../const/system-const';
import {ValidateConstant,} from '../const/validate-const';
import {MessagesService,} from '../service/messages.service';
import {UserInfo,} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',],
})
export class LoginComponent implements OnInit {
  loginMainForm!: FormGroup;
  status!: string;
  userInfo!: UserInfo;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messagesService: MessagesService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginMainForm = this.fb.group({
      userId: new FormControl('', [Validators.required,]),
    });
  }

  validateInput(formControlName: string): void {
    if (this.loginMainForm.get(formControlName)?.invalid) {
      this.status = ValidateConstant.REQUIRED_USERNAME;
    }
  }

  clear(): void {
    this.loginMainForm.setErrors(null);
    this.status = SystemConstant.EMTY;
  }

  login(): void {
    this.userInfo = new UserInfo();
    const userId = this.loginMainForm.controls['userId'].value;
    this.httpClient.post('http://localhost:3000/authenticate', userId).subscribe((data) => {
      console.log(data);
    });
  }
}
