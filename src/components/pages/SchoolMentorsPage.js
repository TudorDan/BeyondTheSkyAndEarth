import React, { useState, useEffect } from "react";
import Api from "../utils/Api";
import Loading from "../utils/Loading";

const SchoolMentorsPage = () => {
  const [mentors, setMentors] = useState();
  const [loading, setLoading] = useState(true);
  const schoolID = window.location.href.split("/")[4];

  useEffect(() => {
    const getMentors = async () => {
      try {
        const response = await Api.get(`/schools/${schoolID}/mentors`);
        const mentorsFromAPI = response.data;
        setMentors(mentorsFromAPI);
        console.log(mentorsFromAPI);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    getMentors();
  }, [schoolID]);

  console.log("!!!!!!!!!!!!AICI");

  if (loading) {
    return <Loading key={0} />;
  }

  return (
    <>
      {mentors?.map((mentor) => {
        const { id, name, birthdate } = mentor;

        return (
          <p key={id}>
            <h1>{name}</h1>
            <h2>{birthdate}</h2>
          </p>
        );
      })}
    </>
  );
};

export default SchoolMentorsPage;
