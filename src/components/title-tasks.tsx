import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

export default function TitleTasks({ count }: { count: number }) {
  return (
    <div
      className={clsx(
        "w-full h-28 mb-8 sm:h-auto",
        "flex flex-col items-center justify-around sm:flex-row sm:justify-between"
      )}
    >
      <div>
        <h1
          className={clsx(
            "font-semibold text-center sm:leading-12",
            "text-xl md:text-3xl lg:text-4xl"
          )}
        >
          Welcome!
        </h1>
        <h6
          className={clsx("text-gray-400", "text-sm md:text-base lg:text-lg")}
        >
          Here's a list of your tasks.
        </h6>
      </div>
      <Badge variant="outline" className="sm:text-sm">
        Total: <Badge className="h-5 min-w-5 rounded-full px-1">{count}</Badge>
      </Badge>
    </div>
  );
}
