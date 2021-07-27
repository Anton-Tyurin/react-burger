import { ProfileContentUser } from "./profile-content-user";
import { ProfileContentOrders } from "./profile-content-orders";
import style from "../profile.module.css";
import { useLocation } from "react-router-dom";
import { ProfileContentOrderPage } from "./profile-content-order-page";
import React from "react";

export function ProfileContentLayout() {
  const location = useLocation();

  const getProfilePage = () => {
    if (location.pathname === "/profile") {
      return <ProfileContentUser />;
    } else if (location.pathname === "/profile/order-item") {
      return <ProfileContentOrders />;
    } else {
      return <ProfileContentOrderPage />;
    }
  };
  return (
    <div className={`${style.profileContentWrapper}`}>{getProfilePage()}</div>
  );
}
