import { CommonModule, Location } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'src/app/shared/card/card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
		CardModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	exports: [CreateNewsComponent]
  })
  export class CreateNewsModule { }
