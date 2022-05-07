import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Typography, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import React from "react";
import "./Bar.css"
import { useAuth } from "../../../Authentication/use-auth";

function Bar(props) {
	const auth = useAuth();
	let username = auth.user ? auth.user.data.login : "Default";

	const pathname = useLocation().pathname;
	const assignColor = (path) => pathname === path ? "primaryDark" : "primary";
	const assignWeight = (path) => pathname === path ? "bold" : "regular";

	const textStyle = {
		tasks: {
			color: assignColor("/tasks"),
			weight: assignWeight("/tasks"),
		},
		achievements: {
			color: assignColor("/achievements"),
			weight: assignWeight("/achievements"),
		},
		login: {
			color: assignColor("/login"),
			weight: assignWeight("/login"),
		},
		signup: {
			color: assignColor("/signup"),
			weight: assignWeight("/signup"),
		}
	}

	function signed() {
		return(
		<Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
			<Link to="/tasks" style={{ textDecoration: 'none' }}>
				<Typography sx={{fontWeight: textStyle.tasks.weight}} color={textStyle.tasks.color}>Tasks</Typography>
			</Link>
			<Link to="/achievements" style={{ textDecoration: 'none' }}>
				<Typography sx={{fontWeight: textStyle.achievements.weight}} color={textStyle.achievements.color}>Achievements</Typography>
			</Link>
				<Typography color="primary">{username}</Typography>
				{/*<Typography color="primary">Username</Typography>*/}
				<Avatar alt="Username" sx={{ bgcolor: deepPurple[500] }}>US</Avatar>
		</Stack>
		);
	}

	function unsigned() {
		return(
		<Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
				<Link to="/login" style={{ textDecoration: 'none' }}>
					<Typography sx={{fontWeight: textStyle.login.weight}} color={textStyle.login.color}>Log In</Typography>
				</Link>
				<Link to="/signup" style={{ textDecoration: 'none' }}>
					<Typography sx={{fontWeight: textStyle.signup.weight}} color={textStyle.signup.color}>Sign Up</Typography>
				</Link>
		</Stack>
		);
	}

	return (
		props.signed ? signed() : unsigned()
	);
}

export default Bar;
