import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material';
import { ProductComponent } from '../product/product.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class HomeComponent implements OnInit {

  //images = [1, 2, 3].map(() => `https://picsum.photos/844/140?random&t=${Math.random()}`);
  images = {
    0 : "https://laz-img-cdn.alicdn.com/images/ims-web/TB17ZlcQBLoK1RjSZFuXXXn0XXa.jpg_1200x1200.jpg",
    1 : "https://laz-img-cdn.alicdn.com/images/ims-web/TB1XgxmQrvpK1RjSZFqXXcXUVXa.jpg_2200x2200Q100.jpg_.webp",
    2 : "https://laz-img-cdn.alicdn.com/images/ims-web/TB14JFmQBLoK1RjSZFuXXXn0XXa.jpg_2200x2200Q100.jpg_.webp"
  }
  popularclass = { 'col-6 col-sm-6 col-md-4 popular-container': true };
  popularitems;
  products;
  malls;
  selectedIndex = -1;
  constructor(private dataobj: DataService , private snackBar: MatSnackBar, private dialog: MatDialog) {

    //GET - HTTPClient returns the result in Observable
    //GET Data Products at data.service
    this.dataobj.getProduct().subscribe((response) => {
      this.products = response;
    });

    // GET data Popular item at data.service
    this.dataobj.getPopularitem().subscribe((response) => {
      this.popularitems = response;
    });

    // GET data Shop item at data.service
    this.dataobj.getShopdetail().subscribe((response) => {
      this.malls = response;
    });

  }

  ngOnInit() {
  }
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 409), behavior: 'smooth' });
  }
  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 409), behavior: 'smooth' });
  }
  mouseHovering(i) {
    this.selectedIndex = i;
  }
  mouseLeft(i) {
    this.selectedIndex = -1;
  }
  openSnackBar(message: string, action: string,className: string) {
    message = "Add To Cart"
    action = "X"
    className = "snackbar"
    this.snackBar.open(message, action, {
      duration: 500,
      verticalPosition: 'bottom',
      horizontalPosition : 'right',
      panelClass: [className]
    });
  }
  productDetail(id): void {
    const dialogRef = this.dialog.open(ProductComponent, {
      data : { id : id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
