import React from "react";
import style from "./profile.module.css";
import { ProfileMenu } from "./profile-menu";
import { ProfileContentLayout } from "./profile-content/profile-content-layout";

export function ProfilePageLayout() {
  return (
    <div className={style.profileWrapper}>
      <ProfileMenu />
      <ProfileContentLayout />
    </div>
  );
}
