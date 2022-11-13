import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../types/currency';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  
  defaultCurrency = {
    r030: 0,
    txt: '',
    rate: 0,
    cc: '123',
    exchangedate: '',
  };

  @Input() USD: Currency = this.defaultCurrency;
  @Input() EUR: Currency = this.defaultCurrency;

  roundCurrency(money: number) {
    return (Math.ceil(money * 10000) / 10000)
  }

  inputControl = new FormControl(0, [Validators.required, Validators.min(0)]);
  selectControl = new FormControl(this.USD.rate);
  resultControl = new FormControl(0)

  onSelectChange(selectValue: number | null) {
    if (this.inputControl.value && selectValue) {
      this.resultControl.setValue(this.roundCurrency((this.inputControl.value * selectValue)));
    } else {
      this.resultControl.setValue(0);
    }
  }

  onResultChange(resultValue: number | null) {
    if (this.selectControl.value && resultValue) {
      this.inputControl.setValue(this.roundCurrency(resultValue / this.selectControl.value))
    }
  }

  onInputChange(resultValue: number | null) {
    if (resultValue && this.selectControl.value) {
      this.resultControl.setValue(this.roundCurrency((resultValue * this.selectControl.value)));

      if (resultValue < 0) {
        this.resultControl.setValue(0);
      }
    } else {
      this.resultControl.setValue(0);
    }
  }
}
