import React, {useState} from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { logOut } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export const ProfileButton = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
    const dispatch = useDispatch()
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleLogOut = () => {
        dispatch(logOut());
		sessionStorage.clear();
		navigate('/login');
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Button
				variant="primary"
				onClick={handleClick}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				style={{paddingRight: '5px', minWidth: 0}}
			>
				<FontAwesomeIcon icon={faCircleUser} fontSize="23px" />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				<MenuItem onClick={handleClose}>Title 2</MenuItem>
				<Divider />
				<MenuItem onClick={handleLogOut}>{"Logout"}</MenuItem>
			</Menu>
		</>
	);
};
