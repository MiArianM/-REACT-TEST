import ContactForm from "./Form";
import ImageSlider from "./ImageSlider";
import Posts from "./Post";
import Counter from "./Counter";

const Home = () => {
  return (
    <div>
      <h1>صفحه اصلی</h1>
      <ContactForm />
      <Counter />
      <ImageSlider />
      <Posts />
    </div>
  );
};

export default Home;
