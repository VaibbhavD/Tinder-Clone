import React from "react";

function UserCard() {
  return (
    <section class="mb-2 border  rounded-lg w-full bg-neutral-100">
      <div class="flex flex-wrap">
        <div class="w-1/3 md:w-1/4 flex-shrink-0 p-4">
          <img
            class="object-cover rounded-full w-full h-full"
            src="https://tailwindflex.com/public/images/user.png"
            alt="Profile Image"
          />
        </div>
        <div class="w-full md:w-3/4 flex-grow p-4">
          <h3 class="text-xl font-bold">John Doe</h3>
          <p>Location</p>

          <div class="flex flex-wrap md:flex-nowrap mt-4 md:gap-4">
            <div class="flex flex-col mb-4 w-full md:w-1/2">
              <span class="font-bold">Email:</span>
              <p>john.doe@example.com</p>
            </div>
            <div class="flex flex-col mb-4 w-full md:w-1/2">
              <span class="font-bold">Phone Number:</span>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div class="flex flex-wrap md:flex-nowrap md:gap-4">
            <div class="flex flex-col mb-4 w-full md:w-1/3">
              <span class="font-bold">Birth Date:</span>
              <p>January 1, 1990</p>
            </div>
            <div class="flex flex-col mb-4 w-full md:w-1/3">
              <span class="font-bold">Gender:</span>
              <p>Male</p>
            </div>
            <div class="flex flex-col mb-4 w-full md:w-1/3">
              <span class="font-bold">Relationship:</span>
              <p>Single</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserCard;
