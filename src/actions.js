
export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location,
  }
}

export function setData(data) {
  return {
    type: 'SET_DATA',
    data: data,
  }
}

export function setDates(dates) {
  return {
    type: 'SET_DATES',
    dates,
  }
}

export function setTemps(temps) {
  return {
    type: 'SET_TEMPS',
    temps,
  }
}

export function setSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date,
  };
}

export function setSelectedTemp(temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp,
  };
}
