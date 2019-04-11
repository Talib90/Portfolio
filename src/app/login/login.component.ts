import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog} from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupclass = { 'col-12 col-sm-12 col-md-6 col-lg-6': true };
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {

  }
  ngOnInit() {
  }
  opensignup(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(SignupComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
