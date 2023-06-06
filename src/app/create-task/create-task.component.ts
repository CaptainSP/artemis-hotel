import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  public taskForm = this.fb.group({
    title: [''],
    description: [''],
  });

  public submit() {
    const firebase_url = 'https://fcm.googleapis.com/fcm/send';

    const headers = {
      Authorization:
        'key=AAAA_w6PNM8:APA91bFTgx2w0jjylQiBGJUYHqGBHEXH2DL0Tx_3sRAmFXLkBBAUIgyonvt59k1o6xogWsS4kMbYQ2y7E-zet9sYdvKSzj4oCm1ZBOv0D3pMH3G3FZ37IihaDOkhLDK8J-ANS9WBFBSY', //SERVER API KEY -> Konsoldan aldık
      'Content-Type': 'application/json',
    };

    const fields = {
      to: '/topics/1',
      notification: {
        title: this.taskForm.get('title')?.value,
        body: this.taskForm.get('description')?.value,
        sound: 'default',
      },
      data: {
        tit: this.taskForm.get('title')?.value,
        bod: this.taskForm.get('description')?.value,
        lin: 'https://captainsp.github.io',
      },
    };

    // post

    this.http
      .post<any>(firebase_url, fields, {
        headers: headers,
      })
      .subscribe((data) => {
        this.openSnackBar();
      });
  }

  openSnackBar() {
    this._snackBar.open('Task has been created successfully!', 'Close', {
      duration: 5000,
    });
  }
}
