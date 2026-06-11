import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const CricketId = lazy(() => import("./pages/CricketId.tsx"));
const Index = lazy(() => import("./pages/Index.tsx"));
const LoginGuide = lazy(() => import("./pages/LoginGuide.tsx"));
const LotusPage = lazy(() => import("./pages/LotusPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/lotus365live-login-guide" element={<LoginGuide />} />
          <Route path="/cricket-id" element={<CricketId />} />
          <Route path="/login" element={<LotusPage pageKey="login" />} />
          <Route path="/signup" element={<LotusPage pageKey="signup" />} />
          <Route path="/about-us" element={<LotusPage pageKey="about-us" />} />
          <Route path="/lotusexchange" element={<LotusPage pageKey="lotusexchange" />} />
          <Route path="/lotus-cricket" element={<LotusPage pageKey="lotus-cricket" />} />
          <Route path="/contact-us" element={<LotusPage pageKey="contact-us" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
