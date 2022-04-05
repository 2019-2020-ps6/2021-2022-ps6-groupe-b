import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Category} from '../models/category.model';
import {CATEGORY_LIST} from '../mocks/categories-list.mock';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private categories: Category[] = CATEGORY_LIST;

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public categories$: BehaviorSubject<Category[]>
    = new BehaviorSubject(this.categories);

  public categorySelected$: Subject<Category> = new Subject();

  constructor() {
  }
}
