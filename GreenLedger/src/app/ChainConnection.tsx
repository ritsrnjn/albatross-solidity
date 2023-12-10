// @ts-nocheck
"use client";

import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";

import { getAbi } from "./getAbi";
import { contractId } from "@/config";
import { Button } from "@/components/ui/button";

export const ChainConnection = (props: { address?: `0x${string}` }) => {
  const [c, setC] = useState<Contract>();
  const [p, setP] = useState<ethers.BrowserProvider>();
  const [data, sestData] = useState<any[]>();

  useEffect(() => {
    if (!window.ethereum)
      alert("ethereum is not available, product will not work");
    const provider = new ethers.BrowserProvider(window.ethereum);
    setP(provider);

    (async () => {
      const abi = await getAbi();
      const contract: Contract = new ethers.Contract(contractId, abi, provider);
      await contract.waitForDeployment();

      setC(contract);
    })();
  }, [props.address]);

  const j = async () => {
    if (!p || !c) return;
    const signer = await p.getSigner();
    const csaf = c.connect(signer);

    console.log(await csaf.addEmission(BigInt(123)));
  };

  const viewData = async () => {
    if (!p || !c) return;

    const signer = await p.getSigner();
    const csaf = c.connect(signer);

    const d = await csaf.viewEmissions(signer.address);
    sestData(d);
    console.log(d.map((e) => e.address));
  };
  console.log(data);
  return (
    <div>
      <Button onClick={j}>Add emission</Button>
      <Button onClick={viewData}>View latest data</Button>
      <p>chain data</p>
      {data?.map((e) => (
        <div key={e.id}>
          {JSON.stringify(
            e,
            (key, value) =>
              typeof value === "bigint" ? value.toString() : value // return everything else unchanged
          )}
          {/* <p>{JSON.stringify(e)}</p> */}
        </div>
      ))}
    </div>
  );
};
