import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {SearchService} from '../search.service';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Cemetery } from '../cemetery';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  
  //в целом все фигня но пытался
  //сложно это делать без теста особенно без хорошего понимания как это работает
  //но хоть что-то сделал 
  //точнее что смог то сделал
  //надо сервак наладить у меня или удаленный сделать для всех
  //и мне интересно как долго я буду всю эту фигню делать с поиском
  //1) надо страницу результатов
  //2) каким-то образом соорудить поиск для каждого без засирания однотипными компонентами
  // не думал что фронтенд может быть настолько сложен
  // особенно когда не можешь найти нормального руководства на русском
  // а то основное руководство какое-то не полное
  // и описывает повидение ситстемы в лабороторных условиях
  // а описание апи явно сделано для тех кто понимает что да как в этой теме
  // походу надо идти кричать свободная касса

  found$: Observable<Cemetery[]>

  cemetery: Cemetery;

  open: boolean = false;
  close: boolean = true;

  //found$: Observable<any[]>;
  private searchTerms = new Subject<string>();


  constructor(private searchService: SearchService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  onFocus(){
    this.open = !this.open
  }


  ngOnInit() {

    this.found$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchService.getSearch(term)),
    );
  }

}
