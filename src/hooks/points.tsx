import React, { useCallback, createContext, useState, useContext } from 'react';

interface IPoints {
  points_value: number;
}

interface IPointsContext {
  points: number;
  sumPoints(points_value: IPoints): void;
}

const PointsContext = createContext<IPointsContext>({} as IPointsContext);

export const PointsProvider: React.FC = ({ children }) => {
  const [points, setPoints] = useState(100);

  const sumPoints = useCallback(
    ({ points_value }: IPoints): void => {
      const sumCurrentPoints = points + points_value;

      setPoints(sumCurrentPoints);
    },
    [points],
  );

  return (
    <PointsContext.Provider value={{ points, sumPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export function usePoints(): IPointsContext {
  const context = useContext(PointsContext);

  if (!context) {
    throw new Error('usePoints must be used within an PointsProvider');
  }

  return context;
}
