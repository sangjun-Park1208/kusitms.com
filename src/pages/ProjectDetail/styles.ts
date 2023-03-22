/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(21, 21, 25, 0.9);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SUIT";
  color: white;
  margin-top: 100px;
  max-width: 1180px;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

export const OneLineIntro = styled.div`
  font-size: 20px;
  color: #e2e2eb;
  margin-top: 24px;
`;

export const IconContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 48px;
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #90909a;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  margin-right: 20px;
  cursor: pointer;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ItemPoster = styled.img`
  width: 580px;
  height: 820px;
  border-radius: 10px;
`;

export const ProjectIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 580px;
  height: 820px;
  color: white;
`;

export const ProjectAbstract = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 343px;
  border-radius: 10px;
  background-color: #5d5e67;
`;

export const AbstractTitle = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  font-size: 24px;
  font-weight: bold;
`;

export const ProjectAbstractContent = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
`;

export const AbstractColumnContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
`;

export const AbstractColumn = styled.div`
  font-size: 20px;
`;

export const VerticalLine = styled.div`
  border: 1px solid;
  width: 0.1px;
  height: 210px;
  border-color: #90909a;
  margin-left: 30px;
`;

export const AbstractInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  margin-left: 30px;
  height: 210px;
`;

export const AbstractInfoTextItem = styled.div``;

export const ProjectIntroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 457px;
  border-radius: 10px;
  background-color: #2f3038;
`;

export const ProjectIntroTextTitle = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  font-size: 24px;
  font-weight: bold;
`;

export const ProjectIntroTextContent = styled.div`
  width: 500px;
  line-height: 40px;
  margin-top: 24px;
  margin-left: 40px;
  margin-bottom: 24px;
  font-size: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  };
`;
