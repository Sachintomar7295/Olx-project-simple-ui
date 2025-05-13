// src/components/CarForm.jsx
import React, { useState } from 'react';
import './CarForm.css';

const CarForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    variant: '',
    year: '',
    fuel: '',
    transmission: '',
    kmDriven: '',
    owners: '',
    title: '',
    description: '',
    price: '',
    state: '',
    city: '',
    name: '',
    phone: '',
  });

  const [images, setImages] = useState([]);

  const brands = ['Maruti Suzuki', 'Honda', 'Toyota', 'Hyundai'];
  const models = {
    'Maruti Suzuki': ['Brezza', 'Swift', 'Baleno'],
    'Honda': ['Civic', 'City', 'Jazz'],
    'Toyota': ['Corolla', 'Innova', 'Fortuner'],
    'Hyundai': ['Creta', 'Verna', 'i20'],
  };
  const variants = {
    'Brezza': ['ZXi S-CNG', 'ZXi', 'VXi'],
    'Swift': ['VXi', 'ZXi', 'ZDi'],
    'Baleno': ['Alpha', 'Delta', 'Zeta'],
    'Civic': ['V', 'VX', 'ZX'],
    'City': ['SV', 'V', 'VX'],
    'Jazz': ['S', 'V', 'VX'],
    'Corolla': ['Altis G', 'Altis J'],
    'Innova': ['Crysta GX', 'Crysta VX'],
    'Fortuner': ['2.7 Petrol', '2.8 Diesel'],
    'Creta': ['E', 'EX', 'SX'],
    'Verna': ['S', 'SX', 'SX (O)'],
    'i20': ['Magna', 'Sportz', 'Asta'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };

      if (name === 'brand') {
        updatedFormData.model = '';
        updatedFormData.variant = '';
      }
      if (name === 'model') {
        updatedFormData.variant = '';
      }

      return updatedFormData;
    });
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files).slice(0, 20));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Images:', images);
    alert('Form submitted (frontend only)');
  };

  return (
    <div className="form-container">
      <h2>Post Your Car Ad</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <select name="brand" value={formData.brand} onChange={handleChange} required>
          <option value="">Brand *</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        <select name="model" value={formData.model} onChange={handleChange} required disabled={!formData.brand}>
          <option value="">Model *</option>
          {models[formData.brand]?.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select name="variant" value={formData.variant} onChange={handleChange} required disabled={!formData.model}>
          <option value="">Variant *</option>
          {variants[formData.model]?.map((variant) => (
            <option key={variant} value={variant}>{variant}</option>
          ))}
        </select>

        <input type="number" name="year" placeholder="Year *" value={formData.year} onChange={handleChange} required />

        <select name="fuel" value={formData.fuel} onChange={handleChange} required>
          <option value="">Fuel *</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG & Hybrids</option>
          <option value="Electric">Electric</option>
          <option value="LPG">LPG</option>
        </select>

        <select name="transmission" value={formData.transmission} onChange={handleChange} required>
          <option value="">Transmission *</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        <input type="number" name="kmDriven" placeholder="KM Driven *" value={formData.kmDriven} onChange={handleChange} required />

        <select name="owners" value={formData.owners} onChange={handleChange} required>
          <option value="">No. of Owners *</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="4+">4+</option>
        </select>

        <input type="text" name="title" placeholder="Ad Title *" value={formData.title} onChange={handleChange} className="full-width" required />

        <textarea name="description" placeholder="Description *" rows="4" className="full-width" value={formData.description} onChange={handleChange} required />

        <input type="number" name="price" placeholder="Price (₹) *" className="full-width" value={formData.price} onChange={handleChange} required />

        <input type="file" accept="image/*" multiple onChange={handleImageChange} className="full-width" required />

        <div className="image-preview-grid">
          {images.map((img, idx) => (
            <img key={idx} src={URL.createObjectURL(img)} alt={`Preview ${idx}`} className="preview-img" />
          ))}
        </div>

        <select name="state" value={formData.state} onChange={handleChange} required>
          <option value="">Select State *</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        </select>

        <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Mobile Number *" value={formData.phone} onChange={handleChange} required />

        <button type="submit" className="submit-btn">POST NOW</button>
      </form>
    </div>
  );
};

export default CarForm;
