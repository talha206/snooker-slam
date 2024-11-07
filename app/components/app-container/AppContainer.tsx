import React, { useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { Colors } from "../../../constants/Colors";

import { PlayerRouteNames } from "@/app/navigations-map/player";
import { CoreRouteNames } from "@/app/navigations-map/core";
import { ClubOwnerRouteNames } from "@/app/navigations-map/club-owner";

import CoreNavigator from "@/app/components/navigators/CoreNavigator";
import ClubOwnerNavigator from "@/app/components/navigators/ClubOwnerNavigator";
import PlayerNavigator from "@/app/components/navigators/PlayerNavigator";

import { selectCurrentUser, selectStatus, fetchMe } from "./appContainerSlice";
import { setClubName } from "../screens/auth/club-owner/club-name-screen/clubNameSlice";
import { setClubOwnerName } from "../screens/auth/club-owner/club-owner-name-screen/clubOwnerNameSlice";
import { setPhoneNo } from "../screens/auth/club-owner/owner-contact-screen/ownerContactSlice";
import { clearAccessToken } from "../screens/auth/club-owner/club-verification-pin-screen/clubVerificationPinSlice";
import { resetResponseData } from "../screens/auth/club-owner/club-owner-pin-setup-screen/clubOwnerPinSetUpSlice";
import { setShouldSubmitToServer } from "../screens/auth/club-owner/club-verification-pin-screen/clubVerificationPinSlice";

import {
  KeyForStorage,
  retriveData,
} from "@/app/utils/storage_utils/storageUtils";

export const AppContainer: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  const retrieveTokenFromStorageIfAny = useCallback(async () => {
    const token = await retriveData(KeyForStorage.accessToken);

    if (token) {
      dispatch(fetchMe());
    }
  }, [dispatch]);

  useEffect(() => {
    retrieveTokenFromStorageIfAny(); // see if its already logged in, then retrieve token to redirect later
  }, [retrieveTokenFromStorageIfAny]);

  useEffect(() => {
    if (currentUser) {
      dispatch(setClubName(""));
      dispatch(setClubOwnerName(""));
      dispatch(setPhoneNo(""));
      dispatch(clearAccessToken());
      dispatch(resetResponseData());
      dispatch(setShouldSubmitToServer(false));
    }
  }, [currentUser, dispatch]);

  return (
    <GestureHandlerRootView style={styles.gestureStyle}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          {status === "idle" && !currentUser && (
            <CoreNavigator initialRouteName={CoreRouteNames.GettingStarted} />
          )}
          {currentUser?.role?.name === "player" && (
            <PlayerNavigator initialRouteName={PlayerRouteNames.PlayerHome} />
          )}
          {currentUser?.role?.name === "club_owner" && (
            <ClubOwnerNavigator initialRouteName={ClubOwnerRouteNames.Home} />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureStyle: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
