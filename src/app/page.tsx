import '../styles/globals.css'

export default function Home() {
  return (
    <div className='under construction'>
      <video style={{position: 'fixed', top:'0', left:'0', zIndex:'-1'}} src="videos/laruina-intro.mp4" controls={false} muted autoPlay width='100%' loop></video>
      <div className='darkCanvas'>
        <h1 style={{zIndex:'99'}}>Under Construction</h1>
        <h2>Soon...</h2>
      </div>
    </div>
  )
}
