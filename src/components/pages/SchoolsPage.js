import React, { useContext } from "react";
import { DataContext } from "../utils/context";

function SchoolsPage() {
  const schools = useContext(DataContext);
  const linkToSchools = `/schools/`;
  console.log(JSON.stringify(schools.data) + " ceva ");

  return (
    <div className="App">
      {schools.data?.map((school) => {
        const { id, name } = school;
        return (
          <h2 key={id}>
            <a href={linkToSchools + id}>{name}</a>
          </h2>
        );
      })}
    </div>
  );
}

export default SchoolsPage;
