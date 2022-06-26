import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateSchema =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body)
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.validated = validated;
      return next();
    } catch (error: any) {
      return res.status(400).json({ message: error.errors });
    }
  };
export default validateSchema;
