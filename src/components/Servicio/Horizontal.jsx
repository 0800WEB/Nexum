import React from 'react'
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

const Horizontal = () => {
    return (
        <ScrollContainer>
            <div className="w-full min-h-[823px] spacing justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-end gap-8 inline-flex">
                    <h4 className="h2-styled max-w-[733px] text-center">Innovación Estratégica y Ejecución Meticulosa</h4>
                    <div className="max-w-[734px] text-center text-neutral-800/opacity-80 text-base font-normal font-['Helvetica Neue LT Std']">Desde la concepción hasta la implementación, nuestro enfoque integral de branding garantiza que cada detalle de tu marca esté alineado y optimizado para el éxito.</div>
                </div>
            </div>
            <HorizontalSection>
            <div className="ns-horizontal-section__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui
          ligula, commodo quis quam in, accumsan finibus dolor. Nunc ac finibus
          purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna.
          Duis eu imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh,
          lobortis eget turpis eget, iaculis condimentum lacus.
        </div>
        <div className="ns-horizontal-section__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui
          ligula, commodo quis quam in, accumsan finibus dolor. Nunc ac finibus
          purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna.
          Duis eu imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh,
          lobortis eget turpis eget, iaculis condimentum lacus.
        </div>
        <div className="ns-horizontal-section__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui
          ligula, commodo quis quam in, accumsan finibus dolor. Nunc ac finibus
          purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna.
          Duis eu imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh,
          lobortis eget turpis eget, iaculis condimentum lacus.
        </div>

            </HorizontalSection>
        </ScrollContainer>
    )
}

export default Horizontal