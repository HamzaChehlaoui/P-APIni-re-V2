import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get('/plants').then(res => setPlants(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🌱 Liste des plantes</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {plants.map((plant) => (
          <Link to={`/plant/${plant.slug}`} key={plant.id} className="border p-2 rounded shadow hover:shadow-lg">
            <img src={plant.images?.[0]} alt={plant.name} className="h-32 w-full object-cover mb-2" />
            <h2 className="font-semibold">{plant.name}</h2>
            <p className="text-sm text-gray-600">{plant.price} MAD</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
