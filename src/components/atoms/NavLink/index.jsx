

import styled from 'styled-components';
import { checkinColors } from '../../../theme/colors';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = styled.div`
  padding: 0.8em;
  margin: 0 1em;
  font-size: 0.9em;
  height: 100%;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${checkinColors.blue}` : `none`};
`;

export const NavLink = ({ isActive, href, title, click }) => {
  return (
    <StyledLink isActive={isActive} onClick={click}>
      <Link to={href}>{title}</Link>
    </StyledLink>
  );
};

NavLink.propTypes = {
  isActive: PropTypes.bool,
  to: PropTypes.string,
  title: PropTypes.string,
  click: PropTypes.func,
};


NavLink.defaultProps = {
  isActive: false,
  href: "/",
}
