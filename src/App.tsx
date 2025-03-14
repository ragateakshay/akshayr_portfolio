
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HDMITransmitter from "./pages/projects/HDMITransmitter";
import HDCPImplementation from "./pages/projects/HDCPImplementation";
import HDMIProtocolIntegration from "./pages/projects/HDMIProtocolIntegration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/hdmi-transmitter" element={<HDMITransmitter />} />
          <Route path="/projects/hdcp-implementation" element={<HDCPImplementation />} />
          <Route path="/projects/hdmi-protocol-integration" element={<HDMIProtocolIntegration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
