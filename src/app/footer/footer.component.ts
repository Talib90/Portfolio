import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookSquare, faGoogle, faLinkedin, faInstagram, faFacebookF, faGooglePlus } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  

  constructor() {
    library.add(fas);
    library.add(faTwitter);
    library.add(faFacebookSquare);
    library.add(faGoogle);
    library.add(faLinkedin);
    library.add(faInstagram);
    library.add(faFacebookF);
    library.add(faGooglePlus);
   }

  ngOnInit() {
  }

}
