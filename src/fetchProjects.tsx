import { createClient } from 'contentful'

const client = createClient({
  space: 'secret',
  environment: 'master',
  accessToken: 'secret',
})

client
  .getEntries({
    content_type: 'projects',
  })
  .then((response) => console.log(response))
