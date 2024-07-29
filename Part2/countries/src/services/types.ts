export type Country = {
  name: {
    common: string,
    official: string
  },

  cca3: string,
  capital: string,
  languages: string[],
  area: number,

  flags: {
    png: string
  }
}

export type Weather = {
  weather: {
    icon: string
  }[],

  main: {
    temp: number
  },

  wind: {
    speed: number
  },

  clouds: {
    all: number
  },

  sys: {
    sunrise: number,
    sunset: number
  },

  timezone: number,
}