import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/Element.png" alt="Empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-950" size="lg">
              Create an organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 shadow-none  border-none bg-transparent max-w-[480px] [&>button]:hidden">
            <CreateOrganization
              routing="hash"
              appearance={{
                elements: {
                  rootBox: { width: "400px" },
                },
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
