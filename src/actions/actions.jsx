export const addtodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
        id:Math.random()*10,
        data:data
    }
  };
};

export const deletetodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};
export const removeall = () => {
  return {
    type: "REMOVE_ALL",
  };
};
