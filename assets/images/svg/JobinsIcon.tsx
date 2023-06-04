import * as React from 'react';

const JobinsIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} fill="none" {...props}>
    <rect width={28} height={24} fill="#0F60FF" rx={8} />
    <path
      fill="#fff"
      d="M15.424 4H22v4.444h-1.232c-2.14 0-3.602-.333-4.384-1-.64-.548-.96-1.434-.96-2.656V4ZM7 10.374A6.374 6.374 0 0 1 13.374 4v6.442h1.752a3 3 0 0 1 3 3v.069h-4.752v.091A6.374 6.374 0 0 1 7 19.977v-9.603Zm8.412 8.486c0-1.623.948-2.724 2.844-3.304.727-.22 1.663-.329 2.808-.329H22V20h-6.588v-1.14Z"
    />
  </svg>
);

export default JobinsIcon;
