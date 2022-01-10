export function dateConverter(dateObj) {
  const year = dateObj.getFullYear().toString();
  const minusMonth = dateObj.getMonth() + 1;
  const month = minusMonth.toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const result = `${year}-${month}-${day}`;
  return result;
}
export const makeQueryString = selection => {
  const queryDate = selection.date && `?running_date=${selection.date}`;
  const queryMovie = selection.movie && `&movie_id=${selection.movie}`;
  const queryRegion = selection.region && `&region=${selection.region}`;
  const queryTheater = selection.theater && `&theater=${selection.theater}`;
  const querySchedule = selection.schedule && `&schedule=${selection.schedule}`;
  const queryDeactiveMovie =
    selection.deactiveMovie && `&deactive_movie_id=${selection.deactiveMovie}`;
  return `${queryDate}${queryMovie}${queryRegion}${queryTheater}${queryDeactiveMovie}${querySchedule}`;
};

export const resetValue = obj => {
  for (const key in obj) {
    obj[key] = '';
  }
};
