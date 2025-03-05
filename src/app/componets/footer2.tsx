import { LinkedinLogo, EnvelopeSimple, Phone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

export function Footer2() {
    return (
        <section className="bg-white py-16 text-white">

            <div className='container mx-auto px-4'>
                <div className="border-b border-white/20 pb-8 flex justify-center">
                    <h4 className="text-4xl font-bold mb-8 text-black tracking-wide uppercase px-6 py-3 border-4 border-black rounded-xl shadow-lg transition-all duration-500 hover:bg-black hover:text-white">
                        Contacto
                    </h4>
                </div>
                <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full max-w-md mx-auto my-auto flex flex-col justify-center items-center text-center">

                    <p>
                        Si estás interesado en <span className="font-semibold text-blue-600">trabajar conmigo</span>, no dudes en escribirme vía
                        <span className="font-semibold text-blue-600"> LinkedIn</span>,
                        <span className="font-semibold text-green-600"> WhatsApp</span> o
                        <span className="font-semibold text-red-600"> correo</span>, o incluso <span className="font-semibold text-purple-600">llamarme</span>.
                    </p>
                </div>


                <div className="flex justify-center items-center min-h-[250px]">
                    <footer className="bg-white text-white rounded-lg p-6 shadow-lg w-full max-w-md">
                        <div className="space-y-3">

                            <p className="flex items-center gap-2 justify-center">
                                <Phone className="w-5 h-5 text-black" />
                                <a
                                    href="tel:+527751578470"
                                    className="text-black hover:underline font-medium"
                                >
                                    (+52) 7751578470
                                </a>
                            </p>

                            <p className="flex items-center gap-2 justify-center">
                                <EnvelopeSimple className="w-5 h-5 text-black" />
                                <a
                                    href="mailto:danielbuatistabarrera@gmail.com"
                                    className="text-black hover:underline font-medium"
                                >
                                    danielbuatistabarrera@gmail.com
                                </a>
                            </p>

                            <p className="flex items-center gap-2 justify-center">
                                <LinkedinLogo className="w-5 h-5 text-black" />
                                <a
                                    href="https://www.linkedin.com/in/daniel-bautista-barrera-a6b773315/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:underline font-medium"
                                >
                                    Daniel Bautista Barrera
                                </a>
                            </p>
                            <p className="flex items-center gap-2 justify-center">
                                <a
                                    target='_blank'
                                    href={`https://wa.me/7751578470?text=Hola,Buenos Dias `}
                                    className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                                >
                                    <WhatsappLogo className='w-5 h-5' />
                                    Contacto via WhatsApp
                                </a>
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}