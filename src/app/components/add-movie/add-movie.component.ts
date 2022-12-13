import { Component, OnInit, NgZone } from '@angular/core';
import { MovieService } from '../../movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
	movieForm: FormGroup;
	ngOnInit() {
		this.addMovie();
	}
	constructor(
		public fb: FormBuilder,
		private ngZone: NgZone,
		private router: Router,
		public movieService: MovieService
	) {}
	addMovie() {
		this.movieForm = this.fb.group({
			nome: [''],
			sinopse: [''],
			ano: [''],
			rank: [''],
		});
	}
	submitForm() {
		this.movieService.CreateMovie(this.movieForm.value).subscribe((res) => {
			console.log('Movie added!');
			this.ngZone.run(() => this.router.navigateByUrl('/list'));
		});
  }
}
