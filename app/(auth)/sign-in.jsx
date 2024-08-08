import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomeButtons from "../../components/CustomeButtons";
import { Link, router } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const onSubmit = () => {
    router.replace("/home");
  };
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
            Log in to Aura
          </Text>
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
            title={"Sign in"}
            containerStyle={"mt-7"}
            handlePress={onSubmit}
            isLoading={isSubmiting}
          />
          <View className="justify-center pt-5 flex-row  gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an acoount ?
            </Text>
            <Link
              href={"/sign-up"}
              className="text-lg font-psemibold text-secondary-100"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
