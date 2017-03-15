import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';


/*
import { InputConsumptionComponent } from './input-consumption/input-consumption.component';
import { FoodJournalComponent } from './food-journal/food-journal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { HomeComponent } from './home/home.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
