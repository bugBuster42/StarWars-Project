import LinkColor from './text/LinkColor';

export default function MenuItem({ url, icon, text }) {
  return (
    <LinkColor className="group flex flex-row justify-end" to={url}>
      <span className="translate-x-[50px] align-middle text-[#FFC500] opacity-0 transition-all delay-200 duration-[400ms] group-hover:translate-x-[-10px] group-hover:opacity-100">
        {text}
      </span>
      {icon}
    </LinkColor>
  );
}
