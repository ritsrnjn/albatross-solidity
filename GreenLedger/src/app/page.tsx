import { Button } from "@/components/ui/button";
import { VerifiedIcon } from "lucide-react";
import { items } from "./data";
import Link from "next/link";
import { OffsetDialog } from "@/components/OffsetDialog";
import { ChainConnection } from "./ChainConnection";

// Import Push SDK & Ethers
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';



export default async function Home() {
  return (
    <div className="pt-12 px-4 md:px-12 lg:px-20">
      {/* <ChainConnection /> */}
      <p className="text-2xl font-semibold pb-4">Marketplace</p>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((e) => (
          <div
            key={e.id}
            className="p-2 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Link
              href={`/company/${e.companyId}`}
              className="hover:cursor-pointer text-purple-900 hover:text-purple-500 font-semibold"
            >
              {e.name}
            </Link>
            <p>Quantity: {e.carbonEmissionQuantity} KT</p>
            <p>Timestamp: {new Date(e.timestamp).toLocaleDateString()}</p>

            <div className="flex flex-row justify-between pt-4">
              <Button variant={"ghost"} className="gap-2">
                <VerifiedIcon />
                Verified
              </Button>
              <OffsetDialog />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
