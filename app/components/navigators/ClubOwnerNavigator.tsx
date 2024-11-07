import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClubOwnerRoutes } from "@/app/navigations-map/club-owner";
const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

const ClubOwnerNavigator = ({
  initialRouteName,
}: {
  initialRouteName: string;
}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {ClubOwnerRoutes.map((route) => (
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

export default ClubOwnerNavigator;
