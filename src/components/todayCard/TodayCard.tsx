import React from "react";
import { DayCardProps } from "../dayCard/types";

const TodayCard: React.FC<DayCardProps> = ({
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
    <div className="today-card">
      <div>
        <div>
          <h1>{`Sol ${sol}`}</h1>
          <h2>{localDate}</h2>
        </div>
        <div>
          <p>
            <span>{`Haute: `}</span>
            {`${Math.round(mx)}° ${unit}`}
          </p>
          <p>
            <span>{`Basse: `}</span>
            {`${Math.round(mn)}° ${unit}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
