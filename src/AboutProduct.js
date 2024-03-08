import { useParams, useNavigate } from 'react-router-dom';
import { data } from './data';


function AboutProduct () {
  const navigate = useNavigate();
  const { title } = useParams();

  return (
    <div>
      {data.filter((item) => item.title === title).map((elem, index) => {
        return (
					<div key={index}>
						<h3>{elem.name}</h3>
						<p>{elem.description}</p>
						<img src={elem.image} alt='product' width='400px' />
						<button className='btn' onClick={() => navigate(-1)}>
							Go back
						</button>
					</div>
				)
      })}
      <h1>Our clothes are made from real silk and millions of us wear them. Do not miss your chance to buy high-quality clothes at the best prices. We have 1000 stores all over the world and millions of factories</h1>

    </div>
  )
}

export default AboutProduct;