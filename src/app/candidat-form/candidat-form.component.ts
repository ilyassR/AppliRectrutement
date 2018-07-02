import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService, CandidatService } from '../_services/index';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css']
})
export class CandidatFormComponent implements OnInit {

  @Input() showMePartially: boolean;
  loading = false;
  model: any = {};

  myForm: FormGroup;

  /** Form controls to Writing shorter validation expressions in template */
  pseudo: FormControl;
  nom: FormControl;
  prenom: FormControl;
  email: FormControl;
  telephone: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  niveau: FormControl;
  compteStatus: FormControl;
  listTests: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private candidatService: CandidatService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.myForm.valueChanges.subscribe(val => console.log(val));
  }

  createFormControls() {
    this.pseudo = new FormControl('', [
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
    this.niveau = new FormControl('1'),
      this.compteStatus = new FormControl('true'),
      this.listTests = this.fb.group({ 'testJAVA': new FormControl('true'), 'testJEE': new FormControl('true') })
  }

  createForm() {
    this.myForm = new FormGroup({
      pseudo: this.pseudo,
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      password: this.password,
      confirmPassword: this.confirmPassword,
      niveau: this.niveau,
      compteStatus: this.compteStatus,
      listTests: this.listTests
    });
  }

  register() {
    this.loading = true;
    this.candidatService.create(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
