import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <p className="mb-2 text-6xl font-bold text-primary">404</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">This Page Is Not Available on Lotus365 IDs</h1>
        <h2 className="mb-6 text-lg font-light text-muted-foreground sm:text-xl">
          The page you are looking for does not exist. For cricket ID help and casino login support, visit lotus365ids.live.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/" className="rounded-md bg-primary px-5 py-2 font-black text-primary-foreground hover:bg-primary/90">
            Return to Home
          </a>
          <a href="/blog" className="rounded-md border border-primary px-5 py-2 font-black text-primary hover:bg-primary/10">
            Read Lotus365 Blog
          </a>
          <a href="/contact-us" className="rounded-md border border-primary px-5 py-2 font-black text-primary hover:bg-primary/10">
            Contact WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
