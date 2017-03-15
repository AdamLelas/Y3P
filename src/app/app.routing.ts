import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component'; 
import { InputConsumptionComponent } from './input-consumption/input-consumption.component';
import { FoodJournalComponent } from './food-journal/food-journal.component'; 

export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "BMI", component: BmiCalculatorComponent },
    { path: "Calendar", component: CalendarComponent },
    { path: "Journal", component: FoodJournalComponent },
    { path: "Input", component: InputConsumptionComponent }    
];
 
export const AppComponents: any = [
    HomeComponent,
    BmiCalculatorComponent,  
    CalendarComponent,
    FoodJournalComponent,
    InputConsumptionComponent
];