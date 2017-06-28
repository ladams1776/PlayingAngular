import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StocksComponentComponent } from './stocks-component/stocks-component.component';
import { StockDirectiveDirective } from './stock-directive.directive';

import { HighlightDirective } from './highlight.directive';


import { StockService} from './stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponentComponent,
    StockDirectiveDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
