import React from "react";
import { DayCardProps } from "./types";

const DayCard: React.FC<DayCardProps> = ({
  data: {
    sol,
    First_UTC,
    AT: { mn, mx },
  },
  unit,
}) => {
  const localDate = new Date(First_UTC).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="day-cards">
      <h1>{`Sol ${sol}`}</h1>
      <h2>{localDate}</h2>
      <hr />
      <p>{`Haute: ${Math.round(mx)}° ${unit}`}</p>
      <p>{`Basse: ${Math.round(mn)}° ${unit}`}</p>
    </div>
  );
};

export default DayCard;
