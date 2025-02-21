import React from "react";

const imagesData = Array(30).fill({ src: "/assets/img.png" });
imagesData[0] = { src: "/assets/add.png" }; // First image is different

const ImageGallery = () => {
  const imagesPerRow = Math.ceil(imagesData.length / 3);
  const rows = [];

  for (let i = 0; i < 3; i++) {
    rows.push(imagesData.slice(i * imagesPerRow, (i + 1) * imagesPerRow));
  }

  return (
    <div className="p-4  flex flex-col gap-2">
      <div className="text-xl pb-2 flex items-center">
        <span>Gallery</span>
        <span className="ml-3">&#8594;</span>
      </div>
      <div className="overflow-x-auto">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-start w-max">
            {row.map((image, index) => (
              <div key={index} className="my-2 w-24 h-18 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-24 h-18 object-cover "
                />
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ImageGallery;
