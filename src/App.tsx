import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import JobBoard from "./pages/JobBoard";
import History from "./pages/History";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/programmes" element={<Programs />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ressources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/joboard" element={<JobBoard />} />
            {/* Page prête mais pas encore liée dans la navigation publique */}
            <Route path="/histoire" element={<History />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
