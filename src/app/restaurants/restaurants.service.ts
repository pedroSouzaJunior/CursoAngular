import { Restaurant } from './restaurant/restaurant.model';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {}

  obterRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
                    .map(Response => Response.json())
                    .catch(ErrorHandler.handleError);
  }

    obterRestaurantePorId(id: string): Observable<Restaurant> {
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
                      .map(Response => Response.json())
                      .catch(ErrorHandler.handleError);
    }

    reviewsDoRestaurant(id: string): Observable<any> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
                      .map(Response => Response.json())
                      .catch(ErrorHandler.handleError);
    }

    menuDoRestaurant(id: string): Observable<MenuItem[]> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
                      .map(Response => Response.json())
                      .catch(ErrorHandler.handleError);
    }
}
