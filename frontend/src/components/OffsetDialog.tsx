import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function OffsetDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Offset</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Offset your footprint</DialogTitle>
          <DialogDescription>
            Enable bidding for this project and let farmers or other
            organizations reach out to you for help.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Budget
            </Label>
            <Input id="name" value="$1M - $3M" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Audience
            </Label>

            <Select>
              <SelectTrigger className="col-span-3" id="username">
                <SelectValue placeholder="Target audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Organizations">Organizations</SelectItem>
                <SelectItem value="Farmers">Farmers</SelectItem>
                <SelectItem value="Both">Open to All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Enable Bidding</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
