import { LinearGradient } from "expo-linear-gradient";
import React, { forwardRef, PropsWithChildren } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";

interface ButtonProp extends PropsWithChildren, TouchableOpacityProps {
  textClass?: string;
  LinerClass?: string;
}

const Button = forwardRef<TouchableOpacity, ButtonProp>((props, ref) => {
  const { onPress, children, className, textClass, LinerClass, ...rest } =
    props;

  return (
    <LinearGradient
      colors={["#448976", "#95EDC5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      //   end={{ x: 0, y: 0.0 }}
      className={twMerge("p-4 px-24 w-100 rounded-full", LinerClass)}
    >
      <TouchableOpacity
        ref={ref} // Forward the ref to the TouchableOpacity
        onPress={onPress}
        className={twMerge(
          `bg-gradient-to-r to-[#448976] from-[#95EDC5]   flex justify-center items-center`
        )}
        {...rest} // Spread the rest of the props
      >
        <Text className={twMerge("font-Poppins ", textClass)}>{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
});

export default Button;
