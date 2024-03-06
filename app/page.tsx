import type { Metadata } from "next";
import Chart from "./components/TradingViewChart/Chart";

export default function IndexPage() {
  return (
    <>
      <Chart />
    </>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
