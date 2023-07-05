import { createClient, Entry } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: import.meta.env.VITE_APP_API_SPACE,
  environment: 'master',
  accessToken: import.meta.env.VITE_APP_API_KEY,
})

type Project = {
  title: string
  url: string
  id: string
  img: string | undefined
}

interface Fields {
  title: string
  url: string
  image: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      })
      const projects = response.items.map((item: Entry<unknown>) => {
        const { title, url, image } = item.fields as Fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
