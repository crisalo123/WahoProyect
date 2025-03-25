import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from '../../ui';
import { dataCarousel } from '../../const/mockupData';

import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaAngleDoubleRight
    className={`${className} !text-primary-700`}
      style={{ ...style,  fontSize: '30px' }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaAngleDoubleLeft
    className={`${className} !text-primary-700`}
      style={{ ...style,  fontSize: '30px' }}
      onClick={onClick}
    />
  );
};

export const CarruselHome = () => {

    const settings = {
        dots: true,  // Muestra los puntos de navegación
        infinite: true,  // Permite el desplazamiento infinito
        speed: 500,  // Velocidad de transición
        slidesToShow: 3,  // Número de slides visibles
        slidesToScroll: 1,  // Número de slides que se desplazan
        autoplay: true,  // Activa el auto-slide
        autoplaySpeed: 3000,  // Tiempo entre cada slide
        prevArrow: <CustomNextArrow  />,
        nextArrow: <CustomPrevArrow  />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]

      };

  return (
    <div className="w-10/12 justify-center mx-auto p-6 ">
        
    <Slider {...settings }  className='  mr-4 '  >
      {dataCarousel.map((item) => (
          <Card  key={item.title}  className="md:!w-10/12 justify-center md:mx-4 rounded-b-none !rounded-t-2xl border-primary-700">
            <div className="flex justify-center pt-4">
                <img src={item.img} alt={item.title} className="w-72 h-48 object-cover rounded-md" />
            </div>
            <div className='text-center mt-3'>
                <h1>{item.title}</h1>
                <p className='font-medium'>{item.label}</p>
                <p>Mas información aquí</p>
            </div>
            <div className='flex justify-center mt-4  '>
                <Button className='bg-gradient-to-b from-[#a20f5c] to-[#d53287] rounded-l-none rounded-r-none'>Añadir al carrito</Button>
                <Button className='w-40 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-r-none rounded-l-none'>Comprar</Button>
            </div>
          </Card>
      ))}
    </Slider>
    </div>
  )}


