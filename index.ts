import './style.css';

import { of, map, Observable, range, Subject } from 'rxjs';
import { ISlots } from './interfaces';
import { tap } from 'rxjs/operators';

//generate slots
const slots$ = range(1, 100)
  .pipe(
    map(
      (i) =>
        <ISlots>{
          value: `key${i}`,
          position: {
            top: `${i}rem`,
            left: `${i}rem`,
          },
          next: `key${i + 1}`,
        }
    )
  );

  const activePlayer$ = new Subject<number>();
  const 