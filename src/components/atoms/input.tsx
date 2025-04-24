import { Description, Field, Input as InputUi, Label, Select } from '@headlessui/react';
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { cn } from '@/utils/tw';

export type FormFieldProps<T extends FieldValues> = {
    type: string;
    label: string;
    fieldName: Path<T>;
    register: UseFormRegister<T>;
    children?: React.ReactNode;
    selectOptions?: { lable: string; value: string }[];
    options?: RegisterOptions<T, Path<T>> | undefined;
    error: FieldError | undefined;
    required?: boolean;
    placeholder?: string;
    fieldClasses?: string;
    labelClasses?: string;
    inputClasses?: string;
};

export const Input = <T extends FieldValues>({
    type,
    label,
    fieldName,
    register,
    options,
    selectOptions,
    children,
    error,
    required,
    placeholder = '',
    fieldClasses = '',
    labelClasses = '',
    inputClasses = ''
}: FormFieldProps<T>) => {
    return (
        <Field
            className={cn(
                'form_field flex w-full flex-col gap-2 p-2',
                type === 'checkbox' && 'flex-row-reverse items-baseline',
                type === 'checkbox' && 'justify-end',
                fieldClasses
            )}>
            <Label className={cn(labelClasses)}>
                {label} {required && <span className='form_field_required'>*</span>} {children}
            </Label>
            {type === 'select' ? (
                <div className='relative'>
                    <Select
                        className={cn(
                            'block w-full appearance-none px-3 py-1.5',
                            'form_input',
                            'focus-visible:!border-button-accent focus-visible:!border-2',
                            inputClasses
                        )}
                        data-isrequired={required}
                        {...register(fieldName, { ...options })}>
                        {selectOptions?.map((selectOption) => (
                            <option value={selectOption?.value} key={selectOption?.value}>
                                Active
                            </option>
                        ))}
                    </Select>
                    <i
                        className='fa fa-chevron-down group pointer-events-none absolute top-2.5 right-2.5 size-4'
                        aria-hidden='true'
                    />
                </div>
            ) : (
                <InputUi
                    className={cn('form_input', inputClasses)}
                    type={type}
                    placeholder={placeholder}
                    data-isrequired={required}
                    {...register(fieldName, { ...options })}
                />
            )}
            {error && <Description className={'text-primary -mt-1.5'}>{error.message}</Description>}
        </Field>
    );
};
