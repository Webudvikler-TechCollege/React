import { ContentWrapper } from "../../App/Elements/ContentWrapper/ContentWrapper"
import { PostersStyle } from './Posters.style'
import { PosterNav } from './PosterNav/PosterNav'
import { Outlet } from "react-router-dom"

export const Posters = () => {
  return (
    <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
      <PostersStyle>
        <div><PosterNav /></div>
        <div>
          <Outlet />
        </div>
      </PostersStyle>
    </ContentWrapper>
  )
}