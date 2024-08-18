import React from "react";

function UserCard(props) {
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

  return (
    <section className="mb-2 border rounded-lg w-full bg-[#111418]">
      {users.map((user) => (
        <div className="flex flex-wrap bg-gray-700 m-2 rounded-2xl border-2 border-gray-500 text-white">
          <div className="w-1/3 md:w-1/4 flex-shrink-0 p-4 flex justify-center items-center">
            <img
              className="object-cover w-full h-full md:w-40 md:h-40 rounded-full border-2 border-orange-500"
              src={user.profileImage}
              alt="Profile Image"
              loading="lazy"
              width={128}
              height={128}
            />
          </div>
          <div className="w-full md:w-3/4 flex-grow p-4">
            <h3 className="text-xl text-orange-600 font-bold">
              {user.firstName + " " + user.lastName}
            </h3>
            <p>{props.location}</p>

            <div className="flex flex-wrap md:flex-nowrap mt-4 md:gap-4">
              <div className="flex flex-col mb-4 w-full md:w-1/2">
                <span className="font-bold">Email:</span>
                <p>{user.email}</p>
              </div>
              <div className="flex flex-col mb-4 w-full md:w-1/2">
                <span className="font-bold">Phone Number:</span>
                <p>{user.phoneNumber}</p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap md:gap-4">
              <div className="flex flex-col mb-4 w-full md:w-1/3">
                <span className="font-bold">Birth Date:</span>
                <p>{user.birthDate}</p>
              </div>
              <div className="flex flex-col mb-4 w-full md:w-1/3">
                <span className="font-bold">Gender:</span>
                <p>{user.gender}</p>
              </div>
              <div className="flex flex-col mb-4 w-full md:w-1/3">
                <span className="font-bold">Relationship:</span>
                <p>{user.relationship}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default UserCard;
