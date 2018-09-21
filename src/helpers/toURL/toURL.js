const toURL = (title) => {
  return title.toLowerCase().replace(/ /g, '-')
}

export default toURL
