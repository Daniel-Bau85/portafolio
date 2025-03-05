import Image from "next/image";
import fotoImg from '../../../public/foto.jpg'
import biciImg from '../../../public/BICI.jpg'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#ffffff] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative flex justify-center" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={fotoImg}
                                alt="Foto do cachorro"
                                width={500}
                                height={500}
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>



                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={biciImg}
                                alt="Foto do cachorro 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>

                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <div className="border-b border-white/20 pb-8 flex justify-center">
                            <h4 className="text-4xl font-bold mb-8 text-black tracking-wide uppercase px-6 py-3 border-4 border-black rounded-xl shadow-lg transition-all duration-500 hover:bg-black hover:text-white">
                                Sobre Mi
                            </h4>

                        </div>
                        <p>
                            Como un Full-Stack Developer me gusta enfrentar desafíos y mejorar constantemente mis habilidades. Disfruto especialmente el desarrollo backend, trabajando con Java, Node.js y PostgreSQL, aunque también tengo experiencia con React y Next.js.

                            Me motiva resolver problemas de manera eficiente y aprender nuevas tecnologías que me ayuden a crecer profesionalmente. En mi tiempo libre, disfruto jugar fútbol y practicar downhill, actividades que reflejan mi espíritu competitivo y mi gusto por la adrenalina.
                            Estudie la carrera de ingenieria en software en la Universidad Politécnica de Pachuca
                        </p>





                    </div>

                </div>


            </div>
        </section>
    )
}