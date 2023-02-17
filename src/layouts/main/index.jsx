import React from "react";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <div>MainLayouts</div>
      <Outlet />
    </>
  );
};

export { MainLayouts };
