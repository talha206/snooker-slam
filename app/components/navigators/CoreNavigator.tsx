import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CoreRoutes } from "@/app/navigations-map/core";
const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

const CoreNavigator = ({ initialRouteName }: { initialRouteName: string }) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {CoreRoutes.map((route) => (
        <Stack.Screen
          key={route.title}
          name={route.title}
          component={route.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CoreNavigator;
