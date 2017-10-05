import { Component, OnInit } from '@angular/core';
import { MyLykkeService } from '../my-lykke.service';

@Component({
  selector: 'app-my-lykke-news',
  templateUrl: './my-lykke-news.component.html',
  styleUrls: ['./my-lykke-news.component.scss']
})
export class MyLykkeNewsComponent implements OnInit {

  public news: Array<any>;
  public hideShowMore: boolean;
  public loadNews: boolean;

  constructor(private myLykkeService: MyLykkeService) {
    this.hideShowMore = false;
    this.loadNews = false;
    this.news = [];
  }

  ngOnInit() {

    this.myLykkeService.lykkeNews.subscribe(news => {
      this.hideShowMore = this.news.length === news.length;
      this.news = news;
      this.loadNews = false;
    });
  }

  loadMore() {
    this.loadNews = true;
    const skip = this.news.length;
    this.myLykkeService.getLkkNews(skip);
  }
}
