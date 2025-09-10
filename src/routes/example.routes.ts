import { Router } from "express";
import { Examplecontroller } from '../controllers/example.controllers';


const exampleRoutes: Router = Router();
const examplecontroller = new Examplecontroller();

exampleRoutes.get ('/hello-word', examplecontroller.helloWord);
exampleRoutes.get ('/test-error', examplecontroller.testerror);

export { exampleRoutes};
