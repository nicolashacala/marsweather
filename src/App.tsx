import React, { useState, useEffect, useCallback } from "react";
import ChangeUnit from "./components/changeUnit/ChangeUnit";
import DayCard from "./components/dayCard/DayCard";
import { Data } from "./components/dayCard/types";
import TodayCard from "./components/todayCard/TodayCard";
import preloader from "./assets/images/preloader.gif";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data[]>([]);
  const [unit, setUnit] = useState<string>("C");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.nasa.gov/insight_weather/?api_key=J0p9djgLTJrGgQitRwGIzq3RLcX0YSaBfU3sKzCY&feedtype=json&ver=1.0"
      );
      const result = await response.json();
      const { sol_keys, validity_checks, ...cleanResult } = result;
      setData(
        Object.entries(cleanResult).map(([key, data]: any) => ({
          sol: key,
          ...data,
          AT: {
            mn: unit === "C" ? (data.AT.mn - 32) / 1.8 : data.AT.mn,
            mx: unit === "C" ? (data.AT.mx - 32) / 1.8 : data.AT.mx,
          },
        }))
      );
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [unit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading && <img src={preloader} alt="preloader" className="preloader" />}
      {data.length ? (
        <>
          <TodayCard data={data[data.length - 1]} unit={unit} />
          <ChangeUnit unit={unit} setUnit={setUnit} />
          <div className="day-cards-row">
            {data.map((d) => (
              <DayCard key={d.sol} data={d} unit={unit} />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
