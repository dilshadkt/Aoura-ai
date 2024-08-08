import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  otherStyle,
  placeholder,
  value,
  handleChangeText,
  ...props
}) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100  items-center flex-row rounded-2xl border-2 border-black-200">
      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        value={value}
        onChange={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5 "
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
