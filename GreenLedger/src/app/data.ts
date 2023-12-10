import { newId } from "@/lib/utils";

export type CarbonEntity = {
  id: string;
  companyId: string;
  timestamp: string;
  carbonEmissionQuantity: number;
  userId: string;
  name: string;
};
import { faker } from "@faker-js/faker";

const _ids: Record<string, string> = {
  "01hh85n71tj84h58241mnsgj56": "Medhurst, Raynor and Gusikowski",
  "01hh85n71t0g84gj2sq3gh35gv": "King LLC",
  "01hh85n71tfv5gj6bxezj2ekys": "Krajcik Group",
  "01hh85n71tmey0j1qsgbaxg7jn": "Herzog, Schumm and Beier",
  "01hh85n71t1sn5fwe4yz1s3p26": "Weber - Vandervort",
  "01hh85n71v3k3hapzjmxnzt3x1": "Stroman - Schmidt",
  "01hh85n71v8tygrtvmqb2gfwv6": "Jakubowski, Block and Carter",
  "01hh85n71vaak4e1xv7exnsmm0": "Carroll Group",
};

const ids = [
  "01hh85n71tj84h58241mnsgj56",
  "01hh85n71t0g84gj2sq3gh35gv",
  "01hh85n71tfv5gj6bxezj2ekys",
  "01hh85n71tmey0j1qsgbaxg7jn",
  "01hh85n71t1sn5fwe4yz1s3p26",
  "01hh85n71v3k3hapzjmxnzt3x1",
  "01hh85n71v8tygrtvmqb2gfwv6",
  "01hh85n71vaak4e1xv7exnsmm0",
];

const getItem = (): CarbonEntity => {
  const companyId = faker.helpers.arrayElement(Object.keys(_ids));
  return {
    id: newId(),
    companyId: companyId,
    timestamp: faker.date
      .between({
        from: "2020-01-01T00:00:00.000Z",
        to: "2023-10-01T00:00:00.000Z",
      })
      .toJSON(),
    carbonEmissionQuantity: faker.number.int({ min: 80, max: 1020 }),
    userId: "0x806890630935e146979d4ce027B928C705A4D4AC",
    name: _ids[companyId],
  };
};
export const items: CarbonEntity[] = [
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
  getItem(),
];

export const item: CarbonEntity = items[0];
