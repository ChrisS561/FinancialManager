import React from "react";
import SideNav, {
	Toggle,
	Nav,
	NavItem,
	NavIcon,
	NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "../Components/ComponentsCSS/Sidebar.css";


export default function Sidebar() {
    const navigate = useNavigate();
	return (
		<div>
			<SideNav
				onSelect={(selected) => {
					console.log(selected);
                    navigate(selected);
				}}
                className="sidenav"
			>
				<SideNav.Toggle />
				<SideNav.Nav defaultSelected="/home">
					<NavItem eventKey="home">
						<NavIcon>
							<i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
						</NavIcon>
						<NavText>Home</NavText>
					</NavItem>
					<NavItem eventKey="/expenses">
						<NavIcon>
							<i className="fa fa-money" style={{ fontSize: "1.75em" }} />
						</NavIcon>
						<NavText>Expenses</NavText>
						<NavItem eventKey="/tracking">
							<NavText>Tracking & Analysis</NavText>
						</NavItem>
						{/* <NavItem eventKey="charts/barchart">
							<NavText>Bar Chart</NavText>
						</NavItem> */}
					</NavItem>
					<NavItem eventKey="spending Plan">
						<NavIcon>
							<FontAwesomeIcon
								icon={faPiggyBank}
								style={{ fontSize: "1.75em" }}
							/>
						</NavIcon>
						<NavText>Spending Plan</NavText>
						<NavItem eventKey="/budget">
							<NavText>Budget</NavText>
                        </NavItem>
                        <NavItem eventKey="/chart">
							<NavText>Pie Chart</NavText>
						</NavItem>
					</NavItem>
                    <NavItem eventKey="salary">
                        <NavIcon>
                        <FontAwesomeIcon icon={faHandHoldingDollar} style={{fontSize:"1.75em"}} />
                        </NavIcon>
                        <NavText>Income</NavText>
                        <NavItem eventKey="/income">
                            <NavText>Earnings</NavText>
                            </NavItem>
                    </NavItem>
                    <NavItem eventKey="/">
                        <NavIcon>
                        <FontAwesomeIcon icon={faUser} style={{fontSize:"1.75em"}} />
                        </NavIcon>
                        <NavText>Profile</NavText>
                    </NavItem>
                    <NavItem eventKey="/settings">
                        <NavIcon>
                        <FontAwesomeIcon icon={faGear} style={{fontSize:"1.75em"}} />
                        </NavIcon>
                        <NavText>Settings</NavText>
                    </NavItem>
				</SideNav.Nav>
			</SideNav>
		</div>
	);
}
