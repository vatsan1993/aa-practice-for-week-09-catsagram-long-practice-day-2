export const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      'https://api.thecatapi.com/v1/images/search?size=small'
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImg = document.querySelector('img');
    kittenImg.src = kittenData[0].url;
  } catch (e) {
    console.log('Failed to fetch image', e);
  }
};
