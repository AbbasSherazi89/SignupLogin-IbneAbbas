import { React, useEffect, useState } from "react";

const Fetchdata = (url) => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(`Error ${err}`));
  }, [url]);
  return {data}
};

export default Fetchdata;
