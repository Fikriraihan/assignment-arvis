import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import FooterBanner from "../../components/FooterBanner";
import HeroBanner from "../../components/HeroBanner";
import Product from "../../components/Product";
import { client } from "../../lib/client";
import { auth } from "../../pages/firebase.config";
import { useRouter } from "next/router";
// import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  const [user, setUser] = useState({});
  const router = useRouter();
  useEffect(() => {
    console.log(auth);
    setTimeout(() => {
      setUser(auth);
      console.log("user 3", auth);
    }, 500);
  }, []);

  useEffect(() => {
    // console.log(auth);
    console.log("user", user);
    // if (user.currentUser == null) {
    //   router.push("/");
    // }
  }, [user]);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Nike of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
