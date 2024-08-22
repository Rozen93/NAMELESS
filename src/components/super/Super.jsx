"use client";

import { useEffect } from "react";
import Image from "next/image";

const Super = () => {
  useEffect(() => {
    const elementos = document.getElementsByClassName("mi-elemento");
    const elementos2 = document.getElementsByClassName("mi-elemento2");
    let valorX = 0;
    let valorX2 = 0;
    let ultimoScroll = window.pageYOffset;

    const handleScroll = () => {
      const actualScroll = window.pageYOffset;
      const velocidadMovimiento = 1.3; // Ajusta esta velocidad según tu preferencia
      const maxDesplazamiento = 150; // Ajusta el máximo desplazamiento permitido

      if (actualScroll > ultimoScroll) {
        // Hacia abajo
        valorX += velocidadMovimiento;
        valorX2 -= velocidadMovimiento;
      } else {
        // Hacia arriba
        valorX -= velocidadMovimiento;
        valorX2 += velocidadMovimiento;
      }

      // Limitar el rango de desplazamiento
      valorX = Math.max(
        -maxDesplazamiento,
        Math.min(maxDesplazamiento, valorX)
      );
      valorX2 = Math.max(
        -maxDesplazamiento,
        Math.min(maxDesplazamiento, valorX2)
      );

      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.transform = `translateX(${valorX}px)`;
      }

      for (let i = 0; i < elementos2.length; i++) {
        elementos2[i].style.transform = `translateX(${valorX2}px)`;
      }

      ultimoScroll = actualScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="content-image" className="full">
      <div className="mb-14 md:mb-0">
        <div className="">
          <div className="image">
            <div className="tiles-gallery half ">
              <div className="tiles-wrap">
                <div className="tiles-line oblique-image mi-elemento">
                  <div className="tiles-line-img">
                    <Image
                      src="/cbd-team1.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                    <Image
                      src="/cbd-team2.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                    <Image
                      src="/cbd-team3.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team4.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team5.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team6.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team3.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team8.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team9.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
                <div
                  className="tiles-line oblique-image mi-elemento2"
                  style={{
                    transform:
                      "translate(-8.9463%, 0%) translate3d(144.4px, 0px, 0px)",
                  }}
                >
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team10.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team11.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team12.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team13.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team14.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team15.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team16.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team1.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team2.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
                <div className="tiles-line oblique-image mi-elemento">
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team3.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team4.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team5.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team6.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team2.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team8.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team9.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team10.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team11.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
                <div className="tiles-line oblique-image mi-elemento2">
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team12.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team13.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team14.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team15.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team16.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team1.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team2.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team3.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team4.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
                <div className="tiles-line oblique-image mi-elemento">
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team5.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team6.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team2.avif"
                      alt="Descripción de la "
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team8.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team9.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                  <div className="tiles-line-img">
                  <Image
                      src="/cbd-team10.avif"
                      alt="Descripción de la imagen"
                      layout="responsive"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
              </div>

              {/* Otros elementos similares */}
            </div>
          </div>
        </div>
        {/* <div className="col-span-1 lg:col-span-1 flex items-center">
          <div className="text p-8">
            <div className="headers mb-4">
              <h4 className="text-lg" data-fade-right="">
                Be More Creative
              </h4>
              <h2 className="text-2xl font-bold gradient" data-fade-right="">
                Creative Brand Design Team
              </h2>
            </div>
            <div className="content" data-fade-right="">
              <p>
                We’re an established, experienced, and trusted{" "}
                <strong>London web design agency</strong> with years of
                experience in providing successful web design solutions.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Super;
