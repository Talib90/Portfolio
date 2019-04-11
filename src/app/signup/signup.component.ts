import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA ,MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupclass = { 'col-12 col-sm-12 col-md-6 col-lg-6': true };
  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     }
  onNoClick(): void {
    this.dialogRef.close();
  }
  save(){
    
  }
  ngOnInit() {
  }
  openlogin(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
