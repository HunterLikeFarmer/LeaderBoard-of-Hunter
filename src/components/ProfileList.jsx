import React from "react";

// a 
const profileList = (prop) => {
	return (
		<>
			{prop.profiles.map((el, index) => {
				return (
					<li className="list-item" key={el.id}>
						<div className="content">
							<h1 className="rank">
								<small>#</small>
								{index + 1}
							</h1>
							<p className="name">{el.discord}</p>
							<p className="point">{el.points}</p>
						</div>
					</li>
				);
			})}
		</>
	);
};

export default profileList;
