import React, { FC, PropsWithChildren, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface MainLayoutProp {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProp> = ({ children }) => {
  return (
    <SafeAreaView className="flex-1 bg-mainColor">{children}</SafeAreaView>
  );
};

export default MainLayout;
