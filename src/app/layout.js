import Head from 'next/head'

import './globals.css'


export const metadata = {
  title: '桃几OvO的歌单',
  keywords: '桃几OvO,B站,bilibili,哔哩哔哩,电台唱见,歌单',
  description: '桃几OvO的歌单',
  viewport: 'initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh" class="max-lg:bg-background lg:bg-backgroundImgOffset lg:bg-backgroundImg lg:bg-no-repeat lg:bg-cover lg:bg-fixed">
      <body>{children}</body>
    </html>
  )
}
