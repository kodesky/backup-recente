import React from "react";

function Profile({ username }) {
  return (
    <div>
      <h1>{username}'s profile</h1>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      username: ctx.query.username,
    },
  };
};

export default Profile;
