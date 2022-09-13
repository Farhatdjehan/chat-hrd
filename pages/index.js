
import Image from 'next/image'
import Layout from '../src/component/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className='card-list__wrapper'>
        <div className='card-template'>Menu 1</div>
        <div className='card-template'>Menu 2</div>
      </div>
    </Layout>
  )
}
