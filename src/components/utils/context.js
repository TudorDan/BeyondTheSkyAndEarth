import React, { createContext, useState, useEffect } from "react";
import Api from "./Api";
import Loading from "./Loading";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSchools = async () => {
      try {
        const response = await Api.get("/schools");
        const schoolsFromAPI = response.data;
        setData(schoolsFromAPI);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    getSchools();
  }, []);

  // return different statement if api not working
  if (loading) {
    return <Loading key={0} />;
  }

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
