import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import { Link } from 'react-router-dom'

const Notfound = () => {
	return (
		<ContentWrapper title="Siden blev ikke fundet">
			<p>Siden du leder efter findes ikke.</p>
			<p><Link to="/">Gå til forsiden</Link></p>
		</ContentWrapper>
	);
}

export default Notfound;
