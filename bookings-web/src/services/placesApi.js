export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getOnePlace = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`);
  if (response.ok) {
    const result = await response.json();
    return {
      id: result.id,
      name: result.name,
      description: result.description,
      location: result.location,
      image: result.image,
      pool: result.pool,
      wifi: result.wifi,
      pricePerNight: result.price_per_night,
      imageThumbnail: result.image_thumbnail,
      maxGuests: result.max_guests,
      petFriendly: result.pet_friendly
    };
  } else {
    throw new Error(await response.json());
  };
};