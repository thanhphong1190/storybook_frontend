import { LocationCard } from '../src/components/cards'
import accessIcon from '../src/static/imgs/access.png'
import allTime from '../src/static/imgs/24-7.png'
import classesGroup from '../src/static/imgs/classes_group.png'
import equipment from '../src/static/imgs/strength-cardio-equipment.png'
import freeProgram from '../src/static/imgs/free-fitness-program.png'
import noLockContract from '../src/static/imgs/no-lock-in-contracts.png'

const props = {
  title: 'Albion Park',
  content: 'Unit 4, 9 Durgadin Drive, Albion Park Rial NSW 2527',
  footerText: '02 4257 0340',
  gymPageUrl: '/',
  features: [
    {
      featureName: 'No lock-in contracts',
      featureIcon: noLockContract
    },
    {
      featureName: 'Free fitness programs',
      featureIcon: freeProgram
    },
    {
      featureName: '24/7 access',
      featureIcon: allTime
    },
    {
      featureName: 'Group classes',
      featureIcon: classesGroup
    },
    {
      featureName: 'Strength Cardio Equipment',
      featureIcon: equipment
    },
    {
      featureName: 'Access all gyms',
      featureIcon: accessIcon
    }
  ]
}

export const locationCard = () => <LocationCard {...props} />

export default {
  title: 'Cards',
  component: locationCard
}
