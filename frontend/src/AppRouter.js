/* eslint-disable import/prefer-default-export */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginController from "./Authorization/core/LoginController";
import RegistrationController from "./Authorization/core/RegistrationController";
import { Header } from "./MainPage/Header";
import { HomePage } from "./MainPage/HomePage";
import { OfferPage } from "./Offers/OfferPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
        index
          path={"/home"}
          element={
            <div className="z-global-position">
              <Header />
              <HomePage/>
            </div>
          }
        />
        <Route
        index
          path={"/offer"}
          element={
            <div className="z-global-position">
              <Header />
              <OfferPage/>
            </div>
          }
        />
        <Route
          path={"/login"}
          element={
            <div className="z-global-position">
              <Header />
              <LoginController/>
            </div>
          }
        />
         <Route
          path={"/registration"}
          element={
            <div className="z-global-position">
              <Header />
              <RegistrationController/>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};
