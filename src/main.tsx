import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router";

import GalleryLayout from "./layouts/GalleryLayout.tsx";
import PageLayout from "./layouts/PageLayout.tsx";

import Index from "./routes/_index.tsx";
import About from "./routes/about.tsx";

import IllustrationGallery from "./routes/illustration.tsx";
import ConceptGallery from "./routes/concept_art.tsx";
import FanartGallery from "./routes/fan_art.tsx";

import Artwork from "./routes/artwork.$slug.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          {/* Information Pages */}
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />

          {/* Gallery Pages */}
          <Route element={<GalleryLayout />}>
            <Route path="illustration" element={<IllustrationGallery />} />
            <Route path="concept-art" element={<ConceptGallery />} />
            <Route path="fan-art" element={<FanartGallery />} />
          </Route>

          {/* Individual Artwork Pages */}
          <Route path="artwork/:slug" element={<Artwork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
