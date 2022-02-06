export const List = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}) => {
    return (
        <>
            {items.map((item) => {
                return <ItemComponent {...{[resourceName]: item}} />
            })}
        </>
    )
}