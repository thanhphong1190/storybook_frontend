import { AuthorBlock, AuthorBlockProps } from '../src/components/blocks'
import renderer from 'react-test-renderer'
import fionaAvatarImg from '../static/example/Fiona.jpg'

const props: AuthorBlockProps = {
  avatarURL: fionaAvatarImg,
  authorName: 'Jasmine Green',
  authorBios:
    'Certificate 3 & 4 in fitness -Punch-fit boxing trainer -Bio-print practitioner',
  authorIntro: `Jasmine is a transformation specialist and has over 5 years experience in the fitness industry as a personal trainer.
      My first contact with Plus Fitness 24/7 was as a long time member of their health clubs, which have been around for many years and were well known in the Macarthur region. 
      I have spent my career in business banking and was fortunate enough to have Plus Fitness 24/7 as a client when they made the decision to develop the brand as a franchise. 
      It was very exciting seeing the process and watch the company sell it's first franchise,
      and before I knew it they had sold their 50th and so on. I had a relationship with some of the early franchisees and they had such great things to say about their experiences, 
      I developed a keen interest in the model and contemplated jumping ship many times from business banker to business owner.`
}

it('renders correctly', () => {
  const tree = renderer.create(<AuthorBlock {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
