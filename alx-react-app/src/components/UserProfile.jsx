// src/components/UserProfile.jsx
const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2> {/* Display user name */}
            <p>Age: {props.age}</p> {/* Display user age */}
            <p>Bio: {props.bio}</p> {/* Display user bio */}
        </div>
    );
};

export default UserProfile;
