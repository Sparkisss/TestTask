import { Button } from "@/shared/ui";
import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="mb-10 text-3xl">Not Found</div>
      <Button className="h-10 w-30">
        <Link to="/">Main page</Link>
      </Button>
    </main>
  );
}
