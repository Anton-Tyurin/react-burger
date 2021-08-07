import { ProfileContentUser } from "./profile-content-user";
import style from "../profile.module.css";
import { useLocation } from "react-router-dom";
import { ProfileContentOrderPage } from "./profile-content-order-page";
import React from "react";
import { TLocation } from "../../../types/types";

export function ProfileContentLayout() {
  const location = useLocation<TLocation>();

  const getProfilePage = () => {
    if (location.pathname === "/profile") {
      return <ProfileContentUser />;
    } else {
      return <ProfileContentOrderPage />;
    }
  };
  return (
    <div className={`${style.profileContentWrapper}`}>{getProfilePage()}</div>
  );
}
