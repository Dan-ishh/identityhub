import React from 'react';
import Image from 'next/image';
const Productivity = () => {
  return (
    <div className="relative flex justify-center">
      <div className="flex flex-col items-center justify-between">
        <Image
          src={'/images/png/otp.png'}
          alt={'productivity'}
          className=""
          width={200}
          height={64}
        />
        <Image
          src={'/images/png/cc.png'}
          alt={'productivity'}
          className=""
          width={200}
          height={64}
        />
      </div>
      <div>
        <Image
          src={'/images/png/productivity.png'}
          alt={'productivity'}
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <Image
          width={200}
          height={64}
          src={'/images/png/call.png'}
          alt={'productivity'}
          className=""
        />
        <Image
          width={200}
          height={64}
          src={'/images/png/email.png'}
          alt={'productivity'}
          className=""
        />
      </div>
    </div>
  );
};

export default Productivity;
