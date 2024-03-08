import { Link } from 'react-router-dom';

function Clothes({ itemForSale }) {
	return (
		<div className='products'>
			{itemForSale.map(element => {
				const { id, name, searchTerm, price, image, title } = element
				return (
					<div key={id} className='product-card'>
						<Link to = {`/${title}`}>
							<img src={image} alt='cloth' width='400px' height='500px' />
						</Link>

						<div className='product-info'>
							<h3>{name}</h3>
							<h4>{searchTerm}</h4>
							<h4> $ {price}</h4>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default Clothes
