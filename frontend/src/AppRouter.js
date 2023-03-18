/* eslint-disable import/prefer-default-export */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginController from "./Authorization/core/LoginController";
import { Header } from "./MainPage/Header";
import { HomePage } from "./MainPage/HomePage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path={"/home"}
          element={
            <div className="z-global-position">
              <Header />
              <HomePage/>
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
      </Routes>
    </>
  );
};
