"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./page.module.css";

function Example() {
  const [challengesArray, setChallengesArray] = useState([]);
  const [userData, setData] = useState({});
  const [points, setPoints] = useState(0);

  const data = [
  {
    challengeTitle: "Complete your first course",
    numerator: "0",
    denominator: "4",
    pointsToEarn: "50",
    icon: "/solar_cup-first-bold-duotone.png",
  },
  {
    challengeTitle: "Complete 2 lessons",
    numerator: "4",
    denominator: "4",
    pointsToEarn: "50",
    icon: "/solar_cup-first-bold-duotone.png",
  },
  {
    challengeTitle: "Complete 2 lessons",
    numerator: "4",
    denominator: "4",
    pointsToEarn: "50",
    icon: "/solar_cup-first-bold-duotone.png",
  },
];

//   const getUserDetails = async (id) => {
//     if (!id) return;
//     const response = await fetch("/api/users/me", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     }).catch((err) => {
//       console.log("err", err.response.data);
//     });

//     const data = await response.json();
//     setData(data);
//     setPoints(data.user.points.toString());
//   };


  async function fetchData() {
    console.log("fetched");

    // const res = await fetch("/api/challenges");
    // const fetchdata = await res.json();

    setChallengesArray(data);
    console.log(challengesArray)
    console.log(data)
  }
  useEffect(() => {
    if (!challengesArray.length) {
      fetchData();
    }
  }, []);

//   const updateUserData = (data) => {
//     // update the user data in the database, specifically, the points values
//     async function updateUserDataInDB() {
//       // eslint-disable-next-line no-console
//       const response = await fetch("/api/users/me/update-points", {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           points: data.user.points,
//           userId: data.user._id,
//         }),
//       });
//       const res = await response.json();
//       // eslint-disable-next-line no-console
//       console.log("res", res);

//       if (res.error) {
//         // eslint-disable-next-line no-alert
//         alert(res.error);
//         throw new Error(res.error);
//       }

//       // eslint-disable-next-line no-console
//       console.log("Update success", response.data);
//     }
//     updateUserDataInDB();

//     // update the user data in the local storage
//     localStorage.setItem("userData", JSON.stringify(data));
//   };

//   const handlePointsChange = (updatedValue) => {
//     userData.user.points = updatedValue;
//     updateUserData(userData);
//     localStorage.setItem("userData", JSON.stringify(userData));
//   };

  async function addPointsButton(
    index,
    points,
    setPoints,
    challenge,
    // handlePointsChange
  ) {
    const pointsElement = document.getElementById(`points_${index}`);
    const buttonElement = document.getElementById(`button_${index}`);

    if (pointsElement.innerHTML !== "Claimed") {
      const pointsToAdd = Number(challenge.pointsToEarn);
      buttonElement.style.backgroundColor = "grey";
      pointsElement.innerHTML = "Claimed";

      const updatedValue = await new Promise((resolve) => {
        setPoints((prevPoints) => {
          const newValue = Number(prevPoints) + Number(pointsToAdd);
          resolve(newValue); // Resolve the Promise with the updated value
          return newValue; // Return the updated value for immediate update
        });
      });

    //   handlePointsChange(updatedValue);
    }
  }

  return (
    <>
      {/* <p>{JSON.stringify(challengesArray)}</p> */}

      <p> Total amount of points: {points}</p>
      <div>
        {data &&
          data.map((challenge, index) => (
            <div key={index}>
            {console.log(1 / (challenge.denominator))}
              {1 / (challenge.denominator) < 1 && (
                <div className={(styles.cardcontainer, styles.cardBorder)}>
                  <div className={styles.cardInner}>
                    <div>
                      <Image
                        className={styles.lessonImage}
                        src={challenge.icon.toString()}
                        alt="Lesson Image"
                        width={74}
                        height={74}
                      />
                    </div>
                    <div>
                      <p className={styles.cardTitle}>
                        {challenge.challengeTitle.toString()}
                      </p>

                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{
                            width: `${
                              (1 /(challenge.denominator)) * 100
                            }%`,
                          }}
                        >
                          <span className={styles.overlayText}>
                            1/{(challenge.denominator)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.leafPoints}>
                      <div className={styles.points}>
                        <p> +{(challenge.pointsToEarn)}</p>
                      </div>
                      <div>
                        <Image
                          className={styles.leafImage}
                          src="/eco.png"
                          alt="Lesson Image"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {5 / (challenge.denominator) >= 1 && (
                <div>
                  <div>
                    <CheckCircleIcon className={styles.check} />
                  </div>
                  <div
                    className={
                      (styles.cardcontainer, styles.completedcardBorder)
                    }
                  >
                    <div className={styles.cardInner}>
                      <Image
                        className={styles.lessonImage}
                        src={challenge.icon.toString()}
                        alt="Lesson Image"
                        width={74}
                        height={74}
                      />

                      <p className={styles.completedcardTitle}>
                        {challenge.challengeTitle.toString()}
                      </p>

                      <div
                        id={`button_${index}`}
                        className={styles.completedleafPoints}
                        onClick={() =>
                          addPointsButton(
                            index,
                            points,
                            setPoints,
                            challenge,
                            // handlePointsChange
                          )
                        }
                      >
                        <div className={styles.points}>
                          <p id={`points_${index}`}>
                            {" "}
                            Claim +{(challenge.pointsToEarn)}
                          </p>
                        </div>

                        <Image
                          className={styles.leafImage}
                          src="/eco.png"
                          alt="Lesson Image"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default Example;
