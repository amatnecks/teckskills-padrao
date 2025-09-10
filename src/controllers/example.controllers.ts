import { error } from 'console';
import { Request, Response} from 'express';

class Examplecontroller 
{ 
    async helloWord (req: Request, res: Response)
    {
        return res.send('Hello Typescript');
        
    }


    testerror(req: Request, res: Response)
    {

                throw new Error ('Teste de erro');
    }
}

export { Examplecontroller }; 
