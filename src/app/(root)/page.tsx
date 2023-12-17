import { ButtonLink } from './_components/ui/button-link';

const LogoSvg = (
  <svg height="30" viewBox="0 0 221.59 52.38" role="img" aria-label="Corsair" aria-labelledby="corsair-logo-img"><path fill="#FFFFFF" d="M77.2,39.74v-.05A10.29,10.29,0,0,1,87.68,29.18a10.55,10.55,0,0,1,7.94,3.17L93.33,35a8.06,8.06,0,0,0-5.68-2.53c-3.86,0-6.7,3.19-6.7,7.17v.06c0,4,2.81,7.19,6.7,7.19a8,8,0,0,0,5.83-2.61l2.29,2.32a10.5,10.5,0,0,1-8.24,3.6A10.22,10.22,0,0,1,77.2,39.74Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M101.94,39.74v-.05a10.62,10.62,0,0,1,21.23-.06v.06a10.62,10.62,0,0,1-21.23.05Zm17.49,0v-.05a7,7,0,0,0-6.9-7.23,6.87,6.87,0,0,0-6.85,7.17v.06a6.94,6.94,0,0,0,6.91,7.19A6.83,6.83,0,0,0,119.43,39.74Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M131.41,29.53h9.05a8.22,8.22,0,0,1,5.86,2A6.16,6.16,0,0,1,148,35.94V36a6.09,6.09,0,0,1-4.82,6.15l5.49,7.69h-4.24l-5-7.08H135v7.08h-3.56Zm8.78,10.07c2.56,0,4.18-1.34,4.18-3.4v-.05c0-2.18-1.56-3.37-4.2-3.37H135V39.6Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M154.92,46.88l2.15-2.55A9.42,9.42,0,0,0,163.48,47c2.21,0,3.6-1,3.6-2.56v0c0-1.45-.81-2.24-4.58-3.11-4.33-1-6.76-2.32-6.76-6.06v-.06c0-3.48,2.9-5.89,6.93-5.89A11.28,11.28,0,0,1,170,31.79l-1.92,2.7a9.22,9.22,0,0,0-5.51-2.09c-2.09,0-3.31,1.08-3.31,2.41v.06c0,1.57.93,2.26,4.85,3.19,4.29,1,6.5,2.58,6.5,5.95v.06c0,3.8-3,6.06-7.26,6.06A12.55,12.55,0,0,1,154.92,46.88Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M185.52,29.39h3.31l8.93,20.45H194l-2.06-4.9h-9.6l-2.09,4.9h-3.65Zm5.11,12.38-3.51-8.12-3.48,8.12Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M205.36,29.53h3.56V49.84h-3.56Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M218.26,29.53h9.05a8.22,8.22,0,0,1,5.86,2,6.16,6.16,0,0,1,1.68,4.38V36A6.09,6.09,0,0,1,230,42.15l5.48,7.69h-4.24l-5-7.08h-4.47v7.08h-3.57Zm8.79,10.07c2.55,0,4.18-1.34,4.18-3.4v-.05c0-2.18-1.57-3.37-4.21-3.37h-5.19V39.6Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M43.47,13.5S47.79,22.27,47,25.93c0,0,11.27,3.64,12.52,9.65C59.52,35.58,65.69,27.46,43.47,13.5Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M39.13,26.66A39.68,39.68,0,0,1,41.37,34L35,31.59c.59-3.9-3.2-9.83-3.2-9.83Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M27.73,32.7A46,46,0,0,1,29.68,39l-5.8-1.44c.6-3.9-3.08-8.62-3.08-8.62Z" transform="translate(-13.93 -13.5)"></path><path fill="#FFFFFF" d="M40.35,23.32S66.19,41.47,67.89,48.51c1.29,5.3-2.45,10.19-2.45,10.19s-2-13.82-51.51,7.17a26.63,26.63,0,0,0,7-20.44,26.3,26.3,0,0,0-2.43-8.88l11.6,6.16c0,.18,0,.36.05.55a40.11,40.11,0,0,1-1,13.53,31.68,31.68,0,0,0,2.95-16.6A31.93,31.93,0,0,0,29.54,30.1l12.4,8.27c.05.41.08.82.12,1.24a40,40,0,0,1-1.34,14.88,32,32,0,0,0-.37-31.17Z" transform="translate(-13.93 -13.5)"></path><title id="corsair-logo-img">Corsair</title></svg>
);



export default function Home() {
  return (
    <>
      <header className='px-4 py-4'>
        <div className='grid grid-cols-[1fr_4fr_1fr] items-center'>
          <div>{LogoSvg}</div>
          <nav className='justify-self-center w-full'>
            <ul className='flex justify-between gap-4'>
              {[
                "Accessori Gaming",
                "Comopnenti per PC",
                "PC Gaming",
                "Download",
                "iCUE",
                "Community",
                "Supporto",
              ].map(label =>
                <li
                  key={label}
                  className='font-semibold uppercase text-xs'
                >{label}</li>
              )}
            </ul>
          </nav>
          <div className='justify-self-end'>
            <div className='flex gap-2'>
              <div>Search</div>
              <div>Cart</div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* HERO */}
        <div className='relative w-full py-40 px-24 text-center shadow-black/80'>
          <div className='hero-video absolute z-[-1] inset-0'>
            <video className='w-full h-full object-cover' src='/Panel1_video.mp4' muted loop autoPlay />
          </div>
          <h1 className='text-8xl tracking-tighter font-semibold text-shadow-lg'>CORSAIR iCUE LINK</h1>
          <p className='mt-4 text-5xl tracking-wide font-light text-shadow'>ECOSISTEMA CON COMPONENTI SMART</p>
          <hr className='my-8 mx-auto w-[40%] h-1 bg-yellow-300 text-shadow' />
          <p className='text-2xl tracking-wider font-semibold'>VIVI IL FUTURO CON IL TUO PC DIY GRAZIE AD iCUE LINK</p>
          <div className='mt-8 flex gap-4 justify-center'>
            <ButtonLink>Guarda il Trailer</ButtonLink>
            <ButtonLink>Acquista ora</ButtonLink>
          </div>
        </div>
        {/* INFO SECTION */}
        <div className='w-full pt-40 pb-32 text-center '>
          <div className='px-24'>
            <p className='text-lg tracking-wider font-semibold text-yellow-300'>ASSEMBLAGGIO DI PC FACILE E DIVERTENTE</p>
            <h2 className='mt-4 text-5xl font-semibold text-shadow-lg shadow-black'>RIACCENDI LA TUA PASSIONE PER L’ASSEMBLAGGIO DI PC DIY</h2>
            <p className='mt-8 mx-auto max-w-4xl text-xl'>Di’ addio ai grovigli di cavi e ai connettori complicati. Riscopri la passione per l’assemblaggio di sistemi DIY grazie al rivoluzionario ecosistema di componenti intelligenti che renderà la creazione del tuo PC una passeggiata. Sincronizza e controlla fino a 14 dispositivi iCUE LINK con un unico System Hub.</p>
          </div>
          <img className='mt-24 w-full object-cover block' src='/Panel2_image.webp' />
        </div>
        {/* INFO SECTION */}
        <div className='w-full py-32 text-center '>
          <div className='px-24'>
            <img className='mb-10 w-48 mx-auto' src="/Panel3_iCUE_LINK_logo.avif" />
            <p className='text-lg tracking-wider font-semibold text-yellow-300'>ELIMINA IL DISORDINE CON iCUE LINK</p>
            <h2 className='mt-4 text-5xl font-semibold text-shadow-lg shadow-black'>UN CONNETTORE PER DOMARLI TUTTI</h2>
            <p className='mt-8 mx-auto max-w-4xl text-xl'>Dimentica la frustrazione di dover gestire cavi e connettori. iCUE LINK unisce tutti i tuoi componenti utilizzando un’unica connessione intelligente, fornendoti la libertà di collegare i tuoi accessori come vuoi tu.</p>
          </div>
          <div className='mt-12 px-16'>
            <video className='w-full h-full object-cover rounded-[1px]' src='/Panel1_video.mp4' muted loop autoPlay />
          </div>
        </div>
        {/* INFO SECTION */}
        <div className='w-full py-20 grid grid-cols-2'>
          <div className='px-16'>
            <p className='text-lg tracking-wider font-semibold text-yellow-300'>ASSEMBLAGGIO DI PC ACCESSIBILE A TUTTI</p>
            <h2 className='mt-4 text-5xl font-semibold text-shadow-lg shadow-black'>ASSEMBLAGGIO FACILE PER TUTTI</h2>
            <p className='mt-8 mx-auto max-w-4xl text-xl'>Sono finiti i giorni in cui l’assemblaggio di PC era solo per pochi utenti appassionati. Grazie ad iCUE LINK, tutti potranno creare il sistema dei propri sogni in modo facile e divertente.</p>
            <ul className='mt-8 pl-4 list-disc font-semibold marker:text-yellow-300'>
              <li>COLLEGA OGNI DISPOSITIVO A QUELLO SUCCESSIVO, RIDUCENDO NOTEVOLMENTE LA COMPLESSITÀ DEI CAVI</li>
            </ul>
          </div>
          <div className=''>
            <video className='w-full h-full object-cover rounded-[1px]' src='/Panel1_video.mp4' muted loop autoPlay />
          </div>
        </div>
        {/* INFO SECTION */}
        <div className='w-full py-20 grid grid-cols-2'>
          <div className='px-16 order-2'>
            <p className='text-lg tracking-wider font-semibold text-yellow-300'>SBLOCCA NUOVE FUNZIONALITÀ</p>
            <h2 className='mt-4 text-5xl font-semibold text-shadow-lg shadow-black'>UN SISTEMA PIÙ INTELLIGENTE</h2>
            <p className='mt-8 mx-auto max-w-4xl text-xl'>I componenti intelligenti di iCUE LINK supportano funzioni esclusive come l’incredibile modalità di illuminazione Time Warp, oltre a un microcontroller integrato per comunicare in modo bidirezionale con il System Hub. Ma non è finita: ci sono anche i sensori di temperatura che permettono di monitorare il sistema con più precisione.</p>
            <ul className='mt-8 pl-4 list-disc font-semibold marker:text-yellow-300'>
              <li>RILEVAMENTO AUTOMATICO E INSTALLAZIONE DEI DISPOSITIVI iCUE LINK</li>
            </ul>
          </div>
          <div className=''>
            <video className='w-full h-full object-cover rounded-[1px]' src='/Panel1_video.mp4' muted loop autoPlay />
          </div>
        </div>
        {/* INFO SECTION */}
        <div className='w-full py-20 text-center'>
          <div className='px-24'>
            <h2 className='mt-4 text-5xl font-semibold text-shadow-lg shadow-black'>Il resto della pagina non l{"'"}ho ricreato</h2>
            <p className='mt-8 mx-auto max-w-4xl text-xl'>Puoi finirlo andando qui {"=>"} <a className='text-fuchsia-300 underline underline-offset-4' href="https://www.corsair.com/it/it/s/icue-link">https://www.corsair.com/it/it/s/icue-link</a></p>
          </div>
        </div>
      </main>
    </>
  );
}

