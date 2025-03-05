
"use client"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
    {
        title: "Módulo Vehículos",
        image: "/carros.png",
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
        title: "Módulo Documentación",
        image: "/documentos.png",
        linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
        title: "Módulo Usuarios",
        image: "/usuarios.png",
        linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    
    {
        title: "Módulo Alumnos",
        image: "/alumnos.png",
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
    {
        title: "Módulo Categorías",
        image: "/categoria.png",
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
];


export function Services3() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">

            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8 flex justify-center">
                    <h4 className="text-4xl font-bold mb-8 text-black tracking-wide uppercase px-6 py-3 border-4 border-black rounded-xl shadow-lg transition-all duration-500 hover:bg-black hover:text-white">
                        EXPERIENCIA LABORAL
                    </h4>

                </div>
                <h2
                    className="text-5xl font-extrabold mb-6 text-center text-black tracking-wide 
             opacity-100 translate-y-0 transition-all duration-700 ease-out delay-200 
             hover:scale-105 hover:text-orange-600"
                >
                    Imunicipio
                </h2>

                <h5
                    className="text-xl font-semibold text-center text-gray-600 mb-8 
             opacity-100 translate-y-0 transition-all duration-700 ease-out delay-500 
             hover:scale-105 hover:text-gray-800"
                >
                    Inftel, Octubre/2024 a Febrero/2025
                </h5>



                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl overflow-hidden shadow-lg">
                                        <div className="relative w-full h-64">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-center p-4">{item.title}</h3>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                    >
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>

                </div>
            </div>
        </section>
    );
}
