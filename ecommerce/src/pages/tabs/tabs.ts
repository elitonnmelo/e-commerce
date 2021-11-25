import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { Home1Page } from '../home1/home1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  //tab1Root = Home1Page;


  constructor() {

  }
}
