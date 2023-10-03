import { Router } from "express";

export default interface ApiRestModel{
  register(routerApi: Router): void
}