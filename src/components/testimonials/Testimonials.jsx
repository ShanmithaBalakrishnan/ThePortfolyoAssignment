import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      "image": {
        "public_id": "portfolio3/1710357726628-c4dr18.png",
        "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png"
      },
      "name": "Samantha Wu",
      "review": "I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results. His ability to understand complex requirements and implement efficient solutions was truly impressive. I would highly recommend him to any organization looking for a talented developer.",
      "position": "Software Engineer",
      "enabled": true,
      "_id": "65f1fcdf0556c3f887e9d74c"
    },
    {
      "image": {
        "public_id": "portfolio3/1710357705657-aimydg.png",
        "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357705657-aimydg.png"
      },
      "name": "David Rodriguez",
      "review": "Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code that exceeded our expectations. His proactive approach to problem-solving and effective communication made him a valuable member of our team\n",
      "position": "Project Manager",
      "enabled": true,
      "_id": "65f1fcca0556c3f887e9d6e8"
    },
    {
      "image": {
        "public_id": "portfolio3/1710357683739-tqeav.png",
        "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357683739-tqeav.png"
      },
      "name": " Emily Chen",
      "review": "I had the pleasure of collaborating with John on a complex web application project. His ability to translate design concepts into functional, user-friendly features was impressive. John consistently delivered high-quality work and was always open to feedback. I look forward to working with him again in the future.\n\n",
      "position": " Emily Chen",
      "enabled": true,
      "_id": "65f1fcb30556c3f887e9d662"
    },
    {
      "image": {
        "public_id": "portfolio3/1710357647030-pi5cis.png",
        "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      },
      "name": " Michael Lee",
      "review": "John is a skilled developer with a keen eye for detail. He played a crucial role in our team, consistently producing clean, efficient code. His collaborative nature and willingness to take on new challenges make him an invaluable asset to any project.\"",
      "position": " Lead Developer",
      "enabled": true,
      "_id": "65f1fc8f0556c3f887e9d4e5"
    },
    {
      "image": {
        "public_id": "portfolio3/1710357534893-2s9b5d.png",
        "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357534893-2s9b5d.png"
      },
      "name": "Sarah Johnson",
      "review": "Working with John was an absolute delight. Their professionalism and technical prowess were evident from day one. He consistently delivered top-notch code and went above and beyond to ensure the success of our project. I highly recommend him for any development endeavor",
      "position": " Product Manager",
      "enabled": true,
      "_id": "65f1fc1f0556c3f887e9d31d"
    }
  ];
  return (
    <section id="testmonials">
      <h5>Feedback</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.review}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials