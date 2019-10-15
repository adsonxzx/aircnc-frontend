
export const setAuthId = (id) => {
  localStorage.setItem("id", id)
}

export const getAuthId = () => localStorage.getItem("id")