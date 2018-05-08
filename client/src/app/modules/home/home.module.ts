import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
    ],
    declarations: [
        HomeComponent,
    ],
    bootstrap: [
        HomeComponent,
    ],
})

export class HomeModule {
}
