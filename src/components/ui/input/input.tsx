import { type FC, type ChangeEvent, type InputHTMLAttributes, useId } from "react";
import { IconComponentMap } from "../../icons/icons";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    icon?: string;
}

const Input: FC<InputProps> = ({
    type = "text",
    id,
    placeholder = "",
    required = false,
    onChange,
    disabled = false,
    className = "",
    icon = "",
    ...props
}) => {

    const autoId = useId();
    const inputId = id || autoId;

    const Icon = icon ? IconComponentMap[icon] : null;

    return (
        <div className="group">
            {placeholder && (
                <label htmlFor={inputId} className="nmims-input-label">
                    {placeholder}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                <input
                    type={type}
                    id={inputId}
                    required={required}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`nmims-input ${className}`}
                    {...props}
                />
                {Icon && (
                    <div className="icon">
                        <Icon />
                    </div>
                )}
            </div>
        </div>
    );

}

export default Input;
