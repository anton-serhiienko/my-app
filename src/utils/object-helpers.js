export const updateObjectInArray = (items, itemId, objPropName, newObjProps ) => {
    items.map(u => {
        return (u[objPropName] === itemId) ? {...u, newObjProps} : u;
    })
}