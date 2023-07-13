import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ApiInterceptor } from '../api/api-interceptor';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,

		// Angular Material modules
		MatToolbarModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
