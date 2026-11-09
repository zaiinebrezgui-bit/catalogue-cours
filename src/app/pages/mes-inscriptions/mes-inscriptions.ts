import { Component, inject } from '@angular/core';
import { Session } from '../../services/session';
@Component({
  selector: 'app-mes-inscriptions',
  templateUrl: './mes-inscriptions.html',
  styleUrl: './mes-inscriptions.css',
})
export class MesInscriptions {
  session = inject(Session);
}
