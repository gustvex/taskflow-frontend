import { ComponentType } from "react";

type FormMessageComponent = ComponentType<{ className?: string }>;

const formMessage = (FormMessage: FormMessageComponent) => {
    return <FormMessage className="text-red-600 mt-1" />;
};

export { formMessage };
