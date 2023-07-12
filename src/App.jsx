import ProfileList from "./components/ProfileList";
import "./assets/style/App.css";
import { useEffect, useState } from "react";

function App() {
	const [limit, setLimit] = useState(-1);
	const [profile, setProfile] = useState(null);
	//const [num, setNum] = useState(1);
	const [state, setState] =useState(false);

	
	async function getData() {
		let res = null;
		if (limit >= 0) {
			res = await fetch(
				`https://api.hackillinois.org/profile/leaderboard/?limit=${limit}`
			);
		} else {
			res = await fetch("https://api.hackillinois.org/profile/leaderboard/");
		}
		const data = await res.json();
		setProfile(data.profiles);
	}

	useEffect(() => {getData();}, [state]);

	function handleKeyDown(event) {
		const data = event.target.value;
		if (event.keyCode == 13) {
			setState(!state);
			setLimit(data);
			setProfile(null);
		}
	}

	/*function handleKeyDown2(event){
		const data = event.target.value;
		    setNum(data);
	}

	function onClick(){
			setState(!state)
			setLimit(num);
		    setProfile(null);
		
		
	}*/

	return (
		<>
			<h1 className="title">LeaderBoard</h1>
			<input type="number" onKeyDown={handleKeyDown}/>
			<div className="list">
				{profile && <ProfileList profiles={profile} />}
			</div>
		</>
	);
}

export default App;
