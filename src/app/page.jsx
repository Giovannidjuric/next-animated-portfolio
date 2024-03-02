import Image from 'next/image';

const Homepage = () => {
  return <div className="flex flex-col h-screen px-4 lg:flex-row sm:px-8 md:px-12 lg:px-48 lg:items-center">
    
    {/* IMAGE CONTAINER */}
    <div className="relative h-1/2 lg:w-1/2 lg:h-full">
      <Image className="object-contain" src="/hero.png" fill alt="hero image"/>
      
    </div>
      {/* TEXT CONTAINER */}
      <div className=" flex flex-col items-center justify-center w-full gap-8 border h-1/2 lg:w-[50%] lg:h-full">
        {/* Title */}
        <h1 className="text-4xl font-bold m md:text-6xl">Crafing Digital Experiences, Designing Tomorrow.</h1>
        {/* Description */}
        <p className="md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Voluptas, consectetur vero! 
          Cum expedita excepturi architecto harum, aspernatur 
          maiores ea pariatur aut distinctio? Quas facere officiis autem, at fugiat vero soluta.</p>
        {/* Buttons */}
        <div className="flex gap-4 button-container">
          <button className="p-4 text-white bg-black rounded-lg ring-1 ring-white">View my work</button>
          <button className="p-4 text-black bg-white rounded-lg ring-black ring-1">Contact me</button>
        </div>
      </div>
  </div>;
};

export default Homepage;
