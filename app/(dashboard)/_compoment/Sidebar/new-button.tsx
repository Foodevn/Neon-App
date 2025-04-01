"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="new organization"
            side="right"
            align="center"
            sideOffset={12}
          >
            <button
              aria-label="Add new organization"
              className="bg-white/25 h-full w-full
              rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition"
            >
              <Plus className=" text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>

      <DialogContent className="p-0 shadow-none  border-none bg-transparent max-w-[480px] [&>button]:hidden">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
