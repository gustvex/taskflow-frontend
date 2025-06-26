import { Input } from '@/components/ui/input';
import * as FormComponents from '@/components/ui/form';
import { JSX } from 'react';
import { formMessage } from '../inputs/formMessage';
import { formLabelAndSubLabel } from '../inputs/fromLabel';
import { formHelpText } from '../inputs/formHelpText';


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

export const FormInputText: React.FC<Props> = ({
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

    return (
        <FormField
            control={control}
            name={name}
            render={({ field, formState }) => (
                <FormItem className={className}>
                    <div className='flex items-center space-x-1.5'>
                        {label && formLabelAndSubLabel(FormLabel, label, subLabel, required)}
                        {helpText && formHelpText(helpText)}
                    </div>
                    <FormControl>
                        <Input
                            {...field}
                            maxLength={maxLength}
                            placeholder={placeholder}
                            disabled={disabled || formState.isSubmitting}
                            value={field.value || ''}
                            onKeyUp={(e) => {
                                if (onKeyUp) {
                                    onKeyUp(e);
                                }
                            }}
                            ref={inputRef}
                        />
                    </FormControl>
                    {formMessage(FormMessage)}
                </FormItem>
            )}
        />
    );
};
