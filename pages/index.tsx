import { Button } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from '../components/layouts';



const HomePage: NextPage = () => {
  return (
    <Layout title={'Pokemon App Web'}>
      <h1>Hola Mundo!</h1>
      <Button color='gradient' > Click me! </Button>
    </Layout>
  )
}

export default HomePage
