
import { BrowserRouter,Link } from 'react-router-dom'
import './Portfolio.css'
import userContext from './Usecont'
import { useContext } from 'react'


const Portfolio = () => {
  const values=useContext(userContext);
 
  return (
    <>
    <p>{values}</p>
    <div className='header'>
    
<h1> Shopping</h1>
<ul>
  
    <li><Link to="/">Phone</Link> </li>
    <li><Link to="/Men">Men</Link></li>
    <li> <Link to="/watch">watch</Link> </li>
    <li> <Link to="/dress">Dress</Link></li>

</ul>
</div>

<div></div>
    </>
  )
}

export default Portfolio
