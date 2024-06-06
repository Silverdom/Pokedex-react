import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center">
      <h1>404 - Not Found</h1>
      <p>The page you tried to access could not be found</p>
      <Button asChild>
        <Link to="/">Take Me Home</Link>
      </Button>
    </div>
  );
}
