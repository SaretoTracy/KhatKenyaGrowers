import React, { useState } from 'react';
import styled from 'styled-components';
import Thumbnail from '../Thumbnail/Thumbnail';
import image1 from '/home/developer/khat/src/assets/khat1.jpg';
import image2 from '/home/developer/khat/src/assets/khat2.jpg';
import image3 from '/home/developer/khat/src/assets/khat3.jpeg';

const images = [image1, image2, image3];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
  
    return (
        <GalleryContainer>
          <MainImageContainer>
            <MainImage src={selectedImage} alt="Selected" />
            <Overlay>
              <TextContent>
                <h2>Our Products</h2>
                <p>Explore our high-quality khat products below. Click on any thumbnail to see a larger version of the image.</p>
              </TextContent>
              <Thumbnails>
                {images.map((img, index) => (
                  <Thumbnail key={index} src={img} onClick={() => setSelectedImage(img)} />
                ))}
              </Thumbnails>
            </Overlay>
          </MainImageContainer>
        </GalleryContainer>
      );
    };
    
    export default Gallery;
    
    const GalleryContainer = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    `;
    
    const MainImageContainer = styled.div`
      position: relative;
      width: 100%;
      max-width: 1200px;
    `;
    
    const MainImage = styled.img`
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `;
    
    const Overlay = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.5); /* Optional: to make text more readable */
      border-radius: 10px;
    `;
    
    const TextContent = styled.div`
      flex: 1;
      color: white;
    
      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
    
      p {
        font-size: 1.2rem;
      }
    `;
    
    const Thumbnails = styled.div`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left: 2rem;
    `;