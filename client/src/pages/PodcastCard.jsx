import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import FavouriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import HeadphonesIcon from '@mui/icons-material/Headphones';    

const PlayIcon = styled.div`
    padding: 10px;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: #900ff !important;
    color: white !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    position: absolute !important;
    top: 45%;
    right: 10%;
    display: none;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 16px 0 rgba(0, 0, 0, 0.1);
  $:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 04s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    fliter: brightness(1.3);
  }

  &:hover ${PlayIcon} {
    display: flex;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

const Favourite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_primary};
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #22223 !important;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0 0 0;
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
  font-size: 12px;
`;

const CreatersInfo = styled.div`
  dispaly: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;

const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;
const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;

const PodcastCard = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favourite>
            <FavouriteIcon style={{ width: "16px", height: "16px" }} />
          </Favourite>

          <CardImage src="data:image/jpeg;base64,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" />
        </Top>
        <CardInformation>
          <MainInfo>
            <Title>Rohit Sharma</Title>
            <Description>
              Most astounishing batsman to address the game
            </Description>
            <CreatersInfo>
              <Creator>
                <Avatar style={{ width: "26px", height: "26px" }}>U</Avatar>
                <CreatorName>Utkarsh Barsaiyan</CreatorName>
              </Creator>
              <Views></Views>
            </CreatersInfo>
          </MainInfo>
        </CardInformation>
      </div>

      <PlayIcon>
        {"video" === "video" ? (
            <PlayArrowIcon style={{ width: "28px", height: "28px" }}  />
        ) : ( 
            <HeadphonesIcon style={{ width: "28px", height: "28px" }} />
        )}
      </PlayIcon>
    </Card>
  );
};

export default PodcastCard;
