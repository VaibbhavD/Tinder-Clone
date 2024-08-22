import React, { useState, useCallback } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
import "./UserCard.css"; // Import the updated CSS file
import UserMenu from "../Dashboard/UserMenu";

function UserCard() {
  const users = [
    {
      firstName: "Rohit",
      lastName: "Patil",
      profileImage:
        "https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id500060262?k=6&m=500060262&s=612x612&w=0&h=dqPFs-C5bejj3tCI_pZFctS5xOHUtipA1FHPUU6aAwU=",
      email: "rohitpatil@gmail.com",
      phoneNumber: "91 8265124789",
      birthDate: "1999-01-01",
      gender: "Male",
      relationship: "Single",
      skills: ["Discrete Math", "Topology", "Neural Nets"],
    },
    {
      firstName: "Smitha",
      lastName: "Jain",
      profileImage:
        "https://wallpapers.com/images/hd/indian-girl-casual-photographer-camera-of1e2gv8qut3bn37.jpg",
      email: "smithajain@gmail.com",
      phoneNumber: "91 9865123547",
      birthDate: "1997-05-12",
      gender: "Female",
      relationship: "Single",
      skills: ["Data Science", "Machine Learning", "Artificial Intelligence"],
    },
    {
      firstName: "Aishwarya",
      lastName: "Marathe",
      profileImage:
        "https://i.pinimg.com/originals/5f/79/b0/5f79b0a127243af63b881f042decc2d7.jpg",
      email: "aishwaryam123@gmail.com",
      phoneNumber: "91 7895621453",
      birthDate: "2000-08-21",
      gender: "Female",
      relationship: "Single",
      skills: ["Cloud Computing", "DevOps", "Cybersecurity"],
    },
    {
      firstName: "Sudhanshu",
      lastName: "Mishra",
      profileImage:
        "https://i.pinimg.com/originals/2e/3c/79/2e3c7911a51c311b02412bc58c0a91a3.jpg",
      email: "sudhanshumishra@gmail.com",
      phoneNumber: "91 9956284543",
      birthDate: "1992-02-14",
      gender: "Male",
      relationship: "Engaged",
      skills: ["Front-End Development", "React", "UI/UX Design"],
    },
    {
      firstName: "Rajaram",
      lastName: "Patil",
      profileImage:
        "https://thumbs.dreamstime.com/b/jonge-indische-mens-52215483.jpg",
      email: "robert.wilson@example.com",
      phoneNumber: "91 6532489512",
      birthDate: "1994-11-30",
      gender: "Male",
      relationship: "Married",
      skills: ["Backend Development", "Node.js", "Database Management"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [direction, setDirection] = useState("");

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSwipeLeft = useCallback(() => {
    setDirection("swipe-left");
    setIsSwiping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      setIsSwiping(false);
      setDirection(""); // Reset direction to initial state
    }, 300); // Match CSS transition duration
  }, [users.length]);

  const handleSwipeRight = useCallback(() => {
    setDirection("swipe-right");
    setIsSwiping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      setIsSwiping(false);
      setDirection(""); // Reset direction to initial state
    }, 300); // Match CSS transition duration
  }, [users.length]);

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="mt-4 rounded-lg w-full bg-[#111418]" {...handlers}>
      <div className="w-full h-[400px] md:h-[550px] flex justify-center px-2">
        <div
          className={`md:w-96 w-full h-full bg-cover cursor-pointer flex justify-start items-end rounded-lg user-card ${
            isSwiping ? direction : ""
          }`}
          style={{
            backgroundImage: `url(${users[currentIndex].profileImage})`,
          }}
        >
          <div className="bg-black border-b border-l border-r rounded-b-lg p-4 w-full">
            <p className="text-3xl font-bold text-white flex items-center">
              {users[currentIndex].firstName} {users[currentIndex].lastName}
              <RiVerifiedBadgeFill className="text-2xl text-blue-500 ml-2" />
            </p>
            <p className="text-lg text-white">
              Age: {calculateAge(users[currentIndex].birthDate)}
            </p>
          </div>
        </div>
      </div>
      <UserMenu swipeLeft={handleSwipeLeft} swipeRight={handleSwipeRight} />
    </section>
  );
}

export default UserCard;
