import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const topRes = await fetch("https://qtify-backend-labs.crio.do/albums/top");
        const newRes = await fetch("https://qtify-backend-labs.crio.do/albums/new");

        const topAlbums = await topRes.json();
        const newAlbums = await newRes.json();

        setSearchData([...topAlbums, ...newAlbums]);
      } catch (error) {
        console.error("Failed to fetch search data", error);
      }
    };

    fetchSearchData();
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text="Give Feedback"/>
    </nav>
  );
}

export default Navbar;
