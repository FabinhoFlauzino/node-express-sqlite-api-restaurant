import {Response, Request, NextFunction} from 'express';
import { AppError } from '../utils/app-error';

class ProductsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try { 
            return response.json({message: 'OK'});
        } catch (error) {
            next(error);
        }
    }
}

export { ProductsController };