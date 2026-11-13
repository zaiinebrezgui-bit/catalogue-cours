import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { Cours } from '../../donnees/cours'; 
import { DetailCours} from '../../composants/detail-cours/detail-cours';
import { inject } from '@angular/core';
import { Catalogue } from '../../services/catalogue';
@Component({
  imports: [DetailCours, RouterLink],
  selector: 'app-page-detail',
  styleUrl: './page-detail.css',
  templateUrl: './page-detail.html',
})
export class PageDetail {
   @Input() id = '';
   private catalogue = inject(Catalogue);
   get cours(): Cours | undefined {
      return this.catalogue.trouver(Number(this.id));
   }
}
