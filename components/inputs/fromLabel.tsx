import { ComponentType } from "react";

type FormLabelProps = {
    className?: string;
    children?: React.ReactNode;
};

type FormLabelComponent = ComponentType<FormLabelProps>;

const formLabel = (FormLabel: FormLabelComponent, label: string) => {
    return (
        <FormLabel className=" font-medium text-sm h-5">
            {label}
        </FormLabel>
    );
};

const formLabelAndSubLabel = (
    FormLabel: FormLabelComponent,
    label: string,
    subLabel?: string,
    required?: boolean
) => {
    return (
        <div className="flex flex-col pb-2">
            <div className="flex gap-1">
                {formLabel(FormLabel, label)}
                {required && (
                    <FormLabel className="text-red-600 font-medium text-sm">*</FormLabel>
                )}
            </div>
            {subLabel && (
                <FormLabel className="font-normal pt-1">
                    {subLabel}
                </FormLabel>
            )}
        </div>
    );
};

export { formLabel, formLabelAndSubLabel };
