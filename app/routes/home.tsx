import type { Route } from './+types/home'
import { Sidebar } from '~/components/Sidebar'
import { SearchInput } from '~/components/SearchInput'
import { Header } from '~/components/Header'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Music Streaming Concept' },
    {
      name: 'description',
      content:
        'Descubre canciones, artistas y playlists con nuestra aplicación de streaming de música. Explora géneros, busca tus canciones favoritas y sumérgete en el mundo de la música.',
    },
  ]
}

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}
