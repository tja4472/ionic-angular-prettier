import { Component } from '@angular/core';

// tslint:disable-next-line:no-submodule-imports
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// tslint:disable-next-line:no-submodule-imports
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      icon: 'home',
      title: 'Home',
      url: '/home',
    },
    {
      icon: 'list',
      title: 'List',
      url: '/list',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
