import ImageProductOne from "../images/image-product-1.jpg";
import ImageProductTwo from "../images/image-product-2.jpg";
import ImageProductThree from "../images/image-product-3.jpg";
import ImageProductFour from "../images/image-product-4.jpg";
import ImageProductOneThumbnail from "../images/image-product-1-thumbnail.jpg";

const product =
{
  id: 1,
  images: [
    ImageProductOne,
    ImageProductTwo,
    ImageProductThree,
    ImageProductFour,
  ],
  thumbnail: ImageProductOneThumbnail,
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125,
  discount: 50,
  oldPrice: 250,
}

export default product;