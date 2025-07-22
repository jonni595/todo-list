import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideTrash, LucidePencil } from "lucide-react";

export function DropdownActions({
  setEditing,
  onDeleteTask,
}: {
  setEditing: (edit: boolean) => void;
  onDeleteTask: (id: number) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuItem onClick={() => setEditing(true)}>
          <LucidePencil size={18} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-400 hover:bg-red-600"
          onClick={() => onDeleteTask}
        >
          <LucideTrash size={18} className="text-red-400" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
