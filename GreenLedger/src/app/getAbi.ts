'use server'
import fs from "fs";
import util from "util";

const path =
  "artifacts/contracts/CarbonEmissionTracker.sol/CarbonEmissionTracker.json";

export const getAbi = async () => {
  const readFile = util.promisify(fs.readFile);

  function getStuff() {
    return readFile(path, "utf-8");
  }

  const d = await getStuff();

  return JSON.parse(d).abi;
};
