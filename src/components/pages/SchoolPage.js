import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Loading from "../utils/Loading";

const SchoolPage = () => {
  const [school, setSchool] = useState([]);
  const [loading, setLoading] = useState(true);
  const schoolID = window.location.href.split("/")[4];
  const linkToMentors = `${schoolID}/mentors`;

  useEffect(() => {
    const getSchool = async () => {
      try {
        const response = await Api.get(`/schools/${schoolID}`);
        const schoolFromAPI = response.data;
        setSchool(schoolFromAPI);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    getSchool();
  }, [schoolID]);

  if (loading) {
    return <Loading key={0} />;
  }

  return (
    <>
      <h1>{school.name}</h1>
      <h2>{school.principal.name}</h2>
      <br />
      <a href={linkToMentors}>See Mentors</a>
    </>
  );
};

export default SchoolPage;
