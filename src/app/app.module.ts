import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;

  ngOnInit(){
    this.promesa = this.conPromise('Promise');
    this.observable = this.conObservable('Observable');
  }
  conPromise(value: string): Promise<string>{
    return new Promise((resolve, reject)=> {
      setTimeout(() => resolve(value),4000)
    })
  }
  conOberservable(value: string): Observable<string>{
    return of(value).pipe(delay(3000));
  }
} 