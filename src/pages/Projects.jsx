import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../config/projects'

export default function Projects() {
  return (
    <>
      <div className='bg-zinc-800 text-white'>
        <Header
          title1={'My Recent'}
          title2={' Works'}
          description={"Here are a few projects I've worked on recently."}
        />
        <section className='bg-primary/70 px-4 md:px-8 pt-20 pb-10 md:pt-28'>
          <div className='container max-w-3xl mx-auto text-black'>
            <div>
              {projects.map((item, i) => {
                return (
                  <ProjectCard
                    key={i}
                    build={item.build}
                    hrefDemo={item.hrefDemo}
                    hrefRepo={item.hrefRepo}
                    image={item.image}
                    title={item.title}
                  >
                    {item.description}
                  </ProjectCard>
                )
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
