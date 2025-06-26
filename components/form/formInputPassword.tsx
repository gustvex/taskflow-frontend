import { useState } from "react";
import { Input } from "@/components/ui/input";
import * as FormComponents from "@/components/ui/form";

import { JSX } from "react";
import { formLabelAndSubLabel } from "../inputs/fromLabel";
import { formHelpText } from "../inputs/formHelpText";
import { formMessage } from "../inputs/formMessage";
import { Eye, EyeClosed } from "lucide-react";

interface Props {
    control: any;
    name: string;
    label: string;
    subLabel?: string;
    helpText?: JSX.Element;
    placeholder?: string;
    maxLength?: number;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInputPassword: React.FC<Props> = ({
    control,
    name,
    label,
    subLabel,
    helpText,
    placeholder,
    maxLength,
    className,
    disabled,
    required,
    inputRef,
    onKeyUp,
    onChange,
}) => {
    const { FormField, FormItem, FormLabel, FormControl, FormMessage } = FormComponents;
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field, formState }) => (
                <FormItem className={className}>
                    <div className="flex items-center space-x-1.5">
                        {label && formLabelAndSubLabel(FormLabel, label, subLabel, required)}
                        {helpText && formHelpText(helpText)}
                    </div>
                    <FormControl>
                        <div className="relative">
                            <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                maxLength={maxLength}
                                placeholder={placeholder}
                                disabled={disabled || formState.isSubmitting}
                                value={field.value || ""}
                                onKeyUp={(e) => onKeyUp && onKeyUp(e)}
                                onChange={(e) => {
                                    field.onChange(e);
                                    onChange && onChange(e);
                                }}
                                ref={inputRef}
                                className="pr-10" 
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                tabIndex={-1}
                                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                            >
                                {showPassword ? <EyeClosed size={16} /> : <Eye size={16}/>}
                            </button>
                        </div>

                    </FormControl>
                    {formMessage(FormMessage)}
                </FormItem>
            )}
        />
    );
};
