import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ayat',
  templateUrl: './ayat.component.html',
  styleUrls: ['./ayat.component.css'],
})
export class AyatComponent implements OnInit {


  id: any;
main:any;
  pages: any[] = [];
  currentSwar: any[] = [];
  pageNumber: number = 0;
  allpagesdata:any[] = [];
  filteredSurahNames: any[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getData();
    });
  }

  async getData() {
    try {
      const data = await this.http
        .get(`https://api.quran.com/api/v4/chapters/${this.id}`)
        .toPromise();
      this.main = data;
      this.pages = [];
      this.currentSwar = [];

      for (
        let i = this.main.chapter.pages[0];
        i <= this.main.chapter.pages[1];
        i++
      ) {
        const pageData = await this.http
          .get(
            `https://api.quran.com/api/v4/quran/verses/indopak?page_number=${i}`
          )
          .toPromise();
        this.pages.push(pageData);

      }

      this.allpagesdata = this.pages;

      const currentSurahKeys :any[]=[];
      this.allpagesdata.forEach((item) => {
        item.verses.forEach((verse: any) => {
          if (
            parseInt(verse.verse_key.split(':')[0]) > parseInt(this.id) ||
            parseInt(verse.verse_key.split(':')[0]) < parseInt(this.id) ||
            parseInt(verse.verse_key.split(':')[0]) === parseInt(this.id)
          ) {
            currentSurahKeys.push(verse.verse_key.split(':')[0]);
          }
        });
      });
      const uniqueSurahKeys = [...new Set(currentSurahKeys)];
      const surahNamesPromises = uniqueSurahKeys.map(async (key) => {
        const chapterResponse = await this.http
          .get(`https://api.quran.com/api/v4/chapters/${key}`)
          .toPromise();

           return chapterResponse;
      });
      const surahNames = await Promise.all(surahNamesPromises);
      this.currentSwar=surahNames;
      this.currentSwar.map((item)=>{
        console.log(item.chapter)
      })



    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  }
  

  isNewSurah(item: any, index: number): boolean {
    return (
      index === 0 ||
      item.verse_key.split(':')[0] !==
        this.pages[this.pageNumber].verses[index - 1].verse_key.split(':')[0]
    );
  }

  setPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  SplitText(text: string): string[] {
    return text.split(/[\uE001\u06DD\u200Fۙۢ]/g);
  }
  parseInt(value: string): number {
    return parseInt(value);
  }
}
