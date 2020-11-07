function chooseImage(images, defaultImg) {
  if (images) {
    if (images.length) {
      return images[0].url;
    }
  }
  return defaultImg;
}

export default chooseImage;