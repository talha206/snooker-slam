import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BaRoutes } from "@/app/navigations-map/brand-ambassador/index.config";

const Stack = createNativeStackNavigator(); 

const BaNavigator = ({
  initialRouteName,
}: {
  initialRouteName: string;
}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {BaRoutes.map((route) => (
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

export default BaNavigator;
