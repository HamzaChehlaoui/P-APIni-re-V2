import React from 'react';
import { useParams } from 'react-router-dom';

export default function PlantDetails() {
  const { slug } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Plant Details</h1>
      <p>Details for plant: <strong>{slug}</strong></p>
    </div>
  );
}
