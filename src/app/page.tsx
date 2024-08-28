import Hero from "@/components/hero/Hero";
import Particle from "@/components/hero/particle/Particle";
import Image from "next/image";
import RhinoHeading from "@/components/title_component/Rhino_heading";
import RhinoText from "@/components/paragraph_component/RhinoParagraph";
import ContainerRhino from "@/components/container_rhino/Container";
import Quad from "@/components/quad_images/Quad";
import TiltCard from "@/components/02_tilt_card/TiltCardTwo";
import GroupTiltCard from "@/components/01_tilt_card/GroupTiltCard";
import Super from "@/components/super/Super";
function Home() {
  return (
    <>
      <Hero>
        <Particle />
      </Hero>

      <ContainerRhino isNormal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40">
          <div>
            <RhinoHeading
              subHeading="DESCUBRE NUESTROS SERVICIOS DIGITALES INTEGRADOS"
              heading="IMPULSA TU PRESENCIA ONLINE"
            />
            <RhinoText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores{" "}
              <b>promoción y publicidad en línea</b> Itaque et animi quia
              consectetur autem illum minima quasi odio. Repudiandae doloremque
              accusantium facilis nobis amet, facere neque provident alias.
            </RhinoText>
            <RhinoText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              sunt quas officia voluptate eaque minima, alias quasi ad nobis
              vitae. Necessitatibus quisquam cumque accusantium quibusdam optio
              sunt veritatis commodi, voluptates eaque, quos illum rem
              voluptatibus at nemo quia? Facere recusandae quas esse neque
              commodi?
            </RhinoText>
          </div>

          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[500px]">
            {/* <Image
              src="/home01.png"
              alt="Descripción de la imagen"
              layout="fill"
              className="object-cover mt-5 md:mt-0" 
            /> */}

            <Quad />
          </div>
        </div>
      </ContainerRhino>

      <ContainerRhino isFull isReal>
        <RhinoHeading
          subHeading="MIRA LO QUE TE OFRECEMOS"
          heading="ULTIMOS PROYECTOS"
          subClass="text-center"
          headClass="text-center"
        />
        <GroupTiltCard />
      </ContainerRhino>

      

      <ContainerRhino>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 place-content-center mt-12 pt-3">
          <Super />
          <div>
            <RhinoHeading
              subHeading="DESCUBRE NUESTROS SERVICIOS DIGITALES INTEGRADOS"
              heading="IMPULSA TU PRESENCIA ONLINE"
            />
            <RhinoText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores{" "}
              <b>promoción y publicidad en línea</b> Itaque et animi quia
              consectetur autem illum minima quasi odio. Repudiandae doloremque
              accusantium facilis nobis amet, facere neque provident alias.
            </RhinoText>
            <RhinoText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              sunt quas officia voluptate eaque minima, alias quasi ad nobis
              vitae. Necessitatibus quisquam cumque accusantium quibusdam optio
              sunt veritatis commodi, voluptates eaque, quos illum rem
              voluptatibus at nemo quia? Facere recusandae quas esse neque
              commodi?
              otra vez rama2
            </RhinoText>
          </div>
        </div>
      </ContainerRhino>

      <div className="h-[100vh]"></div>
    </>
  );
}

export default Home;
