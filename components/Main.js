import Promo from './Promo';
import Aboutme from './Aboutme';
import Info from './Info';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import Whyme from './Whyme';
import Calltoactionbox from './Calltoactionbox';

export default function Main() {
  return (
    <main className="content">
      <Promo />
      <Aboutme />
      <Info />
      <Portfolio />
      <Feedback />
      <Whyme />
      <Calltoactionbox />
    </main>
  )
}