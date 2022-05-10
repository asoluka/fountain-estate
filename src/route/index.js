import * as React from "react";
import {
  Car,
  Chat,
  Feeds,
  Login,
  Profile,
  Error404,
  Analytics,
  Adventure,
  Apartment,
  CarStepper,
  EditProfile,
  Verification,
  CreateListing,
  AnalyticsTabs,
  NestedOptions,
  ApartmentStepper,
  AdventureStepper,
  AnalyticsDetailScreen,
  AnalyticsCreateAdvertisingListing,
} from "../screens";
import { Routes, Route } from "react-router-dom";
import {
  BookingsPage,
  BookingDetailsPage,
  ListingsPage,
  ListingDetailsPage,
  TripsPage,
  TripDetailsPage,
  Cleaning,
  WishListPage,
  SettingsPage,
} from "../components";
import SettingsTabs from "../components/pages/SettingsPage/settingsTabs";
import NestedPaymentSettings from "../components/pages/SettingsPage/settingsTabs/Payment/NestedPaymentSettings";

const AppRoutes = () => {
  return (
    <div className="w-full flex flex-1 flex-col">
      <Routes>
        <Route exact path="/" element={<Feeds />} />
        <Route exact path="chat" element={<Chat />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="verification" element={<Verification />} />
        <Route exact element={<Profile />} path="profile" />
        <Route exact element={<EditProfile />} path="profile/edit" />
        <Route exact path="listings" element={<ListingsPage />} />
        <Route
          exact
          path="listings/create-listing"
          element={<CreateListing />}
        />
        <Route
          exact
          path="listings/edit/:type/:id/:step"
          element={<ListingDetailsPage />}
        />
        <Route element={<Apartment />} path="listings/create-listing/apartment">
          <Route path=":step" element={<ApartmentStepper />} />
        </Route>
        <Route element={<Car />} path="listings/create-listing/car">
          <Route element={<CarStepper />} path=":step" />
        </Route>
        <Route element={<Adventure />} path="listings/create-listing/adventure">
          <Route element={<AdventureStepper />} path=":step" />
        </Route>
        <Route
          exact
          path="booking/details/:id"
          element={<BookingDetailsPage />}
        />
        <Route exact path="bookings" element={<BookingsPage />} />
        <Route exact path="wishlists" element={<WishListPage />} />
        <Route exact path="trips" element={<TripsPage />} />
        <Route exact path="trip/details/:id" element={<TripDetailsPage />} />
        <Route exact path="calendar" element={<Error404 name="Calendar" />} />
        <Route
          exact
          path="analytics/advertise-listings/performance/create-listing"
          element={<AnalyticsCreateAdvertisingListing />}
        />
        <Route path="analytics" element={<Analytics />}>
          <Route element={<AnalyticsTabs />} path=":tab">
            <Route element={<NestedOptions />} path=":sideoption" />
            <Route
              path=":sideoption/listing-detail/:id"
              element={<AnalyticsDetailScreen />}
            />
          </Route>
        </Route>
        <Route exact path="cleaning" element={<Cleaning />}></Route>
        <Route path="settings" element={<SettingsPage />}>
          <Route path=":tab" element={<SettingsTabs />}>
            <Route element={<NestedPaymentSettings />} path=":sideoption" />
          </Route>
        </Route>
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
