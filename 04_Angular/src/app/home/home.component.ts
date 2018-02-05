import { Component } from '@angular/core';

@Component({
    selector: 'af-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent { 
    discount = 10; // To be interpolated.
}