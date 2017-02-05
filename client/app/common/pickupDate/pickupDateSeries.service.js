class PickupDateSeriesService {
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }

  create(series) {
    return this.$http.post("/api/pickup-date-series/", series)
      .then((res) => res.data);
  }

  get(seriesId) {
    return this.$http.get(`/api/pickup-dates-series/${seriesId}/`)
      .then((res) => res.data);
  }

  list() {
    return this.$http.get("/api/pickup-dates-series/")
      .then((res) => res.data);
  }

  listByStoreId(storeId) {
    return this.$http.get("/api/pickup-dates-series/", { params: { store: storeId } })
      .then((res) => res.data);
  }

  save(series) {
    let seriesId = series.id;
    return this.$http.patch(`/api/pickup-dates-series/${seriesId}/`, series)
      .then((res) => res.data);
  }

  delete(seriesId) {
    return this.$http.delete(`/api/pickup-dates-series/${seriesId}/`);
  }
}

export default PickupDateSeriesService;
