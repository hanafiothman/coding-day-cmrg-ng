import { CommonModule, Location } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-create-news',
	templateUrl: './create-news.component.html',
	styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

	createNewsForm!: FormGroup;

	constructor(private formBuilder: FormBuilder, private location: Location) {

	}

	ngOnInit(): void {
		this.createNewsForm = this.formBuilder.group({
			newsTitle: ['', Validators.required],
			newsImageUrl: [''],
			newsMessage: ['', Validators.required]
		});
	}

	submitNews(): void {
		// TODO
		console.log(this.createNewsForm.value);
	}

	goBack(): void {
		this.location.back();
	}
}

@NgModule({
	declarations: [CreateNewsComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule
	],
	exports: [CreateNewsComponent]
  })
  export class CreateNewsModule { }
