import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Property from './Property';
import PropertyDetail from './PropertyDetail';
import './styles.css';

const properties = [
  {
    id: 1,
    title: 'Beautiful Family Home',
    location: '123 Main St, Cityville',
    price: 300000,
    description: 'Spacious 4-bedroom house with a large backyard.',
    image: './src/assets/beautiful-home.jpg', alt:'Beautiful Family Home',
  },
  {
    id: 2,
    title: 'Cozy Apartment',
    location: '456 Elm St, Townsville',
    price: 150000,
    description: 'Charming 2-bedroom apartment in a quiet neighborhood.',
    image: './src/assets/cozy.jpg', alt:'Cozy Apartment',
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    location: '789 Oak St, Metropolis',
    price: 1000000,
    description: 'Stunning penthouse with panoramic views of the city skyline.',
    image: './src/assets/penthouse.jpg', alt:'Luxury Penthouse',
  },
  {
    id: 4,
    title: 'Beachfront Villa',
    location: '10 Ocean Ave, Seaside',
    price: 750000,
    description: 'Elegant villa steps away from the beach with private pool.',
    image: './src/assets/villa.jpg', alt:'Beachfront Villa',
  },


];

function App() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties
    .filter(property => (minPrice === '' || property.price >= minPrice) && (maxPrice === '' || property.price <= maxPrice))
    .sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      } else if (sortBy === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="App">
      <h1>Real Estate Listings</h1>
      <div className="filters">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price-asc">Price - Low to High</option>
          <option value="price-desc">Price - High to Low</option>
        </select>
      </div>
      <div className="property-list">
        {filteredProperties.map(property => (
          <Property key={property.id} property={property} onClick={handlePropertyClick} />
        ))}
      </div>
      {selectedProperty && <PropertyDetail property={selectedProperty} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;