function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 md:text-xl md:max-w-sm sm:p-6 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 md:text-xl sm:w-32 md:max-w-sm sm:p-4 sm:h-32 md:w-36 md:h-36 mx-auto"
        />
        <h1 className="text-lg sm:text-xl md:text-xl md:max-w-sm sm:p-4 md:text-2xl text-blue-800 my-4">John Doe</h1>
        <p className="text-sm sm:text-base md:text-xl md:max-w-sm sm:p-4 md:text-lg text-gray-600">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  