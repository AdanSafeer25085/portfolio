import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Adan - Full Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          fontSize: 60,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          Adan
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#888',
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          Creating innovative digital solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}