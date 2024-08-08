import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomeButtons from "../../components/CustomeButtons";
import { Link } from "expo-router";
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const onSubmit = () => {};
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full min-h-[83vh] justify-center px-6 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[155px] h-[35px]"
          />
          <Text className="text-2xl font-psemibold mt-10 text-white">
            Sign up to Aura
          </Text>
          <FormField
            title="Username"
            value={form.username}
            otherStyle="mt-10"
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            value={form.email}
            otherStyle="mt-7"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Password"
            value={form.password}
            otherStyle="mt-7"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <CustomeButtons
            title={"Sign up"}
            containerStyle={"mt-7"}
            handlePress={onSubmit}
            isLoading={isSubmiting}
          />
          <View className="justify-center pt-5 flex-row  gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already ?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-secondary-100"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
