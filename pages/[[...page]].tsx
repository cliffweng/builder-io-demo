import { builder, BuilderComponent } from '@builder.io/react'
import { ChakraProvider } from '@chakra-ui/react'
import {WHeader, WFooter} from '../components/wSections'
import '../components/hero'

builder.init("4e2fd74e646e4748b901efc919c33c72")
// You control this page and how and where Builder renders
// https://www.builder.io/c/docs/integrating-builder-pages
export default function Home({ builderJson }) {
  return (
    <ChakraProvider>
    <WHeader />
      {/* Render your Builder.io content https://www.builder.io/c/docs/quickstart */}
      <main className="min-h-[70vh]">
        <BuilderComponent model="page" content={builderJson} />
      </main>
      <WFooter />
    </ChakraProvider>
  )
}

// Fetch Builder.io content from the content API
// https://www.builder.io/c/docs/content-api
export async function getStaticProps({ params }) {
  const content = await builder.get('page', { 
    url: '/' + (params.page?.join('/') || '') 
  }).promise()
  return { props: { builderJson: content || null } }
}

// Query a list of pages in Builder
// https://www.builder.io/c/blueprints/landing-pages
export async function getStaticPaths() {
  const pages = await builder.getAll('page', { fields: 'data.url' })
  return {
    paths: pages.map(page => ({ params: { page: page?.data?.url } })),
    fallback: true
  }
}