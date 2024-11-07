import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayerRoutes } from "@/app/navigations-map/player";
const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

const PlayerNavigator = ({
  initialRouteName,
}: {
  initialRouteName: string;
}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {PlayerRoutes.map((route) => (
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

export default PlayerNavigator;
