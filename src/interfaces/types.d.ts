type Pokemon = {
    id: string,
    number: string,
    name: string,
    image: string,
    classification: string,
    weight: {
        minimum: string,
        maximum: string
    }
    height: {
        minimum: string,
        maximum: string
    }
}