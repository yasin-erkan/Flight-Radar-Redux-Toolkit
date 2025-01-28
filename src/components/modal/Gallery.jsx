import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const Gallery = ({ data }) => {
  const arr = data?.large
    ? data?.large
    : data?.medium
    ? data?.medium
    : data?.thumbnails;
  return (
    <div className="gallery">
      {arr?.length > 0 ? (
        <Splide aria-label="My Favorite Images">
          {arr.map((item, key) => (
            <SplideSlide key={key}>
              <img src={item.src} alt="plane" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">
          <p> No aircraft photo</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
