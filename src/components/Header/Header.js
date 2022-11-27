//HOOKS
import { useAuth } from "../../context/auth";

//COMPONENTS
import { Outlet } from "react-router-dom";

//STYLES
import { Nav, Ul, Li, Link, Image, Span, Exit, IconContainer } from "./styles";

//IMAGES
import edit from "../../assets/images/edit.svg";
import home from "../../assets/images/home.svg";
import profile from "../../assets/images/profile.svg";
import logout from "../../assets/images/logout.svg";
import { BiCalendarEvent } from "react-icons/bi";

export const Header = () => {
  const { handleLogout } = useAuth();
  const onLogout = () => {
    handleLogout();
  };

  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <Link to="/home/posts">
              <Image src={edit} />
              <Span>Minhas Postagens</Span>
            </Link>
          </Li>

          <Li>
            <Link to="/home/events">
              <IconContainer>
                <BiCalendarEvent size={40} />
              </IconContainer>
              <Span>Eventos</Span>
            </Link>
          </Li>

          <Li>
            <Link to="/home/profile">
              <Image src={profile} />
              <Span>Perfil</Span>
            </Link>
          </Li>
          <Li>
            <Link to="/home">
              <Image src={home} />
              <Span>Home</Span>
            </Link>
          </Li>

          <Exit>
            <Link to="/login" onClick={onLogout}>
              <Image src={logout} />
              <Span>Sair</Span>
            </Link>
          </Exit>
        </Ul>
      </Nav>
      <Outlet />
    </>
  );
};
