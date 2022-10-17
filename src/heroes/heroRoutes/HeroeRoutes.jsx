import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { HeroesProvider } from "../context/HeroesProvider";
import { HeroByPublisherPage } from "../pages/HeroByPublisherPage";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";
export const HeroeRoutes = () => {
  return (
    <>
       <HeroesProvider>

      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="/:publisher" element={<HeroByPublisherPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
        </Routes>
      </div>
       </HeroesProvider> 
    </>
  );
};
