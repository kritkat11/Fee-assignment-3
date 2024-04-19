import React from 'react';

function Property({ property, onClick }) {
  return (
    <div className="property" onClick={() => onClick(property)}>
    <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
      <p><strong>Description:</strong> {property.description}</p>
    </div>
  );
}

export default Property;