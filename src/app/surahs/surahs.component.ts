// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// interface Surah {
//   number: number;
//   englishName: string;
//   name: string;
//   numberOfAyahs: number;
//   // Add other properties as needed
// }
// @Component({
//   selector: 'app-surahs',
//   templateUrl: './surahs.component.html',
//   styleUrls: ['./surahs.component.css'],
// })
// export class SurahsComponent implements OnInit {
//   public surahs: any | null = null;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getData();
//   }

//   async getData() {
//     try {
//       const response = await this.http
//         .get<any>('http://api.alquran.cloud/v1/meta')
//         .toPromise();
//       this.surahs = response.data.surahs;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Surah {
  id: number;
  chapter_number: number;
  name: string;
  translated_name: {
    language_name: string;
    name: string;
  };
  revelation_order: number;
  revelation_place: string;
  verses_count: number;
  name_complex: string;
  name_simple:string
  name_arabic: string;
}

@Component({
  selector: 'app-surahs',
  templateUrl: './surahs.component.html',
  styleUrls: ['./surahs.component.css'],
})
export class SurahsComponent implements OnInit {
  public surahs: Surah[] | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      const response = await this.http
        .get<any>('https://api.quran.com/api/v4/chapters')
        .toPromise();
      this.surahs = response.chapters;
      console.log("morsy"+this.surahs)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

