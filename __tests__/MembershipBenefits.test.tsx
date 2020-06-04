import renderer from 'react-test-renderer'
import {
  MembershipBenefits,
  MembershipBenefitsProps
} from '../src/components/membership-benefits/MembershipBenefits'

const props: MembershipBenefitsProps = {
  title: 'Membership benefits',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et`,
  benefits: [
    {
      text: `All Strength & Cardio Equipments`,
      iconImgURL: '/example/benefits/strength-cardio-equipment.original.png'
    },
    {
      text: `Unlimited Virtual Classes`,
      iconImgURL: '/example/benefits/unlimited-virtual-classes.png'
    },
    {
      text: `24 hr access, 7 Days a Week`,
      iconImgURL: '/example/benefits/24-7.original.png'
    },
    {
      text: `No Lock In Contracts`,
      iconImgURL: '/example/benefits/no-lock-in-contracts.original.png'
    },
    {
      text: `FREE Fitness Programs`,
      iconImgURL: '/example/benefits/free-fitness-program.original.png'
    },
    {
      text: `Access all 180+ gyms in AU & NZ`,
      iconImgURL: '/example/benefits/access.original.png'
    }
  ]
}

it(`Membership benefits renders correctly`, () => {
  const tree = renderer.create(<MembershipBenefits {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
