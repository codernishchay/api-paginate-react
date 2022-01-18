import React from "react";
import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";
import ListTile from "./listTile";

export default function LoadPage() {
  const [pageNumber, setpageNumber] = useState(1);

  const [loading, setloading] = useState(true);
  const [users, setusers] = useState([]);
  const [hasMore, sethasMore] = useState(false);
  const observer = useRef();
  const lastuserRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setpageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  useEffect(() => {
    setloading(true);
    const fetch = async () => {
      console.log("Hello there");
      var endpoint = "https://randomuser.me/api/?";
      axios
        .get(endpoint, {
          params: { page: 1, results: 10 },
        })
        .then((res) => {
          for (let i = 0; i < 10; i++) {
            setusers((prev) => [...prev, res.data.results[i]]);
          }
          setloading(false);
          sethasMore(res.data.results.length > 0);
        });
    };
    fetch();
  }, [pageNumber]);

  return (
    <div>
      {users &&
        users.map((data, index) => {
          if (users.length == index + 1) {
            return (
              <div ref={lastuserRef} key={data.login.uuid}>
                <ListTile
                  key={data.login.uuid}
                  name={data.name.first}
                  phone={data.phone}
                  image={data.picture.medium}
                />
              </div>
            );
          } else {
            return (
              <ListTile
                key={data.login.uuid}
                name={data.name.first}
                phone={data.phone}
                image={data.picture.medium}
              />
            );
          }
        })}
      {loading && <div>loading .. </div>}
    </div>
  );
}
