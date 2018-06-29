import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css']
})
export class CandidatFormComponent implements OnInit {

  @Input() showMePartially: boolean;

  myForm: FormGroup;

  /** Form controls to Writing shorter validation expressions in template */
  pseudo: FormControl;
  nom: FormControl;
  prenom: FormControl;
  email: FormControl;
  telephone: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.myForm.valueChanges.subscribe(val => console.log(val));
  }

  createFormControls() {
    this.pseudo = new FormControl('',[
        Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      );
      this.nom = new FormControl('', [ 
            Validators.required]);
      this.prenom = new FormControl(
        '', [Validators.required]
      );
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
        ]);
      this.telephone = new FormControl('', [
        Validators.pattern("[\+]?[0-9]+")
        ]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
        ]);
      this.confirmPassword = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myForm = new FormGroup({
      pseudo: this.pseudo,
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

}
