import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import FlightDetailSidebar from '../components/FlightDetailSidebar';


const FlightDetailsDefaultState: NextPage = () => {
  const [isFullFlightDetailsShowFul8Open, setFullFlightDetailsShowFul8Open] =
    useState(true);
  const [isFullFlightDetailsShowFulOpen, setFullFlightDetailsShowFulOpen] =
    useState(true);

  const closeFullFlightDetailsShowFul = useCallback(() => {
    setFullFlightDetailsShowFulOpen(false);
  }, []);

  const closeFullFlightDetailsShowFul8 = useCallback(() => {
    setFullFlightDetailsShowFul8Open(false);
  }, []);


  return (
    <div className="font-plus-jakarta-sans">
      {/* <Head>
        <title>Copilot Travel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap"
        />
      </Head> */}
      <FlightDetailSidebar />



    </div>
  );
};

export default FlightDetailsDefaultState;
