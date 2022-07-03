import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  constructor(
    private snackBar: MatSnackBar
  ) {}

  show(messages: string) {
    this.snackBar.open(messages, 'close', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
