import { useRef, useState, type RefObject } from "react";
import { TextInput, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface OTPInputProps {
  codes: string[] | undefined[];
  setCodes: React.Dispatch<React.SetStateAction<string[] | undefined[]>>;
  isSubmit: boolean;
}

export function OTPInput({ codes, setCodes, isSubmit }: OTPInputProps) {
  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      const newCodes = text.split("");
      setCodes(newCodes);
      refs[3]!.current?.focus();
      return;
    }
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes as string[]);
    if (text !== "" && index < 3) {
      refs[index + 1]!.current?.focus();
    }
  };

  return (
    <View className="flex w-full items-center  flex-row gap-4">
      {codes.map((code, index) => (
        <TextInput
          key={index}
          autoComplete="one-time-code"
          enterKeyHint="next"
          className={twMerge(
            `text-md h-[48] w-[48] rounded-lg  border text-white border-white px-2 py-1 text-center focus:border focus:border-[#fff] `,
            isSubmit &&
              [0, 1, 2, 3]
                .slice(codes.filter((e) => e).length)
                .includes(index) &&
              "border-red-500"
          )}
          inputMode="numeric"
          placeholder={(index + 1).toString()}
          placeholderTextColor={"rgba(255,255,255,0.5)"}
          onChangeText={(text: string) => onChangeCode(text, index)}
          value={code}
          maxLength={1}
          ref={refs[index]}
          onKeyPress={({ nativeEvent: { key } }) => {
            if (key === "Backspace" && index > 0) {
              refs[index - 1]!.current!.focus();
              onChangeCode("", index - 1);
            }
          }}
        />
      ))}
    </View>
  );
}
