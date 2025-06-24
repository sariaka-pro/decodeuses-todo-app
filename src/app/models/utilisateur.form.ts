import { FormControl } from "@angular/forms";

export interface Utilisateur {
    id: FormControl <number | null>;
    nom: FormControl <string | null>;
    prenom: FormControl <string | null>; 
    sexe: FormControl <string | null>;
}