import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService {
    
    private rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment",
        city:"New York",
        street:"Times Square",
        category: "apartment",
        image:"http://via.placeholder.com/350x250",
        bedrooms:3,
        description:"Very icey apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },{
        id: "2",
        title: "Upper Apartment",
        city:"Old York",
        street:"Street 1",
        category: "apartment",
        image:"http://via.placeholder.com/350x250",
        bedrooms:2,
        description:"Very icey apartment",
        dailyRate: 53,
        shared: false,
        createdAt: "25/12/2017"
      },{
        id: "3",
        title: "new Apartment",
        city:"Berlin",
        street:"Kuhdamm",
        category: "condo",
        image:"http://via.placeholder.com/350x250",
        bedrooms:25,
        description:"Very big apartment",
        dailyRate: 102,
        shared: true,
        createdAt: "25/12/2017"
      },{
        id: "4",
        title: "Apartment4",
        city:"4th city",
        street:"Street4",
        category: "house",
        image:"http://via.placeholder.com/350x250",
        bedrooms:7,
        description:"none",
        dailyRate: 1,
        shared: false,
        createdAt: "24/12/2017"
      }];

    /**
     * getRentalById
     */
    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer) => {
        setTimeout(() => {
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId;
          });

          observer.next(foundRental);
        }, 500);
      });
    }

    /**
     * getRentals
     */
    public getRentals(): Observable<Rental[]> {
      
      return new Observable<Rental[]>((observer) => {
        
        setTimeout(() => {
          observer.next(this.rentals);
        },1000);

      });
      
    }
        
  } 