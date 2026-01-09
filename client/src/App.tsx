import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { ScrollProvider } from "@/contexts/scroll-context";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PageBreadcrumbs from "@/components/ui/page-breadcrumbs";
import YandexReviews from "@/components/ui/yandex-reviews";
import { SeasonalEffects } from "@/components/ui/seasonal-effects";
import Home from "@/pages/home";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Contacts from "@/pages/contacts";
import Booking from "@/pages/booking";
import Rules from "@/pages/rules";
import Admin from "@/pages/admin";
import { PrivacyPolicy } from "@/pages/privacy-policy";
import { Consent } from "@/pages/consent";
import { LegalDocuments } from "@/pages/legal-documents";
import NotFound from "@/pages/not-found";
import { CookieConsent } from "@/components/ui/cookie-consent";

function Router() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBreadcrumbs />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/booking" component={Booking} />
          <Route path="/rules" component={Rules} />
          <Route path="/admin" component={Admin} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/consent" component={Consent} />
          <Route path="/legal-documents" component={LegalDocuments} />
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
      <ScrollProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
          <YandexReviews />
          <SeasonalEffects />
        </TooltipProvider>
      </ScrollProvider>
    </QueryClientProvider>
  );
}

export default App;
