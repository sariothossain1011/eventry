export const ReplaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return mappedArray;
};

export const ReplaceMongoIdInObject = (obj) => {
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }