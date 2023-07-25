import { Component } from '@angular/core';
import { delay, forkJoin, map, of, tap, Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Uso de observables
class users {

  obtenerUsuario () {

    return Observable.of([{name: 'Facundo'}])
    // uso del map
    .map((users) => users[0])
    // uso del catch
    .catch((error) => Observable.throw(error));
  }
}

///////////////////////////////

let usersObservable = users.obtenerUsers();

usersObservable.suscribe(
  (result) => {
    console.log(result);
  },
  (error) =>{
    console.log(error);
  }
);

export class NamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    
  }
}

// Uso del ForkJoin

const obs1$ = of(['Facundo','Martin','Josefina']).pipe(delay(4000));
const obs2$ = of(['001','002','003']).pipe(delay(6000))

// uso de APi

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

forkJoin([
obs1$,
obs2$

]).subscribe({
  next: (nombres, orden) => {
      this.nombres = nombres;
      this.orden = orden
  },
  complete: () => (this.loading = false)
})
export class AppComponent {
  title = 'AngularReactive';
}