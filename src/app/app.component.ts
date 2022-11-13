import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './types/currency';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpClient
  ) { }
  
    ngOnInit() {
      this.getCurrencies().subscribe(allCurrencies => {
        this.USD = allCurrencies.find(currency => currency.cc === 'USD') || this.defaultCurrency;
        this.EUR = allCurrencies.find(currency => currency.cc === 'EUR') || this.defaultCurrency;
      })
    }

  title = 'currency-app';

  currencies: Currency[] = [];

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }

  defaultCurrency = {
    r030: 0,
    txt: '',
    rate: 0,
    cc: '',
    exchangedate: '',
  };

  USD = this.defaultCurrency
  EUR = this.defaultCurrency
}
