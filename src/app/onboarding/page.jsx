"use client";

import React, { useEffect, useState, Button } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import OnboardingModal from "./onboardingPopup.js";

const OnboardingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1>Welcome to Badger</h1>
      <p>Let's get you onboarded</p>
      <button
        onClick={() => {
          openModal();
        }}
      >
        {" "}
        onboard
      </button>
      <OnboardingModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default OnboardingPage;
