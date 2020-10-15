import React from "react";
import { Link } from 'react-router-dom';

const DashboardPage = () => {
	return (
		<div>
			<div>
				<Link href="/myshops">
					<button>
						<span>
							<img src="" />
						</span>
						<span>My Shops</span>
					</button>
				</Link>
				;
				<Link href="/mygroup">
					<button>
						<span>
							<img src="" />
						</span>
						<span>My Group</span>
					</button>
				</Link>
			</div>

      {/* player dashboard */}
			{/* <div>
				<Link href="/shops">
					<button>
						<span>
							<img src="" />
						</span>
						<span>Shops</span>
					</button>
				</Link>
				<Link href="/profile">
					<button>
						<span>
							<img src="" />
						</span>
						<span>Profile</span>
					</button>
				</Link>
			</div> */}
		</div>
	);
};

export default DashboardPage;
