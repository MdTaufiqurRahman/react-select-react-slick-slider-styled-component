import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body} }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src='https://github.com/bradtraversy/huddle_styled_components/blob/main/public/images/illustration-grow-together.svg' alt='' />
      </div>
    </StyledCard>
  )
}