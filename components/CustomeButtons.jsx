import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomeButtons = ({
  title,
  textStyle,
  containerStyle,
  isLoading,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary min-h-[62px] rounded-xl justify-center items-center
        ${isLoading ? "opacity-50" : ""} ${containerStyle}`}
    >
      <Text className={`${textStyle} text-primary font-semibold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomeButtons;
