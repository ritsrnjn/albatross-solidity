export const runtime = "edge";

export const GET = async () => {
  // const [deployer] = await ethers.getSigners();
  return new Response([12, 3]);
};
