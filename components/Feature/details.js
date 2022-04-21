import UsersIcon from 'assets/users.png'
import GroupIcon from 'assets/Group.png'
import MessageIcon from 'assets/message.png'
import PuzzleIcon from 'assets/puzzle.png'
import ListIcon from 'assets/list.png'
import PaperIcon from 'assets/paper.png'


const blueGradient = [ '#5CA1FE', '#217BF4' ],
  redGradient = [ '#FF858A', '#F04148' ],
  yellowGradient = [ '#FFD085', '#FFAF2E' ]

const data = [
  {
    title: "Members, Friends",
    description: "Members, Friends Connection ( like followers ), Private Message",
    colors: blueGradient,
    Icon: UsersIcon
  },
  {
    title: "Groups",
    description: "Your users can create groups to let other users to join and talk",
    colors: redGradient,
    Icon: GroupIcon
  },
  {
    title: "Forum",
    description: "Forum is ready by BBPress. Your users can make topics and talk.",
    colors: yellowGradient,
    Icon: MessageIcon
  }, 
  {
    title: "Custom Module",
    description: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    colors: blueGradient,
    Icon: PuzzleIcon
  },
  {
    title: "List Builder",
    description: "Members, Groups list can be modified by drag & drop live builder.",
    colors: redGradient,
    Icon: ListIcon
  },
  { 
    title: "List Scroll Effects",
    description: " 8 different scroll effects are ready.You can always change by your tastes.",
    colors: yellowGradient,
    Icon: PaperIcon
  }
]


export default data