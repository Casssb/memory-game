import card01 from '../../assets/characters/01eric-cartman.webp';
import card02 from '../../assets/characters/02kenny-mccormick.webp';
import card03 from '../../assets/characters/03kyle-broflovski.webp';
import card04 from '../../assets/characters/04stan-marsh.webp';
import card05 from '../../assets/characters/05butters-stotch.webp';
import card06 from '../../assets/characters/06randy-marsh.webp';
import card07 from '../../assets/characters/07mr-garrison.webp';
import card08 from '../../assets/characters/08clyde-donovan.webp';
import card09 from '../../assets/characters/08craig-tucker.webp';
import card10 from '../../assets/characters/09gerald-broflovski.webp';
import card11 from '../../assets/characters/10heidi-turner.webp';
import card12 from '../../assets/characters/11ike-broflovski.webp';
import card13 from '../../assets/characters/12Jimbo.webp';
import card14 from '../../assets/characters/13Jimmy-valmer.webp';
import card15 from '../../assets/characters/14cartmans-mom.webp';
import card16 from '../../assets/characters/15grandpa-marsh.webp';
import card17 from '../../assets/characters/16mr-mackey.webp';
import card18 from '../../assets/characters/17pc-principal.webp';
import card19 from '../../assets/characters/18scott-malkinson.webp';
import card20 from '../../assets/characters/19sharon-marsh.webp';
import card21 from '../../assets/characters/20sheila-broflovski.webp';
import card22 from '../../assets/characters/21shelly-marsh.webp';
import card23 from '../../assets/characters/22stephen-stotch.webp';
import card24 from '../../assets/characters/23strong-woman.webp';
import card25 from '../../assets/characters/24stuart-mcCormick.webp';
import card26 from '../../assets/characters/25tolkien-black.webp';
import card27 from '../../assets/characters/26Towelie.webp';
import card28 from '../../assets/characters/27Tweek.webp';
import card29 from '../../assets/characters/28Wendy-testaburger.webp';
import card30 from '../../assets/characters/29father-maxi.webp';
import card31 from '../../assets/characters/30goth-kids.webp';
import card32 from '../../assets/characters/31mayor-mcdaniels.webp';
import card33 from '../../assets/characters/32terrance-and-phillip.webp';
import card34 from '../../assets/characters/33timmy.webp';
import card35 from '../../assets/characters/34pip.webp';
import card36 from '../../assets/characters/35chef.webp';
import card37 from '../../assets/characters/36mr-hankey.webp';
import card38 from '../../assets/characters/37officer-barbrady.webp';
import card39 from '../../assets/characters/38biggayal.webp';
import card40 from '../../assets/characters/39santa.webp';
import card41 from '../../assets/characters/40Jesus.webp';
import card42 from '../../assets/characters/41satan.webp';
import card43 from '../../assets/characters/42professor-chaos.webp';
import card44 from '../../assets/characters/43mysterion.webp';
import card45 from '../../assets/characters/44the-coon.webp';
import card46 from '../../assets/characters/45mosquito.webp';
import card47 from '../../assets/characters/46human-kite.webp';
import card48 from '../../assets/characters/47mr-hat.webp';

const cardList = [
  { image: card01, clicked: false, name: 'Eric Cartman' },
  { image: card02, clicked: false, name: 'Kenny McCormick' },
  { image: card03, clicked: false, name: 'Kyle Broflovski' },
  { image: card04, clicked: false, name: 'Stan Marsh' },
  { image: card05, clicked: false, name: 'Butters Stotch' },
  { image: card06, clicked: false, name: 'Randy Marsh' },
  { image: card07, clicked: false, name: 'Mr Garrison' },
  { image: card08, clicked: false, name: 'Clyde Donovan' },
  { image: card09, clicked: false, name: 'Craig Tucker' },
  { image: card10, clicked: false, name: 'Gerald Broflovski' },
  { image: card11, clicked: false, name: 'Heidi Turner' },
  { image: card12, clicked: false, name: 'Ike Broflovski' },
  { image: card13, clicked: false, name: 'Jimbo' },
  { image: card14, clicked: false, name: 'Jimmy Valmer' },
  { image: card15, clicked: false, name: 'Ms Cartman' },
  { image: card16, clicked: false, name: 'Grandpa Marsh' },
  { image: card17, clicked: false, name: 'Mr Mackey' },
  { image: card18, clicked: false, name: 'PC Principal' },
  { image: card19, clicked: false, name: 'Scott Malkinson' },
  { image: card20, clicked: false, name: 'Sharon Marsh' },
  { image: card21, clicked: false, name: 'Sheila Broflovski' },
  { image: card22, clicked: false, name: 'Shelly Marsh' },
  { image: card23, clicked: false, name: 'Stephen Stotch' },
  { image: card24, clicked: false, name: 'Strong Woman' },
  { image: card25, clicked: false, name: 'Stuart McCormick' },
  { image: card26, clicked: false, name: 'Tolkien Black' },
  { image: card27, clicked: false, name: 'Towelie' },
  { image: card28, clicked: false, name: 'Tweek' },
  { image: card29, clicked: false, name: 'Wendy Testaburger' },
  { image: card30, clicked: false, name: 'Father Maxi' },
  { image: card31, clicked: false, name: 'Goth Kids' },
  { image: card32, clicked: false, name: 'Mayor McDaniels' },
  { image: card33, clicked: false, name: 'Terrance & Phillip' },
  { image: card34, clicked: false, name: 'Timmy' },
  { image: card35, clicked: false, name: 'Pip' },
  { image: card36, clicked: false, name: 'Chef' },
  { image: card37, clicked: false, name: 'Mr Hanky' },
  { image: card38, clicked: false, name: 'Officer Barbrady' },
  { image: card39, clicked: false, name: 'Big Gay Al' },
  { image: card40, clicked: false, name: 'Santa' },
  { image: card41, clicked: false, name: 'Jesus' },
  { image: card42, clicked: false, name: 'Satan' },
  { image: card43, clicked: false, name: 'Professor Chaos' },
  { image: card44, clicked: false, name: 'Mysterion' },
  { image: card45, clicked: false, name: 'The Coon' },
  { image: card46, clicked: false, name: 'Mosquito' },
  { image: card47, clicked: false, name: 'Human Kite' },
  { image: card48, clicked: false, name: 'Mr Hat' },
];

export default cardList;
