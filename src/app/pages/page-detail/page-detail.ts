import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { COURS, Cours } from '../../donnees/cours'; 
import { DetailCours} from '../../composants/detail-cours/detail-cours';
@Component({
  imports: [DetailCours, RouterLink],
  selector: 'app-page-detail',
  styleUrl: './page-detail.css',
  templateUrl: './page-detail.html',
})
export class PageDetail {
   @Input() id = ''; 
    get cours(): Cours | undefined {
       return COURS.find(c => c.id === Number(this.id)); 
    }
}
