import { body, validationResult, type ValidationChain, type ValidationError } from 'express-validator';
import type { Request, Response, NextFunction } from 'express';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    return res.status(400).json({
        error: 'Validation Error',
        details: errors.array().map((err: ValidationError) => ({
            param: err,
            message: err.msg
        }))
    });
};

export const signupValidation: ValidationChain[] = [
    body('email', 'Por favor, inclua um email válido')
        .isEmail()
        .normalizeEmail(),

    body('password', 'A senha deve ter 8 ou mais caracteres')
        .isLength({ min: 8 })
];

export const signinValidation: ValidationChain[] = [
    body('email', 'Por favor, inclua um email válido')
        .isEmail(),

    body('password', 'A senha é obrigatória')
        .exists()
];
