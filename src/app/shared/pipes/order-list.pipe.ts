import { Pipe, PipeTransform } from '@angular/core';

import { TrackModel } from '@core/models/track.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: any[], field: string | null = null, sort: string = 'asc'): TrackModel[] {  
    try {
      if(field === null){
        return value;
      } else {
        const tmpList = value.sort((a, b) => {
          if(a[field] < b[field]){
            return -1;
          } else if(a[field] === b[field]){
            return 0;
          } else if(a[field] > b[field]){
            return 1;
          }
          return 1;
        });
        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }
    } catch (e) {
      console.log('Algo pagó');
      return value;  
    }
  }

}
