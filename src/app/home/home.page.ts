
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pageTitle ?: string;
  pageContent?: string;

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.loadPageData();
  }

  loadPageData() {
    const pageId = 17215;
    const apiUrl = `https://chouettebalade.fr/wp-json/wp/v2/pages/${pageId}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.pageTitle = data.title.rendered;
      this.pageContent = data.content.rendered;
    });
  }
}





//
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// interface PageData {
//   title: { rendered: string };
//   content: { rendered: string };
// }
//
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
//   pageTitle?: string;
//   pageContent?: string;
//
//   constructor(private http: HttpClient) {}
//
//   ionViewDidEnter() {
//     this.loadPageData();
//   }
//
//   loadPageData() {
//     const apiUrl = 'https://chouettebalade.fr/wp-json/wp/v2/pages?slug=home';
//
//     this.http.get<PageData[]>(apiUrl).subscribe((data: any) => {
//       if (data.length > 0) {
//         this.pageTitle = data[0].title.rendered;
//         this.pageContent = data[0].content.rendered;
//       }
//     });
//   }
// }


