import { ReactNode } from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/ui/theme-provider";

function App({ children }: { children: ReactNode; }) {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button variant="ghost">Click me</Button>
      {children}
    </ThemeProvider>
  );
}

export default App;
