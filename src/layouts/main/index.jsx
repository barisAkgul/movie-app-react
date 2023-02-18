import React from "react";

import * as S from "./styles";

import { Main } from "components/main";
import { Sidebar } from "components/sidebar";

const MainLayouts = () => {
  return (
    <S.MainLayout>
      <Sidebar />
      <Main />
    </S.MainLayout>
  );
};

export { MainLayouts };
