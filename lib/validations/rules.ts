import { z } from "zod";


export const requiredString = (message = "Campo obrigatório") =>
    z.string({ required_error: message }).nonempty(message);
