'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react';

const games = [
  {id: 1, title: 'Red Dead Redemption 2', image: '/gameSliderImg/read-dead.png'},
  {id: 2, title: 'Grand Theft Auto V', image: '/gameSliderImg/gta-v.png'},
  {id: 3, title: 'Watch Dogs 2', image: '/gameSliderImg/watch-dogs.png'},
  {id: 4, title: 'Call of Duty: Cold War', image: '/gameSliderImg/cod-cold-war.png'},
  {id: 5, title: 'The Last of Us', image: '/gameSliderImg/last-of-us.png'},
  {id: 6, title: 'Cyberpunk 2077', image: '/gameSliderImg/cyberpunk.png'},
  {id: 7, title: 'Assassin’s Creed Valhalla', image: '/gameSliderImg/ac-valhalla.png'},
];

const GameSlider = () => {

  return (
    <div className="relative w-full max-w-4xl mx-auto pl-4 pr-4 bg-[#021726]">
      {/* Swiper Navigation Buttons */}
      <button className="absolute left-[-60] top-1/2 -translate-y-1/2 z-10 bg-[#2A54A9] p-3 h-full rounded-es-lg text-white hover:bg-[#C5CEFE] hover:text-[#2A54A9]" id="prev-button">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-[-60] top-1/2 -translate-y-1/2 z-10 bg-[#2A54A9] p-3 h-full rounded-e-lg text-white hover:bg-[#C5CEFE] hover:text-[#2A54A9]" id="next-button">
        <ChevronRight size={24} />
      </button>

      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          nextEl: '#next-button',
          prevEl: '#prev-button',
        }}
        className="rounded-xl my-5"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="flex justify-center">
            <div
              className={`relative bg-[#2A54A9] p-1 rounded-lg overflow-hidden transition-all duration-300`}
                >
              <Image src={game.image} alt={game.title} width={150} height={200} className="rounded-lg object-cover" />
            </div>
            <Gamepad2 className='absolute z-50 top-0 right-0 rounded-2xl p-1 bg-emerald-600' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameSlider;
