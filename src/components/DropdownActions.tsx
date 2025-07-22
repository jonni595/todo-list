import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideTrash, LucidePencil, LucideEllipsis } from "lucide-react";

export function DropdownActions({
  taskId,
  setEditing,
  onDeleteTask,
}: {
  setEditing: (edit: boolean) => void;
  onDeleteTask: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => void;
  taskId: `${string}-${string}-${string}-${string}-${string}`;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <LucideEllipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuItem onClick={() => setEditing(true)}>
          <LucidePencil size={18} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-400 hover:bg-red-600"
          onClick={() => onDeleteTask(taskId)}
        >
          <LucideTrash size={18} className="text-red-400" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
