export const ProductListItem = ({ product }) => {
    const { name, price, description } = product;

    return (
        <>
            <h3>{name}</h3>
            <p>${price}</p>
            <h3>Description:</h3>
            <p>{description}</p>
        </>
    )
}