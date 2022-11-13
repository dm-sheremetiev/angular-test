import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/types/currency';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css']
})
export class CurrencyHeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  defaultCurrency = {
    r030: 0,
    txt: '',
    rate: 0,
    cc: '',
    exchangedate: '',
  };

  @Input() USD: Currency = this.defaultCurrency
  @Input() EUR: Currency = this.defaultCurrency
}
