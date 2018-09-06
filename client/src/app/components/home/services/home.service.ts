import { HomeRestService } from "./home.rest.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService{
    constructor(private homeRestService: HomeRestService){}


    public getHomeList(){
        return this.homeRestService.getHomeList()
        .subscribe(data =>{
            console.log(data)
            return data;
        })
    }
}