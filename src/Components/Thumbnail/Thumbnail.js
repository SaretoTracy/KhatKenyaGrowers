import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ src, onClick }) => {
  return (
    <ThumbnailContainer onClick={onClick}>
      <ThumbnailImage src={src} alt="Thumbnail" />
    </ThumbnailContainer>
  );
};

export default Thumbnail;

const ThumbnailContainer = styled.div`
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThumbnailImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
