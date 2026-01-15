import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface AffiliateIconProps {
  link: string;
  icon: IconProp;
}

export default function AffiliateIcon({ link, icon }: AffiliateIconProps) {
  return (
    <a
      className="size-10 ring ring-gray-200 rounded-md transition-shadow duration-100 hover:ring-gray-950 flex items-center justify-center"
      href={link}
    >
      <FontAwesomeIcon className="text-gray-200 text-2xl" icon={icon} />
    </a>
  );
}
