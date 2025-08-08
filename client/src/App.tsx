import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import YandexReviews from "@/components/ui/yandex-reviews";
import Home from "@/pages/home";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Contacts from "@/pages/contacts";
import Booking from "@/pages/booking";
import Admin from "@/pages/admin";
import NotFound from "@/pages/not-found";

function Router() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[60px] sm:pt-[72px]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/booking" component={Booking} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <YandexReviews />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
