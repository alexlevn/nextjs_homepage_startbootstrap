import Head from "next/head";
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/leftMenu";
import Carousel from "../components/carousel";
import MoviesList from "../components/MoviesList";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopMenu />
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <LeftMenu />
        </div>

        <div className="col-lg-9">
          <Carousel />
          <div className="row">
            <MoviesList />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);
export default Home;
