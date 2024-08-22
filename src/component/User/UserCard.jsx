import React, { useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
import "./UserCard.css"; // Import the CSS file for animation styles
import UserMenu from "../Dashboard/UserMenu";

function UserCard() {
  const users = [
    {
      firstName: "Rohit",
      lastName: "Patil",
      profileImage:
        "https://tse1.mm.bing.net/th?id=OIP.XH-rEsfM9YM8W98wnn4tKAHaHa&pid=Api&P=0&h=180",
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
      profileImage: "http://indianloop.com/desi/images/indianwoman-small.jpg",
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
        "https://i.pinimg.com/originals/e0/99/a5/e099a5c50757143c2561efca42ba5c84.jpg",
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
        "https://www.voicendata.com/wp-content/uploads/2017/09/AnandaSuresh_54853.jpg",
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
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d728e973143373.5bffa2c9aaa2c.jpg",
      email: "robert.wilson@example.com",
      phoneNumber: "91 6532489512",
      birthDate: "1975-11-30",
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

  const handleSwipeLeft = () => {
    setDirection("left");
    setIsSwiping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        // Move to the next user, loop to the beginning if at the end
        return (prevIndex + 1) % users.length;
      });
      setIsSwiping(false);
      setDirection("");
    }, 300); // Adjusted animation duration
  };

  const handleSwipeRight = () => {
    setDirection("right");
    setIsSwiping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        // Move to the previous user, loop to the end if at the beginning
        return (prevIndex + 1 + users.length) % users.length;
      });
      setIsSwiping(false);
      setDirection("");
    }, 300); // Adjusted animation duration
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      className="mb-2 mt-10 md:mt-4 rounded-lg w-full bg-[#111418]"
      {...handlers}
    >
      <div className="w-full h-[550px] flex justify-center">
        <div
          className={`md:w-96 w-80 h-full bg-cover cursor-pointer flex justify-start items-end rounded-lg user-card ${
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
