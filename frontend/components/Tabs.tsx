import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { twMerge } from "tailwind-merge";
import ContactList from "./ContactList";

const Tabs = () => {
  // State to keep track of the currently selected tab
  const [activeTab, setActiveTab] = useState(0);

  // Dummy data for tabs and their respective content
  const tabs = [
    { title: "Contacts", content: "Content for Tab 1" },
    { title: "Groupts", content: "Content for Tab 2" },
  ];

  return (
    <View className="mt-12">
      <View className="flex flex-row items-center ">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveTab(index)}
            className={twMerge(
              "flex-1 items-center p-2",
              index === activeTab && "border-b  border-b-white"
            )}
          >
            <Text
              className={twMerge(
                "text-white font-Poppins text-lg font-bold transition duration-500"
              )}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <ContactList />
    </View>
  );
};

export default Tabs;
