import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  // ao final de uma variável do tipo observable é comum colocar o sinal de $
  loading$: Observable<boolean> = this.loadingSubject.asObservable()

  hide():void{
    this.loadingSubject.next(false)
  }

  show(): void{
    this.loadingSubject.next(true)
  }
}
