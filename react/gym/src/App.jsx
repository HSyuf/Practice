import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuantity from "./sections/SuperQuantity";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuantity />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
}
export default App;
