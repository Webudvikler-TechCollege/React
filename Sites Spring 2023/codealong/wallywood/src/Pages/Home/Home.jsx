import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper"
import SlideWrapper from "../../Components/App/SlideWrapper/SlideWrapper"
import { useAuth } from "../../Components/Providers/AuthProvider"

const Home = () => {
	const { loginData } = useAuth()
	console.log(loginData)

  return (
	<>
		<SlideWrapper />
		<ContentWrapper 
		title="Velkommen"
		description="Her finder du nye og gamle film plakater"
		subtitle="Alt i filmplakater">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, necessitatibus dicta, neque dignissimos odio fugiat enim fuga temporibus soluta recusandae itaque illo vitae, totam dolore distinctio praesentium accusantium. Maxime, aspernatur.
			<p>{loginData ? 'Du er logget ind' : 'Du er IKKE logget ind'}</p>
		</ContentWrapper>
	</>
  )
}

export default Home