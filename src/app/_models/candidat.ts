import { Questionnaire } from './questionnaire';

export class Candidat {
    id: number;
    pseudo: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
    confirmPassword: string;
    niveau: number;
    compteStatus: boolean;
    tests: boolean[];
}