import { Request, Response} from 'express';

class Examplecontroller 
{ 
    async helloWord (req: Request, res: Response)
    {
        return res.send('Hello Typescript');
        
    }
}

export { Examplecontroller }; 
