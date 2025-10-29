import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Templates from "@/pages/Templates";
// import RequestTemplate from "@/pages/RequestTemplate";
import AddTemplate from "@/pages/AddTemplate";
import EditTemplatePage from "@/pages/EditTemplatePage";
import RequestTemplateForm from "@/pages/RequestTemplate";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="templates">
            <Route index element={<Templates />} />
            <Route path="edit" element={<EditTemplatePage />} />
          </Route>
          <Route path="request" element={<RequestTemplateForm />} />
          <Route path="add" element={<AddTemplate />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
