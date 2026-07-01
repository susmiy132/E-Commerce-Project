import { Link } from "react-router";

interface BreadCrumbProps {
  title?: string;
  urls?: {
    title: string;
    link: string;
  }[];
}

export default function BreadCrumb({
  title = "My Account",
  urls = [],
}: BreadCrumbProps) {
  return (
    <div className="bg-primary-lighter">
      <div className="container py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[80px] 2xl:py-[96px]">
        <p className="font-josefin text-4xl font-bold text-primary-dark">
          {title}
        </p>

        <ul className="mt-2 flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>

          {urls.map((item) => (
            <li key={item.link}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}