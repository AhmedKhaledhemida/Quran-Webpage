import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.css']
})
export class HomesearchComponent {
  query: string = '';
  surahName: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  async searchSurah() {
    try {
      const response = await this.http.get<any>('https://api.quran.com/api/v4/chapters').toPromise();
      const surahs = response.chapters;

      let foundSurah = false;
      for (const surah of surahs) {
        if (surah.name_simple.toLowerCase().includes(this.query.toLowerCase())) {
          foundSurah = true;
          this.surahName = surah.name_simple;
          break;
        }
      }

      if (!foundSurah) {
        this.errorMessage = "Surah not found";
      } else {
        this.errorMessage = '';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.errorMessage = 'Error fetching data';
    }
  }
}
