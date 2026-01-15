import AffiliateIcon from "./AffiliateIcon";
import {
  faBluesky,
  faInstagram,
  faLinkedinIn,
  faRedditAlien,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function AffiliateTray() {
  return (
    <nav className="flex-row gap-1.5 hidden sm:flex">
      <AffiliateIcon
        link="https://www.instagram.com/charlieriback/"
        icon={faInstagram}
      />
      <AffiliateIcon link="https://x.com/charlieriback" icon={faXTwitter} />
      <AffiliateIcon
        link="https://bsky.app/profile/charlieriback.bsky.social"
        icon={faBluesky}
      />
      <AffiliateIcon
        link="https://www.reddit.com/user/Chucklebuck1e/"
        icon={faRedditAlien}
      />
      <AffiliateIcon
        link="https://www.linkedin.com/in/charlie-zeifman-9161b4235/"
        icon={faLinkedinIn}
      />
    </nav>
  );
}
