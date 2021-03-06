// Browser module
import { BrowserModule } from '@angular/platform-browser';
// Angular Core module
import { NgModule } from '@angular/core';

// App's main component
import { AppComponent } from './app.component';

// Bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms' ;

// Routing
import { routing} from './app.routing';

// Stock Module
import { StocksComponent } from './stocks/stocks-component/stocks.component';
import { StocksService } from './stocks/stocks-service/stocks.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateStockModal } from './dashboard/create-stock-modal';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    DashboardComponent,
    CreateStockModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
