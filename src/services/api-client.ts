const apiClient = () => {
  fetch("https://api.rawg.io/api/games?key=a6ca9a40fde345bea623a3edbeffcf2d", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      console.log(JSON.stringify(data.results));
      setGameQuery(data.results);
    })
    .catch((error) => {
      console.log("Error caught with: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

export default apiClient;
