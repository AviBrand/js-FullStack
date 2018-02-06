import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { YearSlogenPipe } from './shared/pipes/year-slogen.pipe';
import { ColoredDirective } from './shared/directives/colored.directive';
import { SeasonDirective } from './shared/directives/season.directive';
import { CategoriesService } from './shared/services/categories.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsService } from './shared/services/products.service';

@NgModule({

    imports: [
		BrowserModule,
		FormsModule // Importing FormsModule for using the ngModel in the Two-Way binding.
	],

    declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent, 
        YearSlogenPipe,
		ColoredDirective,
		SeasonDirective,
		ProductListComponent
	],

    providers: [
		CategoriesService,
		ProductsService
	],
    
    bootstrap: [AppComponent]
})
export class AppModule { }