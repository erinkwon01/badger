import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Modal from 'react-modal';
const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '400px',
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
  };
  
  const OnboardingModal = ({ isOpen, onRequestClose }) => {
    const [name, setName] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState({
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        dairyFree: false,
      });
    const [location, setLocation] = useState('');
    const [friends, setFriends] = useState([]);
  
    const handleAddFriend = () => {
      const friendName = prompt('Enter your friend\'s name:');
      if (friendName) {
        setFriends([...friends, friendName]);
      }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setDietaryRestrictions(prevState => ({
          ...prevState,
          [name]: checked
        }));
      };
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Onboarding Modal"
        style={modalStyle}
      >
        <h2 className={styles.heading}>Welcome to Badger!</h2>
        <p className={styles.paragraph}>Let's get started with some onboarding...</p>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Enter your name"
        />
       <label className={styles.label}>Dietary Restrictions:</label>
      <div>
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={dietaryRestrictions.vegan}
            onChange={handleCheckboxChange}
          />
          Vegan
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="vegetarian"
            checked={dietaryRestrictions.vegetarian}
            onChange={handleCheckboxChange}
          />
          Vegetarian
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="glutenFree"
            checked={dietaryRestrictions.glutenFree}
            onChange={handleCheckboxChange}
          />
          Gluten-Free
        </label>
        </div>
   
        <label>
          <input
            type="checkbox"
            name="dairyFree"
            checked={dietaryRestrictions.dairyFree}
            onChange={handleCheckboxChange}
          />
          Dairy-Free
        </label>
        <label htmlFor="location" className={styles.label}>Location:</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.input}
          placeholder="Enter your location"
        />
        <button onClick={handleAddFriend} className={styles.button}>Add Friend</button>
        <h3 className={styles.heading}>Friends:</h3>
        <ul className={styles.friendsList}>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
        <button onClick={()=>{onRequestClose();
        console.log("save",name, dietaryRestrictions, location, friends)
       } } className={styles.closeButton}>
          Save
        </button>
      </Modal>
    );
  };
  
  export default OnboardingModal;