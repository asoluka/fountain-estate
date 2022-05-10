import React from "react";
import colors from "./colors";
import { MdLibraryBooks } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import ConversionView from "../assets/svg/ConversionView";
import { FaWindowClose, FaWineGlassAlt } from "react-icons/fa";
import AdvertisingWebsite from "../assets/svg/AdvertisingWebsite";
import { IoIosBed, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import AdvertisingMegaPhone from "../assets/svg/AdvertisingMegaPhone";
import Views from "../screens/Analytics/AnalyticsTabs/Conversion/Views";
import Wishlist from "../screens/Analytics/AnalyticsTabs/Conversion/Wishlist";
import ConversionReturningGuest from "../assets/svg/ConversionReturningGuest";
import NightRate from "../screens/Analytics/AnalyticsTabs/Occupancy/NightRate";
import ConversionBookingLeadTime from "../assets/svg/ConversionBookingLeadTime";
import Cancellation from "../screens/Analytics/AnalyticsTabs/Occupancy/Cancellation";
import LengthOfStay from "../screens/Analytics/AnalyticsTabs/Occupancy/LengthOfStay";
import BookingInsight from "../screens/Analytics/AnalyticsTabs/Conversion/BookingInsight";
import Performance from "../screens/Analytics/AnalyticsTabs/AdvertiseListings/Performance";
import BookingLeadTime from "../screens/Analytics/AnalyticsTabs/Conversion/BookingLeadTime";
import ReturningGuests from "../screens/Analytics/AnalyticsTabs/Conversion/ReturningGuests";
import OccupancyInsight from "../screens/Analytics/AnalyticsTabs/Occupancy/OccupancyInsight";
import AllCampaigns from "../screens/Analytics/AnalyticsTabs/AdvertiseListings/AllCampaigns";
import Contributors from "../components/pages/SettingsPage/settingsTabs/Payment/Contributors";
import Payments from "../components/pages/SettingsPage/settingsTabs/Payment/Payments";
import Payouts from "../components/pages/SettingsPage/settingsTabs/Payment/Payouts";
import Taxes from "../components/pages/SettingsPage/settingsTabs/Payment/Taxes";
import ContributorsIcon from "../assets/svg/contributors.svg";
import PaymentsIcon from "../assets/svg/payments.svg";
import PayoutsIcon from "../assets/svg/payouts.svg";
import TaxesIcon from "../assets/svg/taxes.svg";

export const SITE_OPTIONS_ANALYTICS_CONVERSIONS = [
  {
    id: "1",
    name: "Booking Insight",
    renderName: "booking-insight",
    component: <BookingInsight />,
    icon: (isActive) => (
      <MdLibraryBooks
        size={30}
        color={isActive ? colors?.THEME : colors?.BLACK}
      />
    ),
  },
  {
    id: "2",
    name: "Booking Lead time",
    component: <BookingLeadTime />,
    renderName: "booking-lead-time",
    icon: (isActive) => (
      <ConversionBookingLeadTime
        color={isActive ? colors?.THEME : colors?.BLACK}
      />
    ),
  },
  {
    id: "3",
    name: "Wishlist",
    renderName: "wishlist",
    component: <Wishlist />,
    icon: (isActive) =>
      isActive ? (
        <IoMdHeart size={30} color={colors?.THEME} />
      ) : (
        <IoMdHeartEmpty size={30} color={colors?.BLACK} />
      ),
  },
  {
    id: "4",
    component: <ReturningGuests />,
    name: "Returning Guests",
    renderName: "returning-guests",
    icon: (isActive) => (
      <ConversionReturningGuest
        color={isActive ? colors?.THEME : colors?.BLACK}
      />
    ),
  },
  {
    id: "5",
    name: "Views",
    component: <Views />,
    renderName: "views",
    icon: (isActive) => (
      <ConversionView color={isActive ? colors?.THEME : colors?.BLACK} />
    ),
  },
];

export const SITE_OPTIONS_ANALYTICS_ADVERTISING = [
  {
    id: "1",
    component: <Performance />,
    name: "Performance",
    renderName: "performance",
    icon: (isActive) => (
      <AdvertisingWebsite color={isActive ? colors?.THEME : colors?.BLACK} />
    ),
  },
  {
    id: "2",
    name: "All Campaigns",
    component: <AllCampaigns />,
    renderName: "all-campaigns",
    icon: (isActive) => (
      <AdvertisingMegaPhone color={isActive ? colors?.THEME : colors?.BLACK} />
    ),
  },
];

export const SITE_OPTIONS_ANALYTICS_OCCUPANCY = [
  {
    id: "1",
    name: "Occupancy Insight",
    renderName: "occupancy-insight",
    component: <OccupancyInsight />,
    icon: (isActive) => (
      <IoIosBed size={30} color={isActive ? colors?.THEME : colors?.BLACK} />
    ),
  },
  {
    id: "2",
    name: "Cancellation",
    component: <Cancellation />,
    renderName: "cancellation",
    icon: (isActive) => (
      <FaWindowClose
        size={30}
        color={isActive ? colors?.THEME : colors?.BLACK}
      />
    ),
  },
  {
    id: "3",
    name: "Night Rate",
    renderName: "night-rate",
    component: <NightRate />,
    icon: (isActive) => (
      <FaWineGlassAlt
        size={30}
        color={isActive ? colors?.THEME : colors?.BLACK}
      />
    ),
  },
  {
    id: "4",
    name: "Length of stay",
    renderName: "length-of-stay",
    component: <LengthOfStay />,
    icon: (isActive) => (
      <RiCalendar2Fill
        size={30}
        color={isActive ? colors?.THEME : colors?.BLACK}
      />
    ),
  },
];

export const SITE_OPTIONS_PAYMENT_SETTING = [
  {
    id: 2,
    name: "payments",
    renderName: "payments",
    component: <Payments />,
    icon: (isActive) => (
      <img className="w-5" src={PaymentsIcon} alt="payments icon" />
    ),
  },
  {
    id: 3,
    name: "payouts",
    renderName: "payouts",
    component: <Payouts />,
    icon: (isActive) => (
      <img className="w-5" src={PayoutsIcon} alt="payouts icon" />
    ),
  },
  {
    id: 4,
    name: "taxes",
    renderName: "taxes",
    component: <Taxes />,
    icon: (isActive) => (
      <img className="w-4" src={TaxesIcon} alt="taxes icon" />
    ),
  },
  {
    id: 1,
    name: "contributors",
    renderName: "contributors",
    component: <Contributors />,
    icon: (isActive) => (
      <img className="w-5" src={ContributorsIcon} alt="contributors icon" />
    ),
  },
];
