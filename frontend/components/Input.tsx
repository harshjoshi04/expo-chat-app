import React, { forwardRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { twMerge } from "tailwind-merge";

interface InputProps extends TextInputProps {
  Icons?: React.ReactNode;
  border?: string;
}

const InputField = forwardRef<TextInput, InputProps>(
  ({ Icons, border, ...prop }, ref) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="my-2 w-full">
            <View
              className={twMerge(
                `flex flex-row justify-center items-center relative  rounded-2xl border border-neutral-300 w-full focus:border-primary-100 `,
                border
              )}
            >
              {Icons && (
                <View className="absolute left-3 bottom-3">{Icons}</View>
              )}
              <TextInput
                ref={ref} // Forward the ref to TextInput
                className={twMerge(
                  "rounded-full p-3  font-Poppins text-[15px] flex-1 text-white text-left"
                )}
                {...prop}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
);

export default InputField;
