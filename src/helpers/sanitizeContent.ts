export function sanitizeContent(data: any) {
  let sanitizedContent = null

  if (data.name) {
    const { films, ...rest } = data
    const { name, eye_color, height, mass } = rest
    sanitizedContent = {
      properties: { 
        name, 
        eye_color, 
        height, 
        mass 
      },
      films,
    }
  } else {
    const { title, director, producer, release_date } = data
    sanitizedContent = {
      properties: {
        title,
        director,
        producer,
        release_date,
      },
    }
  }

  return sanitizedContent
}