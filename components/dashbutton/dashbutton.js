//gatsby stuff.. update for nextjs
import { Link } from "next/link";
// import './dashbutton.css';

//Large dashboard button
const DashBtn = ({props}) => (
	<Link styleName='dashbtn' to={props.to}>
		<span>
			<img src={props.dashicon} styleName='dashicon' alt={props.alt} />
		</span>
		<span styleName='dashbtntxt'>{props.dashbtntxt}</span>
	</Link>
);


export default DashBtn;
