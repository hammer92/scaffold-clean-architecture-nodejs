import APIService from "./infrastructure/driver-adapters/express/APIService";
function hello():void {
   APIService.run()
}

hello()