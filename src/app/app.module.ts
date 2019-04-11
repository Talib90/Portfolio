import 'hammerjs'
import 'mousetrap'

//Important Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule,MatSnackBarModule,MatProgressBarModule,MatAutocompleteModule,MatInputModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule ,MatFormFieldModule} from '@angular/material';
import { RouterModule , Routes} from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalGalleryModule } from 'angular-modal-gallery';

//Import Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ImageComponent } from './image/image.component';

// Import Services
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';

// Set Router Array 
const appRoutes:Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'navbar',
    component : ImageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProductComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatDialogModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [DataService],
  entryComponents : [SignupComponent,LoginComponent,ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }
