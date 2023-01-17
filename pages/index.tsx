import { Fragment } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Katar from "../images/katar.jpeg";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

function Home({ pageInfo, experiences, skills, socials, projects }: Props) {
  return (
    <Fragment>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        <meta
          name='description'
          content='Perfect match for companies which searching a Front-end (React.js) Developer'
        />
      </Head>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        <Header socials={socials} />

        <section id='hero' className='snap-start'>
          <Hero pageInfo={pageInfo} />
        </section>

        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section>

        <section id='experiences' className='snap-center'>
          <Experiences experiences={experiences} />
        </section>

        <section id='skills' className='snap-start'>
          <Skills skills={skills} />
        </section>

        <section id='projects' className='snap-start'>
          <Projects projects={projects} />
        </section>

        <section id='contact' className='snap-start'>
          <ContactMe pageInfo={pageInfo} />
        </section>
        <Link href='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src={Katar}
                alt=''
              />
            </div>
          </footer>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
