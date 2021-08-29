import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';

const Header = ({ setCoordinates }) => {
	const classes = useStyles();
	const [autoComplete, setAutoComplete] = useState(null);

	const onLoad = (autoC) => setAutoComplete(autoC);
	const onPlaceChanged = () => {
		const lat = autoComplete.getPlace().geometry.location.lat();
		const lng = autoComplete.getPlace().geometry.location.lng();

		setCoordinates({ lat, lng });
	};

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Typography varient="h5" className={classes.title}>
					Travel Advisor
				</Typography>
				<Box display="flex">
					<Typography varient="h6" className={classes.title}>
						Explore new places
					</Typography>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search..."
								className={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
							/>
						</div>
					</Autocomplete>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
