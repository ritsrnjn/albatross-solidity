import { items } from "@/app/data";
import { Button } from "@/components/ui/button";
import { VerifiedIcon } from "lucide-react";

export default function Home(props: { params: { company: string } }) {
  return (
    <div className="pt-12 px-4 md:px-12 lg:px-20">
      <p className="text-2xl font-semibold pb-4">Company detail page</p>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {items
          .filter((e) => e.companyId === props.params.company)
          .map((e) => (
            <div
              key={e.id}
              className="p-2 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* <p>id: {e.userId}</p> */}
              <p>{e.name}</p>
              <p>Quantity: {e.carbonEmissionQuantity} KT</p>
              <p>Timestamp: {new Date(e.timestamp).toLocaleDateString()}</p>

              <div className="flex flex-row justify-between pt-4">
                <Button variant={"ghost"} className="gap-2">
                  <VerifiedIcon />
                  Verified
                </Button>
                <Button>Offset</Button>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}
