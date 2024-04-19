import React from 'react';

function PropertyDetail({ property, onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{property.title}</h2>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
          <p><strong>Description:</strong> {property.description}</p>
        </div>
      </div>
    );
}

export default PropertyDetail;