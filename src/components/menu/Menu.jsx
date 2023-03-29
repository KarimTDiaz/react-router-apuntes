import { MenuItem, MenuList, StyledMenu, MenuLink } from './styles';

const Menu = () => {
	return (
		<StyledMenu>
			<MenuList>
				<MenuItem>
					<MenuLink to='/'>Home</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to='/projects'>Projects</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to='/contact'>Contact</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to='/about'>About</MenuLink>
				</MenuItem>
			</MenuList>
		</StyledMenu>
	);
};

export default Menu;
