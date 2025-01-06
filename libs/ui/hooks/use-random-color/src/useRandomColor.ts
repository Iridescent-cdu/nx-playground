import { randomApiRoute, RandomColorApiResponse } from '@nx-playground/random-api-interface';
import { useEffect, useState } from 'react';

type Color = RandomColorApiResponse['color'];

const fetchRandomColor = async () => {
  const res = await fetch(`http://localhost:3333${randomApiRoute}`);

  const data = (await res.json()) as RandomColorApiResponse;

  return data;
};

export const useRandomColor = () => {
  const [randomColor, setRandomColor] = useState<Color>();

  useEffect(() => {
    fetchRandomColor().then(({ color }) => setRandomColor(color));
  }, []);

  return {
    randomColor,
  }
};
