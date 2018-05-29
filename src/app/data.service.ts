import { Injectable } from '@angular/core';
import { Observable, from, pipe } from 'rxjs';
import { delay, debounceTime } from 'rxjs/operators';

@Injectable()
export class DataService {

  public search(q: string) {

    return from([
      // mocking web api
      ['ahmad', 'maroun', 'gabi', 'micheal'].filter(x => x.includes(q))
    ]).pipe(delay(800));

  }

}
