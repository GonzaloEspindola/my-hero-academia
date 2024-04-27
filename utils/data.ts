export interface DocData {
  title: string
  description: string
  subtitle?: Data[]
}

interface Data {
  title: string
  description: string
  response?: Response
}

interface Response {
  method: string
  url: string
  value: any
}

export const baseUrl = 'https://myheroacademia-api.com/'

export const docsData: DocData[] = [
  {
    title: 'Introducción',
    description:
      'Esta es la documentación de la API de My Hero Academia API y le brinda información sobre cómo usarla. A continuación, exploraremos todas las rutas y estructuras de datos, anudándole a familiarizarse con la API.',
    subtitle: [
      {
        title: 'Rutas',
        description:
          'La URL base se mantiene constante y es fundamental para ir añadiendo progresivamente diferentes rutas que aporten la información deseada. Todas las respuestas tienen la forma de solicitudes GET a través de HTTPS y devuelven datos en formato JSON.',
      },
    ],
  },
  {
    title: 'Personajes',
    description:
      'Aca estará detallada la información sobre las posibilidades de las rutas de los personajes',
    subtitle: [
      {
        title: 'Obtener todos los personajes',
        description:
          'Puede acceder a la lista de caracteres utilizando la ruta /characters',
        response: {
          method: 'GET',
          url: 'characters',
          value: `[
            {
              "name": "Izuku midoriya",
              "alias": "Deku",
              "birthday": "15/7",
              "height": "166cm",
              "gender": "Male",
              "power": "One for all",
              "status": "alive",
              "family":[
                "Inko Midoriya (mother)",
                "Hisashi Midoriya (father)"
              ]
              },
              {
                "name": "Katsuki bakugo",
                "alias": "Deku",
                "birthday": "15/7",
                "height": "166cm",
                "gender": "Male",
                "power": "One for all",
                "status": "alive",
                "family":[
                  "Inko Midoriya (mother)",
                  "Hisashi Midoriya (father)"
                ]
                }
          ]`,
        },
      },
    ],
  },
]
