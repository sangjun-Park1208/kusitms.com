/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/common/logo.svg";
import logoText from "../images/common/logo-text.svg";
import { ReactComponent as IconMenu } from "../images/common/icon-menu.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import Sidebar from "./SideBar";

interface CategoryOption {
  title: string;
  link: string;
}

const CATEGORY_OPTIONS = [
  { title: "학회소개", link: "/" },
  { title: "프로젝트", link: "/projects" },
  { title: "후기", link: "/reviews" },
  { title: "리크루팅", link: "/recruit" },
  { title: "강연회", link: "/k" },
];

const Header = (props: any) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedOption, setSelectedOption] = useState<string>("학회소개");

  const isMobile = useIsMobile();

  const onClickCategory = (title: string, link: string) => {
    setSelectedOption(title);
    navigate(link);
  };

  useEffect(() => {
    CATEGORY_OPTIONS.map((option: CategoryOption) => {
      if (pathname.includes(option.link)) setSelectedOption(option.title);
    });
  }, [pathname]);

  /// mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  if (isMobile) {
    return (
      <MobileHeaderContainer>
        <LogoContainer>
          <img src={logo} />
          <img src={logoText} />
        </LogoContainer>
        <IconMenuCustom onClick={toggleSide} />
        {isOpen && (
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            categories={CATEGORY_OPTIONS}
          />
        )}
      </MobileHeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} />
        <img src={logoText} />
      </LogoContainer>
      <Categories>
        {CATEGORY_OPTIONS.map((option: CategoryOption, index: number) => {
          return (
            <Category
              selected={option.title === selectedOption}
              key={index}
              onClick={() => {
                onClickCategory(option.title, option.link);
              }}
            >
              {option.title}
            </Category>
          );
        })}
      </Categories>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 72px;

  background: #151519;

  padding-left: 48px;
  padding-right: 76px;
  font-family: "SUIT";

  z-index: 100000;
  overflow-x: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;

  cursor: pointer;
`;

const Categories = styled.div`
  display: flex;
  gap: 56px;
`;

const Category = styled.div<{ selected: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.2px;

  color: ${(props) => (props.selected ? "#FFF" : "#90909A")};

  cursor: pointer;
`;

/// /////////////////////////////////////

const MobileHeaderContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 47px;

  background: #151519;

  padding-left: 18px;
  padding-right: 28px;
  font-family: "SUIT";

  z-index: 100000;
  overflow-x: hidden;
`;

const IconMenuCustom = styled(IconMenu)`
  cursor: pointer;
`;
