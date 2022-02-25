import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: '@soywendyro_',
    description: 'Alguien me enseña hacer el avioncito 🥺 #lomejorestallegando #fyp',
    likes: 12,
    shares: 1,
    comments: 100,
    songTitle: 'sonido original - 💕 DJ LINDA 💕',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3e761ae78db733fb14ffbac165caecf4~c5_720x720.jpeg?x-expires=1645909200&x-signature=lBNr%2FOiWzK9VKaBrIPlMp6Oz544%3D',
    src: 'https://v16-webapp.tiktok.com/a208d7d43c8abcdf791d087068564639/62199faa/video/tos/useast2a/tos-useast2a-ve-0068c003/3cd9aa6968c04d4b81a909d2e13ee658/?a=1988&br=3762&bt=1881&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7ThK7-2DXq&l=20220225213340010223120096000FE8CE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc6NGY6ZjNqOTMzNzczM0ApOzdoaWc6ZjxnNzdlZjtpZ2cxZ182cjRvMXBgLS1kMTZzcy42MDM0YjUvNDExMzAtXy86Yw%3D%3D&vl=&vr=',
  },
  {
    id: 2,
    author: '@juanessanchezp',
    description: 'El Pollo a la Naranja más fácil de hacer 😍 #receta #recetafacil #polloalanaranja #jumm #comida #foodie #fyp',
    likes: 300,
    shares: 100,
    comments: 12,
    songTitle: 'sonido original - 💕 DJ LINDA 💕',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3e761ae78db733fb14ffbac165caecf4~c5_720x720.jpeg?x-expires=1645909200&x-signature=lBNr%2FOiWzK9VKaBrIPlMp6Oz544%3D',
    src: "https://v16-webapp.tiktok.com/88c9a426f79391537dd1eccf3db872c3/62199fb8/video/tos/useast2a/tos-useast2a-ve-0068c003/2c4b761874ec4c89a22635e9cc4fe3b5/?a=1988&br=3822&bt=1911&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Thb7-2DXq&l=20220225213338010189090066030F7A9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3VlPGg6Zm1qOzMzNzczM0ApZjo2OTxpaDxlN2QzaDRlZGctbTFlcjRfay5gLS1kMTZzc14uXmNeYjReMWI0LmMxYDI6Yw%3D%3D&vl=&vr="
  }
]

export default function FeedVideos() {

  return (
      VIDEOS.map(video => (
        <div key={video.id} className="styles.item">
          <VideoPlayer
            {...video}
          />
        </div>
      ))
  )

}