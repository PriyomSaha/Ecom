import * as React from 'react';
import { textField } from '@nativescript/core';

interface TextFieldProps {
  hint: string;
  value: string;
  onTextChange: (value: string) => void;
  secure?: boolean;
  keyboardType?: 'email' | 'phone' | 'text';
}

export function TextField({ 
  hint, 
  value, 
  onTextChange, 
  secure = false,
  keyboardType = 'text' 
}: TextFieldProps) {
  return (
    <textField
      hint={hint}
      text={value}
      secure={secure}
      keyboardType={keyboardType}
      onTextChange={(args) => onTextChange(args.value)}
      className="w-4/5 p-4 mb-4 border rounded-lg"
    />
  );
}