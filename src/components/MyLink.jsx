import { forwardRef } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

const MyLink = forwardRef(function MyLink(props, ref) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

export default MyLink;
