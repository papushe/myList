/**
 * Created by papushe on 16/06/2017.
 */
 export class AllData2 {

     order_num: Number;
     title: String;
     status: String;
     language: String;
     runtime: String;
     details: String;
     country: [String];
     genres: [String];
     stars: [String];
     year: {
       start: Number,
       released: Number
     };

   constructor() {}
 }
