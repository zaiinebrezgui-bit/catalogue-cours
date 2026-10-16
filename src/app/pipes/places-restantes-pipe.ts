import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(places:number, seuil:number=5): string {
    if(places==0){
      return "complet";
    }
    else if(places==1){
      return "Derniere place!";
    }
    else if(places<=seuil){
      return "plus que "+places+" places";
    }
    else{
      return places+" places dispnibles";
    }
  }
}
