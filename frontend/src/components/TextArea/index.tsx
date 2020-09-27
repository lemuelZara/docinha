import React, { useRef, TextareaHTMLAttributes, useState, useCallback, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
}

const TextArea: React.FC<ITextAreaProps> = ({
    name,
    ...rest
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, registerField } = useField(name);

    const handleTextareaFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleTextareaBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!textareaRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <>
            <Container isFocused={isFocused} isFilled={isFilled}>
                <textarea
                    onFocus={() => handleTextareaFocus()}
                    onBlur={() => handleTextareaBlur()}
                    defaultValue={defaultValue}
                    ref={textareaRef}
                    {...rest}
                />
            </Container>
        </>
    );
}

export default TextArea;