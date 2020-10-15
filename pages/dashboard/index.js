import React from "react";
import { Link } from "next/link";

import { useCurrentUser } from "../../lib/hooks";

const DashboardPage = () => {
	const [user] = useCurrentUser();
	const { role } = user || {};

	if  (role  === "DM") {
		return (
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
		);
	}
	return (
		<div>
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
		</div>
	);
};

export default DashboardPage;
