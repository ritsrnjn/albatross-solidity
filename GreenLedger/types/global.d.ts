declare global {
  interface Window {
    ethereum: import("ethers").Provider & import("ethers").BrowserProvider;
  }
}
