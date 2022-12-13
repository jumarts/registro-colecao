import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MovieService } from './movie.service';

@NgModule({
	declarations: [
		AppComponent,
		AddMovieComponent,
		EditMovieComponent,
		ListMovieComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
        FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [
		MovieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
