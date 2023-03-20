/* eslint-disable */
import * as s from "./styles";
import { ReactComponent as InstagramIcon } from "../../images/projects/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/projects/icons/GithubIcon.svg";
import { ReactComponent as DetailLinkIcon } from "../../images/projects/icons/DetailLinkIcon.svg";
import { IMeetupDetails } from "pages/Projects/ProjectsPage";
import { useEffect, useRef } from "react";

const ProjectDetail = (
  {
    cardinal,
    name,
    intro, 
    type, 
    team, 
    meetup_id, 
    one_line_intro, 
    logo_url,
    poster_url,
    instagram_url,
    github_url,
    app_url,
    start_date,
    end_date,
    setModalOpen
  }: IMeetupDetails | any) => {
  
    
    const modalRef = useRef<any>(null);
    
    useEffect(() => {
      const eveneHandler = (e: React.MouseEvent<HTMLElement> | MouseEvent) => {
        if(modalRef.current && !modalRef.current.contains(e.target)){
          closeModal();
        }
      };
      document.addEventListener('mousedown', eveneHandler);
      return () => document.removeEventListener('mousedown', eveneHandler);
    });
    
    const closeModal = () => {
      setModalOpen(false);
    };

    useEffect(() => {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;
      `;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }, []);

    return (
      <s.Wrapper ref={modalRef}>
        <s.Container>
          <s.TopContainer>
            <s.Intro>
              <s.Title>{name}</s.Title>
              <s.OneLineIntro>{one_line_intro}</s.OneLineIntro>
            </s.Intro>

            <s.IconContainer>
              <s.IconBackground>
                <InstagramIcon />
              </s.IconBackground>

              <s.IconBackground>
                <GithubIcon />
              </s.IconBackground>

              <s.IconBackground>
                <DetailLinkIcon />
              </s.IconBackground>
            </s.IconContainer>
          </s.TopContainer>

          <s.DetailContainer>
            <s.ItemPoster src={poster_url} />
            <s.ProjectIntroduce>
              <s.ProjectAbstract>
                <s.AbstractTitle>프로젝트 요약</s.AbstractTitle>
                <s.ProjectAbstractContent>
                  <s.AbstractColumnContainer>
                    <s.AbstractColumn>진행 기수</s.AbstractColumn>
                    <s.AbstractColumn>프로젝트 형태/기간</s.AbstractColumn>
                    <s.AbstractColumn>팀 구성</s.AbstractColumn>
                  </s.AbstractColumnContainer>

                  <s.VerticalLine />

                  <s.AbstractInfoText>
                    <s.AbstractInfoTextItem>
                      {cardinal}기
                    </s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`${type} (${start_date} - ${end_date})`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`기획 (${team.planner.length}) : 홍길동, 홍길동, 홍길동`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`디자인 (${team.designer.length}) : 홍길동`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`프론트엔드 (2) : 홍길동, 홍길동`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`백엔드 (2) : 홍길동, 홍길동`}</s.AbstractInfoTextItem>
                  </s.AbstractInfoText>
                </s.ProjectAbstractContent>
              </s.ProjectAbstract>

              <s.ProjectIntroText>
                <s.ProjectIntroTextTitle>프로젝트 설명</s.ProjectIntroTextTitle>
                <s.ProjectIntroTextContent>
                  {intro}
                </s.ProjectIntroTextContent>
              </s.ProjectIntroText>
            </s.ProjectIntroduce>
          </s.DetailContainer>
        </s.Container>
      </s.Wrapper>
    );
};

export default ProjectDetail;
