import React from "react";
import { TextInputProps, View } from "react-native";
import { forwardRef } from "react";
import { AuthTextInputLabel, AuthTextInput } from "../styles/auth.style";

export interface inputProps extends TextInputProps {
  label: string;
}

const BaseStyle = ({ label, ...rest }: inputProps, ref: any) => {
  return (
    <View>
      <AuthTextInputLabel>{label}</AuthTextInputLabel>
      <AuthTextInput ref={ref} {...rest} />
    </View>
  );
};

export const Input = forwardRef(BaseStyle);
